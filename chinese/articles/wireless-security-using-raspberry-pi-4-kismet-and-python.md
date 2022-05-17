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

- [请求宽恕，而不是请求允许,这句话在这里并不适用](./#the-saying-ask-for-forgiveness-not-permission-doesn-t-apply-here)
- [了解你的硬件](./#getting-to-know-your-hardware)
- [什么是 kismet](./#kismet)
- [REST-API 在 Python 中的应用](./#restapi)
- [我们学到了什么?](./#what-did-we-learn)

<h2 id="the-saying-ask-for-forgiveness-not-permission-doesn-t-apply-here">请求宽恕，而不是请求允许,这句话在这里并不适用</h2>

而我的意思是，_你不应该试图窃听或渗透到一个不属于你的无线网络，而且这也是非法的_。检测一个新的未知客户是否加入了你的无线网络是比较容易的。

所以要做正确的事——用这个教程来学习，而不是闯入别人的网络。

<h2 id="getting-to-know-your-hardware">了解你的硬件</h2>

我将跳到前面一点，向你展示树莓派 4 集成无线接口的一个小问题。

**树莓派 4 的板载无线网卡，不能开箱即用**， 因为固件不支持监控模式（monitor mode）。

有项目可以 [支持这个](https://github.com/seemoo-lab/bcm-rpi3)。相反，我采取了简单的方法，从 [CanaKit](https://www.canakit.com/raspberry-pi-wifi.html) 订购了一个外部 Wi-Fi 加密狗。

CanaKit 的无线网卡开箱即用，我们很快就会看到它。但首先让我们安装并玩一玩 Kismet。

## 确保接口在监控模式下运行

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

<h2 id="kismet">什么是 kismet</h2>

[Kismet](https://www.kismetwireless.net/):

> 一个无线网络和设备检测器、嗅探器、驱赶工具和 WIDS（无线入侵检测）框架。

## Kismet 的安装和设置

默认情况下，安装在树莓派 4 的 Ubuntu 上的 Kismet 是 2016 年的版本，_太老了_ 。

取而代之的是, 从 [这里](https://www.kismetwireless.net/docs/readme/packages/) 获得一个更高版本的二进制文件。  (我安装了 Ubuntu focal, 通过命令 `lsb_release --all` 进行检查)。

```shell
wget -O - https://www.kismetwireless.net/repos/kismet-release.gpg.key | sudo apt-key add -
echo 'deb https://www.kismetwireless.net/repos/apt/release/focal focal main' | sudo tee /etc/apt/sources.list.d/kismet.list
sudo apt update
sudo apt install kismet
```

### 不要以 root 身份运行，使用[SUID 二进制](https://en.wikipedia.org/wiki/Setuid)和 unix 组访问

Kismet 需要较高的权限才能运行。并且要处理可能有入侵性质的数据。所以用最小化的权限运行是最安全的方法。

正确的设置方法是使用 Unix 组和设置用户 ID（_SUID_）的二进制。我的用户是 `josevnz`，所以我这样做了:

```shell
sudo apt-get install kismet
sudo usermod --append --groups kismet josevnz
```

### 用自签名的证书加密你对 Kismet 的访问

我将为我的 Kismet 启用 SSL [通过使用自签名证书安装](https://github.com/josevnz/home_nmap/tree/main/tutorial)。为此，我将使用 Cloudflare CFSSL 工具:

```shell
sudo apt-get update -y
sudo apt-get install -y golang-cfssl
```

下一步是创建自签名的证书。这里有很多模板步骤，所以我将告诉你如何跳过这些步骤（但请阅读手册以了解每个命令的作用）:

#### 初始证书

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

#### SSL 配置文件配置

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

#### 中级（Intermediate）证书

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

#### 在 树莓派 4 机器上配置 SSL 证书

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

### 把所有东西放在一起，用 Kismet `site` 重写文件

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

最后，是时候启动 Kismet 了（在我的例子中是作为非 root 用户 josevnz）:

```shell
# If you know which interface is the one in monitoring mode, then 
josevnz@raspberrypi:~$ kismet
```

现在让我们第一次登录到网络管理界面（在我的例子中是 [http://raspberripi.home:2501](http://raspberripi.home:2501))

![kismet-set-login](https://www.freecodecamp.org/news/content/images/2022/03/kismet-set-login.png)

在你第一次尝试登录你的 Kismet 安装时，你会得到一个提示

在这里你要设置你的管理员用户和密码。

![kismet-main-screen](https://www.freecodecamp.org/news/content/images/2022/03/kismet-main-screen.png)

检测到的无线网络的例子。

一段时间后，Kismet 会在主仪表板上弹出它能检测到的无线网络和设备的列表。你不仅会惊讶于外面有多少邻近的设备，而且会惊讶于你自己的房子里有多少设备。

在我的例子中，我周围的无线设备看起来很正常，除了一个没有名字的设备:

![suspect-device-details-kismet](https://www.freecodecamp.org/news/content/images/2022/03/suspect-device-details-kismet.png)

一个具有可疑特征的设备

网页界面提供了各种有用的信息，但有没有一种简单的方法来过滤我网络上的所有 Mac 地址？

Kismet 有一个 REST API，所以现在是时候看看我们能从那里自动化什么了。

<h2 id="restapi">REST-API 在 Python 中的应用</h2>

[开发者文档](https://www.kismetwireless.net/docs/devel_group.html) 包含了如何扩展 Kismet 的例子，特别是与 [官方 Kismet REST-API in Python](https://github.com/kismetwireless/python-kismet-rest) 相关的例子。

但它似乎缺少一个使用 API 密钥的功能，而不是用户/密码。而且与终端的交互似乎并不复杂，所以我将写我的（功能简单）包装器。

你可以下载并安装我写的一个简单程序的代码（[kismet_home](https://github.com/josevnz/kismet_home)，以说明如何与 Kismet 一起工作（也有本教程的副本），像这样。:

```shell
python3 -m venv ~/virtualenv/kismet_home
. ~/virtualenv/kismet_home/bin/activate
python -m pip install --upgrade pip
git clone git@github.com:josevnz/kismet_home.git
python setup.py bdist_wheel
pip install kismet_home-0.0.1-py3-none-any.whl
```

然后运行单元测试/集成测试，甚至是第三方的漏洞扫描器:

```shell
. ~/virtualenv/kismet_home/bin/activate
# 单元测试/集成测试
python -m unittest test/unit_test_config.py
python -m unittest /home/josevnz/kismet_home/test/test_integration_kismet.py
# 第三方的漏洞扫描器
pip-audit  --requirement requirements.txt
```

你可以在 [README.md](https://github.com/josevnz/kismet_home/blob/main/README.md) 和 [DEVELOPER.md](https://github.com/josevnz/kismet_home/blob/main/DEVELOPER.md) 文件中找到更多细节。

让我们继续学习代码。

### 如何使用 Python 与 Kismet 交互

首先我将写一个通用的 HTTP 客户端，我可以用它来查询或发送命令给 Kismet，这就是 _KismetWorker_ 类:

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

Kismet API 的工作方式是，你把 API KEY 作为查询的一部分，或者在 KISMET cookie 中定义它。我选择填入 cookie。

KismetWorker 实现了以下方法:

- **check_session**: 它检查你的 API KEY 是否有效。如果不是，它将抛出一个异常。
- **check_system_status**: 验证管理员（很可能是你）是否为 Kismet 服务器定义了一个管理员。如果不是，那么所有的 API 查询都会失败。
- **get_all_alerts**:从你的 Kismet 服务器获取所有可用的警报（如果有的话）。
- **get_alert_by_hash**:如果你知道一个警报的标识符（哈希值），你可以只检索该事件的细节。
- **get_alert_definitions**: 获取所有警报的定义。Kismet 支持广泛的警报，用户肯定会有兴趣知道它们是什么类型的警报。

你可以在这里看到 [所有的集成代码](https://github.com/josevnz/kismet_home/blob/main/test/test_integration_kismet.py)，看看这些方法是如何实际工作的。

我还写了一个需要管理员权限的类。我用它来定义一个自定义警报类型，并使用该类型向 Kismet 发送警报，作为集成测试的一部分。现在我在现实生活中没有太多使用发送自定义警报给 Kismet 的机会，但这在将来可能会改变，所以这里是代码:

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

获取数据只是故事的一部分。我们需要将其规范化，以便最终的脚本可以使用。

### 如何规范化 Kismet 的原始数据

Kismet 包含了很多关于警报的细节，但我们不要求向用户展示这些细节（想想你在网络应用中得到的漂亮视图）。相反，我们使用下面这个带有静态方法的类做一些转换:

- **parse_alert_definitions**: 返回所有警报定义的简化报告。
- **process_alerts**: 将数字警报改为更多的描述性类型，同时返回这些警报的类型和严重程度含义的字典。
- **pretty_timestamp**: : 将数字时间戳转换为我们可以用于比较和显示的东西。

 _KismetResultsParser_ 助手类的代码:

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

如果你在启用管理员角色的情况下运行集成测试，你会看到比一个或多个（取决于你运行测试的次数）警报被添加到 Web UI:

![kismet_generated_alerts](https://www.freecodecamp.org/news/content/images/2022/03/kismet_generated_alerts.png)

这些警报是使用 Python 客户端和 REST API 生成的

这是一个提醒，你可以通过查看代码 [这里](https://github.com/josevnz/kismet_home/blob/main/test/test_integration_kismet.py) 看到这是如何使用的。显示针对我的安装的所有集成测试的样本运行（这个没有发布警报，所以有些测试被跳过）:

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

### 我们在哪里存储我们的 API 密钥和其他配置细节

像这样的细节不会在脚本中硬编码，而是存在于一个外部配置文件中:

```shell
(kismet_home) [josevnz@dmaf5 kismet_home]$ cat ~/.config/kodegeek/kismet_home/config.ini 
[server]
url = http://raspberrypi.home:2501
api_key = E41CAD466552810392D538FF8D43E2C5
```

下面的类处理所有的访问细节（为每种类型的操作使用一个 Reader 类和一个 Writer 类）:

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

第一次设置你的 kismet_home 安装时，你可以像这样创建配置文件:

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

请注意这里使用的是虚拟环境。这将使我们能够保持应用程序的库独立，避免污染。

## 把一切放在一起。如何为 kismet_home 编写我们的 CLI

_kismet_home_alerts.py 脚本将支持两种模式:

- 显示警报的定义
- 显示所有警报

此外，它还允许根据级别来过滤警报 (INFO, MEDIUM, HIGH, ...)。

显示所有的定义，按 CRITICAL 过滤:

![alert_definitions_filtered_by_level](https://www.freecodecamp.org/news/content/images/2022/03/alert_definitions_filtered_by_level.png)

你可以在这里看到按级别过滤的警报定义

或者显示到目前为止收到的所有警报，以及匿名的 MAC 地址（像这样的截图很有帮助）:

![kismet_home_alerts](https://www.freecodecamp.org/news/content/images/2022/03/kismet_home_alerts.png)

来自我的本地网络的警报，有匿名的 MAC 地址和经过过滤的

你如何能轻松地生成这些表格？有一个文本用户界面（TUI）的专用类:

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

现在所有的材料都准备好了，我们可以看看最后的脚本是什么样子的:

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

有几件事需要注意:

- 这不是一个长期运行的应用程序。相反，是所有警报的一个快照。如果你想通过电子邮件或像 [grafana](https://grafana.com/), 这样的框架来转发这些警报。你最好使用 [Websockets](https://pypi.org/project/websockets/) 和其中一个只检索最后的变化的方法。
- 这个布局很粗糙，还有很多改进的余地。但我们的小 TUI 正在显示相关的信息，没有太多的干扰。
- 而且，编写代码也很有趣!

<h2 id="what-did-we-learn">我们学到了什么?</h2>

- 如何安装 Kismet 并使用自签名的 SSL 证书来保护它
- 如何编写一个简单的 Bash 脚本，在树莓派重新启动后，在监控模式下设置正确的无线接口
- 如何添加一个具有只读权限的 API KEY，用它来代替传统的用户/密码模式进行认证和授权
- 如何用 Python 写类，可以使用 REST-API 与 Kismet 通信
- 如何为代码添加单元和集成测试，以确保一切正常，新的代码修改不会破坏现有功能
请在 [git 仓库](https://github.com/josevnz/kismet_home) 上留下你的评论，并报告任何 bug。但更重要的是获得 Kismet，获得本教程的代码，并立即开始保护你的家庭无线基础设施。
