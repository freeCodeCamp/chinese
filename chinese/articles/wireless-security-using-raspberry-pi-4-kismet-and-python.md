> - 原文地址：[How to Secure Your Home Wireless Infrastructure with Kismet and Python](https://www.freecodecamp.org/news/wireless-security-using-raspberry-pi-4-kismet-and-python/)
> - 原文作者：[Jose Vicente Nunez](https://www.freecodecamp.org/news/author/jose-vicente-nunez/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Secure Your Home Wireless Infrastructure with Kismet and Python](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/wireless_security_with_kismet_and_python.png)

如今，所有的东西都连接到了无线。在我的例子中，我发现在我的家庭网络上运行一个简单的 [nmap 命令](https://www.freecodecamp.org/news/enhance-nmap-with-python/#nmap-101-identify-all-the-public-services-in-our-network) 之后，我有很多设备可以被探测到:

```shell
[josevnz@dmaf5 ~]$ sudo nmap -v -n -p- -sT -sV -O --osscan-limit --max-os-tries 1 -oX $HOME/home_scan.xml 192.168.1.0/24
```

所以我想知道：

- 我的无线网络安全吗？
- 攻击者需要多长时间才能进入？

我有一个安装了 Ubuntu（focal）的 _树莓派 4_，决定用著名的 [Kismet](https://www.kismetwireless.net)来了解一下。

在这篇文章中，你将学习:

- 如何用 Kismet 获得你附近网络的全貌
- 如何使用 Python 和 REST-API 定制 Kismet

![raspberrypi-wireless-setup-1](https://www.freecodecamp.org/news/content/images/2022/03/raspberrypi-wireless-setup-1.png)

如果你感到好奇，这是我家里的树莓派 4，小小的显示器和所有的东西。

# 目录

- [The saying 'Ask for forgiveness, not permission' doesn't apply here](#the-saying-ask-for-forgiveness-not-permission-doesn-t-apply-here)
- [Getting to know your hardware](#getting-to-know-your-hardware)
- [kismet](#kismet)
- [REST-API](#restapi)
- [What did we learn?](#what-did-we-learn)

# The saying 'Ask for forgiveness, not permission' doesn't apply here

而我的意思是，_你不应该试图窃听或渗透到一个不属于你的无线网络，而且这也是非法的_。检测一个新的未知客户是否加入了你的无线网络是比较容易的。

所以要做正确的事——用这个教程来学习，而不是闯入别人的网络。

# Getting to know your hardware

我将跳到前面一点，向你展示树莓派 4 集成无线接口的一个小问题。

**树莓派 4 的板载无线网卡，不能开箱即用**， 因为固件不支持监控模式（monitor mode）。

有项目可以 [支持这个](https://github.com/seemoo-lab/bcm-rpi3)。相反，我采取了简单的方法，从 [CanaKit](https://www.canakit.com/raspberry-pi-wifi.html) 订购了一个外部 Wi-Fi 加密狗。

CanaKit 的无线网卡开箱即用，我们很快就会看到它。但首先让我们安装并玩一玩 Kismet。

## Make sure the interface is running in monitor mode

默认情况下，网络接口的监控模式（monitor mode）为关闭:

```shell
root@raspberrypi:~# iwconfig wlan1
wlan1     IEEE 802.11  ESSID:off/any  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=0 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Encryption key:off
          Power Management:off

```

我知道把我的 Ralink Technology, Corp. RT5370 无线适配器一直设置城监控模式（monitor mode），但我需要小心，因为 Ubuntu 可能改变 wlan0 和 wlan1 映射的无线网卡（我想跳过的 Broadcom 适配器，它是一个 PCI 设备）。

Ralink 适配器是一个 USB 适配器，所以我们可以找出它:

```shell
josevnz@raspberrypi:/etc/netplan$ /bin/lsusb|grep Ralink
Bus 001 Device 004: ID 148f:5370 Ralink Technology, Corp. RT5370 Wireless Adapter
```

现在我们需要找出什么设备被映射到 Ralink 适配器上。在 Ubuntu 社区的帮助下，我发现 Ralink 适配器使用 rt2800 usb 驱动 [5370 Ralink Technology](https://help.ubuntu.com/community/WifiDocs/Device/Ralink_RT5370)

我寻求的答案在这里:

```shell
josevnz@raspberrypi:~$ ls /sys/bus/usb/drivers/rt2800usb/*:1.0/net/
wlan1
```

因此，进行无线网卡检测的代码看起来是这样的:

```shell
root@raspberrypi:~#/bin/cat<<RC_LOCAL>/etc/rc.local
```

```shell
#!/bin/bash
usb_driver=rt2800usb
wlan=\$(/bin/ls /sys/bus/usb/drivers/\$usb_driver/*/net/)
if [ $? -eq 0 ]; then
        set -ex
        /usr/sbin/ifconfig "\$wlan" down
        /usr/sbin/iwconfig "\$wlan" mode monitor
        /usr/sbin/ifconfig "\$wlan" up
        set +ex
fi
RC_LOCAL
```

给启动脚本加上可执行权限

```shell
root@raspberrypi:~# chmod u+x /etc/rc.local && shutdown -r now
"Enabling monitor mode"
```

确保网卡处于监控模式（monitor mode）下:

```shell
root@raspberrypi:~# iwconfig wlan1
iw        iwconfig  iwevent   iwgetid   iwlist    iwpriv    iwspy     
```

```shell
root@raspberrypi:~# iwconfig wlan1
wlan1     IEEE 802.11  Mode:Monitor  Frequency:2.412 GHz  Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

很好，让我们继续进行设置。

# What is Kismet?

[Kismet](https://www.kismetwireless.net/):

> 一个无线网络和设备检测器、嗅探器、驱赶工具和 WIDS（无线入侵检测）框架。

## Kismet installation and setup

默认情况下，安装在树莓派 4 的 Ubuntu 上的 Kismet 是 2016 年的版本，_太老了_ 。

取而代之的是, 从 [这里](https://www.kismetwireless.net/docs/readme/packages/) 获得一个更高版本的二进制文件。  (我安装了 Ubuntu focal, 通过命令 `lsb_release --all` 进行检查)。

```shell
wget -O - https://www.kismetwireless.net/repos/kismet-release.gpg.key | sudo apt-key add -
echo 'deb https://www.kismetwireless.net/repos/apt/release/focal focal main' | sudo tee /etc/apt/sources.list.d/kismet.list
sudo apt update
sudo apt install kismet
```

### Do not run as root, use a [SUID binary](https://en.wikipedia.org/wiki/Setuid) and a unix group access

Kismet 需要较高的权限才能运行。并且要处理可能有入侵性质的数据。所以用最小化的权限运行是最安全的方法。

正确的设置方法是使用 Unix 组和设置用户 ID（_SUID_）的二进制。我的用户是 `josevnz`，所以我这样做了:

```shell
sudo apt-get install kismet
sudo usermod --append --groups kismet josevnz
```

### Encrypt your access to Kismet with a self-signed certificate

我将为我的 Kismet 启用 SSL [通过使用自签名证书安装](https://github.com/josevnz/home_nmap/tree/main/tutorial)。为此，我将使用 Cloudflare CFSSL 工具:

```shell
sudo apt-get update -y
sudo apt-get install -y golang-cfssl
```

下一步是创建自签名的证书。这里有很多模板步骤，所以我将告诉你如何跳过这些步骤（但请阅读手册以了解每个命令的作用）:

#### Initial certificate

```shell
sudo /bin/mkdir --parents /etc/pki/raspberrypi
sudo /bin/cat<<CA>/etc/pki/raspberrypi/ca.json
{
   "CN": "Nunez Barrios family Root CA",
   "key": {
     "algo": "rsa",
     "size": 2048
   },
   "names": [
   {
     "C": "US",
     "L": "CT",
     "O": "Nunez Barrios",
     "OU": "Nunez Barrios Root CA",
     "ST": "United States"
   }
  ]
}
CA
cfssl gencert -initca ca.json | cfssljson -bare ca
```

#### SSL profile config

```shell
root@raspberrypi:/etc/pki/raspberrypi# /bin/cat<<PROFILE>/etc/pki/raspberrypi/cfssl.json
{
   "signing": {
     "default": {
       "expiry": "17532h"
     },
     "profiles": {
       "intermediate_ca": {
         "usages": [
             "signing",
             "digital signature",
             "key encipherment",
             "cert sign",
             "crl sign",
             "server auth",
             "client auth"
         ],
         "expiry": "17532h",
         "ca_constraint": {
             "is_ca": true,
             "max_path_len": 0, 
             "max_path_len_zero": true
         }
       },
       "peer": {
         "usages": [
             "signing",
             "digital signature",
             "key encipherment", 
             "client auth",
             "server auth"
         ],
         "expiry": "17532h"
       },
       "server": {
         "usages": [
           "signing",
           "digital signing",
           "key encipherment",
           "server auth"
         ],
         "expiry": "17532h"
       },
       "client": {
         "usages": [
           "signing",
           "digital signature",
           "key encipherment", 
           "client auth"
         ],
         "expiry": "17532h"
       }
     }
   }
}
PROFILE
```

#### Intermediate certificate

```shell
root@raspberrypi:/etc/pki/raspberrypi# /bin/cat<<INTERMEDIATE>/etc/pki/raspberrypi/intermediate-ca.json
{
  "CN": "Barrios Nunez Intermediate CA",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C":  "US",
      "L":  "CT",
      "O":  "Barrios Nunez",
      "OU": "Barrios Nunez Intermediate CA",
      "ST": "USA"
    }
  ],
  "ca": {
    "expiry": "43830h"
  }
}
INTERMEDIATE
cfssl gencert -initca intermediate-ca.json | cfssljson -bare intermediate_ca
cfssl sign -ca ca.pem -ca-key ca-key.pem -config cfssl.json -profile intermediate_ca intermediate_ca.csr | cfssljson -bare intermediate_ca
```

#### Configuration for the SSL certificate on the Raspberry PI 4 machine

在这里，我们把运行 Kismet 网络应用的机器的名称和 IP 地址放在这里:

```shell
/bin/cat<<RASPBERRYPI>/etc/pki/raspberrypi/raspberrypi.home.json
{
  "CN": "raspberrypi.home",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
  {
    "C": "US",
    "L": "CT",
    "O": "Barrios Nunez",
    "OU": "Barrios Nunez Hosts",
    "ST": "USA"
  }
  ],
  "hosts": [
    "raspberrypi.home",
    "localhost",
    "raspberrypi",
    "192.168.1.11"
  ]               
}
```

树莓派

```shell
cd /etc/pki/raspberrypi
cfssl gencert -ca intermediate_ca.pem -ca-key intermediate_ca-key.pem -config cfssl.json -profile=peer raspberrypi.home.json| cfssljson -bare raspberry-peer
cfssl gencert -ca intermediate_ca.pem -ca-key intermediate_ca-key.pem -config cfssl.json -profile=server raspberrypi.home.json| cfssljson -bare raspberry-server
cfssl gencert -ca intermediate_ca.pem -ca-key intermediate_ca-key.pem -config cfssl.json -profile=client raspberrypi.home.json| cfssljson -bare raspberry-client
```

添加 SSL 支持就像添加以下重写一样简单:

```shell
/bin/cat<<SSL>>/etc/kismet/kismet_site.conf
httpd_ssl=true
httpd_ssl_cert=/etc/pki/raspberrypi/raspberry-server.csr
httpd_ssl_key=/etc/pki/raspberrypi/raspberry-server-key.pem
SSL
```

(译者注：你可以尝试 [mkcert](https://github.com/FiloSottile/mkcert),这个签发证书更简单。)

### Putting everything together, with a Kismet 'site' overrides file

Kismet 有一个非常好的功能：它可以使用一个文件来覆盖一些默认值，而不需要编辑多个文件。在这种情况下，我的安装将覆盖 SSL 设置、Wifi 接口和日志位置。所以是时候更新我们的 `/etc/rc.local` 文件了:

```shell
#!/bin/bash
# Kismet setup
usb_driver=rt2800usb
wlan=$(ls /sys/bus/usb/drivers/$usb_driver/*/net/)
if [ $? -eq 0 ]; then
    set -ex
    /usr/sbin/ifconfig "$wlan" down
    /usr/sbin/iwconfig "$wlan" mode monitor
    /usr/sbin/ifconfig "$wlan" up
    set +ex
    /bin/cat<<KISMETOVERR>/etc/kismet/kismet_site.conf
server_name=Nunez Barrios Kismet server
logprefix=/data/kismet
source=$wlan
httpd_ssl=true
httpd_ssl_cert=/etc/pki/raspberrypi/raspberry-server.csr
httpd_ssl_key=/etc/pki/raspberrypi/raspberry-server-key.pem
KISMETOVERR
fi
```

Finally, it is time to start Kismet (in my case as the non-root user josevnz):

```shell=
# If you know which interface is the one in monitoring mode, then 
josevnz@raspberrypi:~$ kismet
```

Now let's log on for the first time to the web interface (In my case [http://raspberripi.home:2501](http://raspberripi.home:2501))

![kismet-set-login](https://www.freecodecamp.org/news/content/images/2022/03/kismet-set-login.png)

You will get a prompt the first time you try to log in your Kismet installation

In here you set up your admin user and password.

![kismet-main-screen](https://www.freecodecamp.org/news/content/images/2022/03/kismet-main-screen.png)

Example of the wireless networks detected

After a little time, Kismet will populate the main Dashboard with the list of wireless networks and devices it can detect. You will be surprised not just how many neighboring devices are out there but how many you have in your own house.

In my example, the wireless devices around me look pretty normal, except one that doesn't have a name:

![suspect-device-details-kismet](https://www.freecodecamp.org/news/content/images/2022/03/suspect-device-details-kismet.png)

A device with suspicious characteristics

The web interface provides all sorts of useful information, but is there an easy way to filter all the mac addresses on my networks?

Kismet has a REST API, so it is time to see what we can automate from there.

# REST-API in Python

The [developer documentation](https://www.kismetwireless.net/docs/devel_group.html) contains examples of how to extend Kismet, specifically the one related to the [official Kismet REST-API in Python](https://github.com/kismetwireless/python-kismet-rest).

But it seems to be missing a feature to use API keys, instead of user/password. And the interaction with the end points doesn't seem to be complicated, so I will write my (less rich feature) wrapper.

You can download and install the code for a small application I wrote ([kismet\_home](https://github.com/josevnz/kismet_home) to illustrate how to work with Kismet (also has a copy of this tutorial) like this:

```shell
python3 -m venv ~/virtualenv/kismet_home
. ~/virtualenv/kismet_home/bin/activate
python -m pip install --upgrade pip
git clone git@github.com:josevnz/kismet_home.git
python setup.py bdist_wheel
pip install kismet_home-0.0.1-py3-none-any.whl
```

And then run the unit tests/ integration tests and even the third party vulnerability scanner:

```shell
. ~/virtualenv/kismet_home/bin/activate
# Unit/ integration tests
python -m unittest test/unit_test_config.py
python -m unittest /home/josevnz/kismet_home/test/test_integration_kismet.py
# Third party vulnerability scanner
pip-audit  --requirement requirements.txt
```

You will find more details on the [README.md](https://github.com/josevnz/kismet_home/blob/main/README.md) and [DEVELOPER.md](https://github.com/josevnz/kismet_home/blob/main/DEVELOPER.md) files.

Let's move on with the code.

### How to Interact with Kismet using Python

First I'll write a generic HTTP client I can use to query or send commands to Kismet, that is the _KismetWorker_ class:

```python
import json
from datetime import datetime
from typing import Any, Dict, Set, List, Union
import requests


class KismetBase:

    def __init__(self, *, api_key: str, url: str):
        """
        Parametric constructor
        :param api_key: The Kismet generated API key
        :param url: URL where the Kismet server is running
        """
        self.api_key = api_key
        if url[-1] != '/':
            self.url = f"{url}/"
        else:
            self.url = url
        self.cookies = {'KISMET': self.api_key}

    def __str__(self):
        return f"url={self.url}, api_key=XXX"

class KismetWorker(KismetBase):

    def check_session(self) -> None:
        """
        Confirm if the session is valid for a given API key
        :return: None, throws an exception if the session is invalid
        """
        endpoint = f"{self.url}session/check_session"
        r = requests.get(endpoint, cookies=self.cookies)
        r.raise_for_status()

    def check_system_status(self) -> Dict[str, Any]:
        """
        Overall status of the Kismet server
        :return: Nested dictionary describing different aspect of the Kismet system
        """
        endpoint = f"{self.url}system/status.json"
        r = requests.get(endpoint, cookies=self.cookies)
        r.raise_for_status()
        return json.loads(r.text)

    def get_all_alerts(self) -> Any:
        """
        You can get a description how the alert system is set up as shown here: /alerts/definitions.prettyjson
        This method returns the last N alerts registered by the system. Severity and meaning of the alert is explained
        here: https://www.kismetwireless.net/docs/devel/webui_rest/alerts/
        :return:
        """
        endpoint = f"{self.url}alerts/all_alerts.json"
        r = requests.get(endpoint, cookies=self.cookies)
        r.raise_for_status()
        return json.loads(r.text)

    def get_alert_by_hash(self, identifier: str) -> Dict[str, Any]:
        """
        Get details of a single alert by its identifier (hash)
        :return:
        """
        parsed = int(identifier)
        if parsed < 0:
            raise ValueError(f"Invalid ID provided: {identifier}")
        endpoint = f"{self.url}alerts/by-id/{identifier}/alert.json"
        r = requests.get(endpoint, cookies=self.cookies)
        r.raise_for_status()
        return json.loads(r.text)

    def get_alert_definitions(self) -> Dict[Union[str, int], Any]:
        """
        Get the defined alert types
        :return:
        """
        endpoint = f"{self.url}alerts/definitions.json"
        r = requests.get(endpoint, cookies=self.cookies)
        r.raise_for_status()
        return json.loads(r.text)
```

The way Kismet API works is that you make the API KEY part of the query, or you define it in the KISMET cookie. I choose to populate the cookie.

KismetWorker implements the following methods:

- **check\_session**: It checks if your API KEY is valid. If not it will throw an exception.
- **check\_system\_status**: Validates if the administrator (you most likely) defined an administrator for the Kismet server. If not, then all the API queries will fail.
- **get\_all\_alerts**: Gets all the available alerts (if any) from your Kismet server.
- **get\_alert\_by\_hash**: If you know the identifier (hash) of an alert, you can retrieve the details of that event only.
- **get\_alert\_definitions**: Get all the alert definitions. Kismet supports a wide range of alerts and a user will definitely be interested to find out what type of alerts they are.

You can see [all the integration code](https://github.com/josevnz/kismet_home/blob/main/test/test_integration_kismet.py) here to see how the methods work in action.

I also wrote a class that requires admin privileges. I use it to define a custom alert type and to send alerts using that type to Kismet, as part of the integration tests. Right now I don't have much use of sending custom alerts to Kismet in real life, but that may change in the future, so here is the code:

```python
class KismetAdmin(KismetBase):

    def define_alert(
            self,
            *,
            name: str,
            description: str,
            throttle: str = '10/min',
            burst: str = "1/sec",
            severity: int = 5,
            aclass: str = 'SYSTEM'

    ):
        """
        Define a new type of alert for Kismet
        :param aclass: Alert class
        :param severity: Alert severity
        :param throttle: Optional throttle
        :param name: Name of the new alert
        :param description: What does this mean
        :param burst: Optional burst
        :return:
        """
        endpoint = f"{self.url}alerts/definitions/define_alert.cmd"
        command = {
            'name': name,
            'description': description,
            'throttle': throttle,
            'burst': burst,
            'severity': severity,
            'class': aclass
        }
        r = requests.post(endpoint, json=command, cookies=self.cookies)
        r.raise_for_status()

    def raise_alert(
            self,
            *,
            name: str,
            message: str
    ) -> None:
        """
        Send an alert to Kismet
        :param name: A well-defined name or id for the alert. MUST exist
        :param message: Message to send
        :return: None. Will raise an error if the alert could not be sent
        """
        endpoint = f"{self.url}alerts/raise_alerts.cmd"
        command = {
            'name': name,
            'text': message
        }
        r = requests.post(endpoint, json=command, cookies=self.cookies)
        r.raise_for_status()
```

Getting the data is just part of the story. We need to normalize it, so it can be used by the final scripts.

### How to Normalize the Kismet raw data

Kismet contains a lot of details about the alerts, but we do not require to show the user those details (think about the nice view you get with the web application). Instead we do a few transformations using the following class with static methods:

- **parse\_alert\_definitions**: Returns a simplified report of all the alert definitions
- **process\_alerts**: Changes numeric alerts for more descriptive types and also returns dictionaries for the types and severity meaning of those alerts.
- **pretty\_timestamp**: Converts the numeric timestamp into something we can use for comparisons and display

The code for the _KismetResultsParser_ helper class:

```python
class KismetResultsParser:
    SEVERITY = {
        0: {
            'name': 'INFO',
            'description': 'Informational alerts, such as datasource  errors, Kismet state changes, etc'
        },
        5: {
            'name': 'LOW',
            'description': 'Low - risk events such as probe fingerprints'
        },
        10: {
            'name': 'MEDIUM',
            'description': 'Medium - risk events such as denial of service attempts'
        },
        15: {
            'name': 'HIGH',
            'description': 'High - risk events such as fingerprinted watched devices, denial of service attacks, '
                           'and similar '
        },
        20: {
            'name': 'CRITICAL',
            'description': 'Critical errors such as fingerprinted known exploits'
        }
    }

    TYPES = {
        'DENIAL': 'Possible denial of service attack',
        'EXPLOIT': 'Known fingerprinted exploit attempt against a vulnerability',
        'OTHER': 'General category for alerts which don’t fit in any existing bucket',
        'PROBE': 'Probe by known tools',
        'SPOOF': 'Attempt to spoof an existing device',
        'SYSTEM': 'System events, such as log changes, datasource errors, etc.'
    }

    @staticmethod
    def parse_alert_definitions(
            *,
            alert_definitions: List[Dict[str, str]],
            keys_of_interest: Set[str] = None
    ) -> List[Dict[str, str]]:
        """
        Remove unwanted keys from full alert definition dump, to make it easier to read onscreen
        :param alert_definitions: Original Kismet alert definitions
        :param keys_of_interest: Kismet keys of interest
        :return: List of dictionaries with trimmed keys, description, severity and header for easy reading
        """
        if keys_of_interest is None:
            keys_of_interest = {
                'kismet.alert.definition.class',
                'kismet.alert.definition.description',
                'kismet.alert.definition.severity',
                'kismet.alert.definition.header'
            }
        parsed_alerts: List[Dict[str, str]] = []
        for definition in alert_definitions:
            new_definition = {}
            for def_key in definition:
                if def_key in keys_of_interest:
                    new_key = def_key.split('.')[-1]
                    new_definition[new_key] = definition[def_key]
            parsed_alerts.append(new_definition)
        return parsed_alerts

    @staticmethod
    def process_alerts(
            *,
            alerts: List[Dict[str, Union[str, int]]],

    ) -> Any:
        """
        Removed unwanted fields from alert details, also return extra data for severity and types of alerts
        :param alerts:
        :return:
        """
        processed_alerts = []
        found_types = {}
        found_severities = {}
        for alert in alerts:
            severity = alert['kismet.alert.severity']
            severity_name = KismetResultsParser.SEVERITY[severity]['name']
            severity_desc = KismetResultsParser.SEVERITY[severity]['description']
            found_severities[severity_name] = severity_desc
            text = alert['kismet.alert.text']
            aclass = alert['kismet.alert.class']
            found_types[aclass] = KismetResultsParser.TYPES[aclass]
            processed_alert = {
                'text': text,
                'class': aclass,
                'severity': severity_name,
                'hash': alert['kismet.alert.hash'],
                'dest_mac': alert['kismet.alert.dest_mac'],
                'source_mac': alert['kismet.alert.source_mac'],
                'timestamp': alert['kismet.alert.timestamp']
            }
            processed_alerts.append(processed_alert)
        return processed_alerts, found_severities, found_types

    @staticmethod
    def pretty_timestamp(timestamp: float) -> datetime:
        """
        Convert a Kismet timestamp (TIMESTAMP.UTIMESTAMP) into a pretty timestamp string
        :param timestamp:
        :return:
        """
        return datetime.fromtimestamp(timestamp)
```

If you run the integration tests with the admin role enabled, you will see than one or more (depending how many times you ran the test) alerts were added to the Web UI:

![kismet_generated_alerts](https://www.freecodecamp.org/news/content/images/2022/03/kismet_generated_alerts.png)

These alerts where generated using the Python client and the REST API

As a reminder, you can see how this is used by looking at the code [here](https://github.com/josevnz/kismet_home/blob/main/test/test_integration_kismet.py). Showing a sample run of all the integration tests against my installation (this one without publishing alerts, so some tests are skipped):

```shell
(kismet_home) [josevnz@dmaf5 kismet_home]$ python -m unittest /home/josevnz/kismet_home/test/test_integration_kismet.py 
[09:13:05] DEBUG    Starting new HTTP connection (1): raspberrypi.home:2501                                                                                                                                                        connectionpool.py:228
           DEBUG    http://raspberrypi.home:2501 "GET /session/check_session HTTP/1.1" 200 None                                                                                                                                    connectionpool.py:456
.           DEBUG    Starting new HTTP connection (1): raspberrypi.home:2501                                                                                                                                                        connectionpool.py:228
           DEBUG    http://raspberrypi.home:2501 "GET /system/status.json HTTP/1.1" 200 None                                                                                                                                       connectionpool.py:456
.           DEBUG    Starting new HTTP connection (1): raspberrypi.home:2501                                                                                                                                                        connectionpool.py:228
           DEBUG    http://raspberrypi.home:2501 "GET /alerts/definitions.json HTTP/1.1" 200 None                                                                                                                                  connectionpool.py:456
.[09:13:05] 'ADMIN_SESSION_API' environment variable not defined. Skipping this test                                                                                                                                       test_integration_kismet.py:105
....
----------------------------------------------------------------------
Ran 7 tests in 0.053s

OK

```

### Where do we store our API key and other configuration details?

Details like this won't be hardcoded inside the scripts, but instead they will reside on an external configuration file:

```shell
(kismet_home) [josevnz@dmaf5 kismet_home]$ cat ~/.config/kodegeek/kismet_home/config.ini 
[server]
url = http://raspberrypi.home:2501
api_key = E41CAD466552810392D538FF8D43E2C5
```

The following classes handle all the access details (using a Reader and a Writer class for each type of operation):

```python
"""
Simple configuration management for kismet_home settings
"""
import os.path
from configparser import ConfigParser
from pathlib import Path
from typing import Dict

from kismet_home import CONSOLE

DEFAULT_INI = os.path.expanduser('~/.config/kodegeek/kismet_home/config.ini')
VALID_KEYS = {'api_key', 'url'}


class Reader:

    def __init__(self, config_file: str = DEFAULT_INI):
        """
        Constructor
        :param config_file: Optional override of the ini configuration file
        """
        self.config = ConfigParser()
        if not self.config.read(config_file):
            raise ValueError(f"Could not read {config_file}")

    def get_api_key(self):
        """
        Get back the API key used to connect to Kismet
        :return:
        """
        return self.config.get('server', 'api_key')

    def get_url(self):
        """
        Get back URL of Kismet server
        :return:
        """
        return self.config.get('server', 'url')


class Writer:

    def __init__(
            self,
            *,
            server_keys: Dict[str, str]
    ):
        if not server_keys:
            raise ValueError("Configuration is incomplete!, aborting!")
        self.config = ConfigParser()
        self.config.add_section('server')
        valid_keys_cnt = 0
        for key in server_keys:
            value = server_keys[key]
            if key not in VALID_KEYS:
                CONSOLE.log(f"Ignoring invalid key: {key} = {value}")
                continue
            self.config.set('server', key, value)
            CONSOLE.log(f"Added: server: {key} = {value}")
        for valid_key in VALID_KEYS:
            if not self.config.get('server', valid_key):
                raise ValueError(f"Missing required key: {valid_key}")

    def save(
            self,
            *,
            config_file: str = DEFAULT_INI
    ):
        basedir = Path(config_file).parent
        basedir.mkdir(exist_ok=True, parents=True)
        with open(config_file, 'w') as config:
            self.config.write(config, space_around_delimiters=True)
        CONSOLE.log(f"Configuration file {config_file} written")
```

The first time you set up your kismet\_home installation, you can create the configuration files like this:

```shell
[josevnz@dmaf5 kismet_home]$ python3 -m venv ~/virtualenv/kismet_home
[josevnz@dmaf5 kismet_home]$ . ~/virtualenv/kismet_home/bin/activate
(kismet_home) [josevnz@dmaf5 kismet_home]$ python -m pip install --upgrade pip
(kismet_home) [josevnz@dmaf5 kismet_home]$ git clone git@github.com:josevnz/kismet_home.git
(kismet_home) [josevnz@dmaf5 kismet_home]$ python setup.py bdist_wheel
(kismet_home) [josevnz@dmaf5 kismet_home]$ pip install kismet_home-0.0.1-py3-none-any.whl

(kismet_home) [josevnz@dmaf5 kismet_home]$ kismet_home_config.py 
Please enter the URL of your Kismet server: http://raspberrypi.home:2501/
Please enter your API key: E41CAD466552810392D538FF8D43E2C5
[13:02:35] Added: server: url = http://raspberrypi.home:2501/                                                                                 config.py:44
           Added: server: api_key = E41CAD466552810392D538FF8D43E2C5                                                                          config.py:44
           Configuration file /home/josevnz/.config/kodegeek/kismet_home/config.ini written
```

Please note the use of the virtual environment here. This will allow us to keep the application's libraries self-contained.

## Putting everything together: How to Write our CLI for kismet\_home

The _kismet\_home\_alerts.py_ script will support two modes:

- Show the alert definitions
- Show all the alerts

Also, it will allow filtering alerts based on the level (INFO, MEDIUM, HIGH, ...).

Showing all the definitions, filtered by CRITICAL:

![alert_definitions_filtered_by_level](https://www.freecodecamp.org/news/content/images/2022/03/alert_definitions_filtered_by_level.png)

You can see here the alert definitions filtered by level

Or showing all the alerts received so far, with anonymous MAC address (great for screenshots like this):

![kismet_home_alerts](https://www.freecodecamp.org/news/content/images/2022/03/kismet_home_alerts.png)

Alerts for my local network, with anonymous MAC addresses and filtered

How you can generate these tables with ease? There is a dedicated class for the text user interface (TUI):

```python
from typing import List, Dict, Any

from rich.layout import Layout
from rich.table import Table

from kismet_home.kismet import KismetResultsParser


def create_alert_definition_table(
        *,
        alert_definitions: List[Dict[str, Any]],
        level_filter: str = 0
) -> Table:
    """
    Create a table showing the alert definitions
    :param alert_definitions: Alert definitions from Kismet
    :param level_filter: User can override the level of the alerts shown. But default is 0 (INFO)
    :return: A Table with the alert definitions
    """
    definition_table = Table(title="Alert definitions")
    definition_table.add_column("Severity", justify="right", style="cyan", no_wrap=True)
    definition_table.add_column("Description", style="magenta")
    definition_table.add_column("Header", justify="right", style="yellow")
    definition_table.add_column("Class", justify="right", style="green")
    filter_level = KismetResultsParser.get_level_for_security(level_filter)
    filtered_definitions = 0
    for definition in alert_definitions:
        int_severity: int = definition['severity']
        if int_severity < filter_level:
            continue
        severity = KismetResultsParser.SEVERITY[int_severity]['name']
        if 0 <= int_severity < 5:
            severity = f"[bold blue]{severity}[/ bold blue]"
        if 5 <= int_severity < 10:
            severity = f"[bold yellow]{severity}[/ bold yellow]"
        if 10 <= int_severity < 15:
            severity = f"[bold orange]{severity}[/ bold orange]"
        else:
            severity = f"[bold red]{severity}[/ bold red]"
        filtered_definitions += 1
        definition_table.add_row(
            severity,
            definition['description'],
            definition['header'],
            definition['class']
        )
    definition_table.caption = f"Total definitions: {filtered_definitions}"
    return definition_table


def create_alert_layout(
        *,
        alerts: List[Dict[str, Any]],
        level_filter: str = 0,
        anonymize: bool = False,
        severities: Dict[str, str]
):
    """
    :param severities:
    :param alerts:
    :param level_filter:
    :param anonymize:
    :return:
    """
    alerts_table = Table(title="Alert definitions")
    alerts_table.add_column("Timestamp", no_wrap=True)
    alerts_table.add_column("Severity", justify="right", style="cyan", no_wrap=True)
    alerts_table.add_column("Text", style="magenta")
    alerts_table.add_column("Source MAC", justify="right", style="yellow", no_wrap=True)
    alerts_table.add_column("Destination MAC", justify="right", style="yellow", no_wrap=True)
    alerts_table.add_column("Class", justify="right", style="green", no_wrap=True)
    filter_level = KismetResultsParser.get_level_for_security(level_filter)

    filtered_definitions = 0
    for alert in alerts:
        int_severity: int = KismetResultsParser.get_level_for_security(alert['severity'])
        if int_severity < filter_level:
            continue
        severity = KismetResultsParser.SEVERITY[int_severity]['name']
        if 0 <= int_severity < 5:
            severity = f"[bold blue]{severity}[/ bold blue]"
        if 5 <= int_severity < 10:
            severity = f"[bold yellow]{severity}[/ bold yellow]"
        if 10 <= int_severity < 15:
            severity = f"[bold orange]{severity}[/ bold orange]"
        else:
            severity = f"[bold red]{severity}[/ bold red]"
        filtered_definitions += 1
        if anonymize:
            s_mac = KismetResultsParser.anonymize_mac(alert['source_mac'])
            d_mac = KismetResultsParser.anonymize_mac(alert['dest_mac'])
        else:
            s_mac = alert['source_mac']
            d_mac = alert['dest_mac']
        alerts_table.add_row(
            str(KismetResultsParser.pretty_timestamp(alert['timestamp'])),
            severity,
            alert['text'],
            s_mac,
            d_mac,
            alert['class']
        )
    alerts_table.caption = f"Total alerts: {filtered_definitions}"

    severities_table = Table(title="Severity legend")
    severities_table.add_column("Severity")
    severities_table.add_column("Explanation")
    for severity in severities:
        explanation = f"[green]{severities[severity]}[/green]"
        severities_table.add_row(f"[yellow]{severity}[/yellow]", explanation)

    layout = Layout()
    layout.split(
        Layout(ratio=2, name="alerts"),
        Layout(name="severities"),
    )
    layout["alerts"].update(alerts_table)
    layout["severities"].update(severities_table)
    return layout, filtered_definitions
```

And now with all the ingredients ready, we can see how the final script looks:

```python
#!/usr/bin/env python
"""
# kismet_home_alerts.py
# Author
Jose Vicente Nunez Zuleta (kodegeek.com@protonmail.com)
"""
import logging
import sys

from requests import HTTPError
import argparse

from kismet_home import CONSOLE
from kismet_home.config import Reader
from kismet_home.kismet import KismetWorker, KismetResultsParser
from kismet_home.tui import create_alert_definition_table, create_alert_layout

if __name__ == '__main__':

    arg_parser = argparse.ArgumentParser(
        description="Display alerts generated by your local Kismet installation",
        prog=__file__
    )
    arg_parser.add_argument(
        '--debug',
        action='store_true',
        default=False,
        help="Enable debug mode"
    )
    arg_parser.add_argument(
        '--anonymize',
        action='store_true',
        default=False,
        help="Anonymize MAC addresses"
    )
    arg_parser.add_argument(
        '--level',
        action='store',
        default='INFO',
        help="Enable debug mode"
    )
    arg_parser.add_argument(
        'mode',
        action='store',
        choices=['alert_type', 'alerts'],
        help="Operation mode"
    )

    try:
        args = arg_parser.parse_args()
        conf_reader = Reader()
        kw = KismetWorker(
            api_key=conf_reader.get_api_key(),
            url=conf_reader.get_url()
        )
        if args.mode == 'alert_type':
            alert_definitions = KismetResultsParser.parse_alert_definitions(
                alert_definitions=kw.get_alert_definitions()
            )
            table = create_alert_definition_table(alert_definitions=alert_definitions, level_filter=args.level)
            if table.columns:
                CONSOLE.print(table)
            else:
                CONSOLE.print(f"[b]Could not get alert definitions![/b]")
        elif args.mode == 'alerts':
            alerts, severities, types = KismetResultsParser.process_alerts(
                alerts=kw.get_all_alerts()
            )
            layout, found = create_alert_layout(
                alerts=alerts,
                level_filter=args.level,
                anonymize=args.anonymize,
                severities=severities
            )
            if found:
                CONSOLE.print(layout)
            else:
                CONSOLE.print(f"[b]No alerts to show for level={args.level}[/b]")
    except (ValueError, HTTPError):
        logging.exception("There was an error")
        sys.exit(100)
    except KeyboardInterrupt:
        CONSOLE.log("Scan interrupted, exiting...")
    sys.exit(0)
```

A few things to note:

- This is not a long-running application. Instead, is a snapshot of all the alerts. If you wanted, for example, to forward these alerts by email or to a framework like [grafana](https://grafana.com/), you are better off using [Websockets](https://pypi.org/project/websockets/) and one of the methods that retrieves only the last changes.
- The layout is crude, and there is plenty of room for improvement. But our little tui is displaying relevant information without too many distractions
- And if was fun to code!

# What did we learn?

- How to install Kismet and secure it with a self-signed SSL certificate
- How to write a simple Bash script to set up the correct Wireless interface in monitor mode, after the RaspBerryPI reboots
- How to add an API KEY with read-only access to use it instead of the legacy user/ password schema for authentication and authorization
- How to write classes in Python that can communicate with Kismet using its REST-API
- How to add unit and integration tests to the code to make sure everything works and new code changes do not break existing functionality

Please leave your comments on the [git repository](https://github.com/josevnz/kismet_home) and report any bugs. But more important get Kismet, get the code of this tutorial, and start securing your home wireless infrastructure in no time.
