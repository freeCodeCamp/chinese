> -  原文地址：[Schofield's Laws of Computing – What they Are and Why You Should Know Them](https://www.freecodecamp.org/news/schofields-laws-of-computing/)
> -  原文作者：[Seth FalcoSeth Falco](https://www.freecodecamp.org/news/author/seth/)
> -  译者：
> -  校对者：

![Schofield's Laws of Computing – What they Are and Why You Should Know Them](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/schofield-cover-1.jpg)

Schofield's Laws of Computing are principles that anyone who works with computers should know. They're focused on data portability, integrity, and security.

[Jack Schofield](https://wikipedia.org/wiki/Jack_Schofield_(journalist)) was a prolific journalist who wrote for The Guardian and covered technology for nearly four decades. During that time, he wrote three particular articles called "Schofield's Laws of Computing".

Jack didn't create these principles all at once, but they were rather an accumulation of "discoveries" that he had encountered throughout his career.

Individually, the principles aren't special or revolutionary – in fact, they're pretty basic. However, they're valuable lessons that you should adhere to, especially in an organizational setting.

# Schofield's First Law of Computing

> "Never put data into a program unless you can see exactly how to get it out." ― [Jack Schofield](https://www.theguardian.com/technology/2003/jul/24/onlinesupplement.columnists) (2003)

Schofield's First Law states that when you depend on an organization, you should verify that it'll be easy to move your data to another organization.

Common reasons you might want to change providers could be:

-   A change in the terms of service.
-   Another company with a different vision takes it over.
-   Price hikes or a shift to a less favorable business model.
-   The service shuts down, or software becomes abandonware.

For example:

-   LastPass limiting free users to one type of device. ([More Info](https://wikipedia.org/wiki/LastPass#Reception))
-   ArtStation getting acquired by Epic Games. ([More Info](https://wikipedia.org/wiki/Epic_Games#Acquisitions))
-   Adobe shifting to a software as a service business model. ([More Info](https://wikipedia.org/wiki/Adobe_Creative_Cloud#Criticism))
-   Megaupload shutdown and seized by governing bodies. ([More Info](https://wikipedia.org/wiki/Megaupload#2012_indictments_by_the_United_States))

Data portability is an essential feature for software and services. It's the primary solution when you need to avoid vendor lock-ins or must budget for costly migration processes.

## What are Vendor Lock-ins?

Vendor lock-ins are when companies tie users down to their software. They can put practices in place to add friction when migrating to competing software.

The aim is to compel users to stay, even if there are better options for them, by making steps to leave inconvenient, time-consuming, or tedious.

When you're choosing software or services to use, you'll want to keep an eye out for such practices. This can come in a variety of forms:

-   Not allowing you to export personal data or user-generated content.
-   Not allowing files to be exported to open or human-readable formats.
-   Making software incompatible with existing open-standards.

## The Right to Data Portability

The [General Data Protection Regulation](https://wikipedia.org/wiki/General_Data_Protection_Regulation) (GDPR) has helped with this. It's led companies like Discord, Instagram, and Twitter to add automated tools for users to export their content.

Article 20 of GDPR is the "right to data portability", which is the right to have the means to move your personal data from a data controller to a standard format that you can give to another data controller.

Despite the fact that GDPR is specific to personal data, this has promoted data portability in general, including user-generated content. While it's debatable how easy it is to enforce GDPR outside the EU, these tools are usually accessible to members of other jurisdictions, too.

If you're representing an organization or a freelancer and you're in charge of picking software, keep this in mind!

# Schofield's Second Law of Computing

> "Data doesn't really exist unless you have at least two copies of it."  
> ― [Jack Schofield](https://www.theguardian.com/technology/2008/feb/14/email.yahoo) (2008)

Backing up data is a chore that most individuals procrastinate until it's too late. But fortunately organizations have proven to be a bit more mature with this.

Schofield's Second Law of Computing suggests that unless you have _at least_ 2 copies of your data, you should treat it like it doesn't exist.

Ideally, you should keep both copies in different physical locations – and by that, I don't mean different drives, but ideally different countries or continents.

For data in your possession, such as your desktop, laptop, or flash drives:

-   Devices or your whole inventory could get lost or stolen.
-   If you have full-disk encryption, you could forget your password.
-   Your hardware may fail on you, resulting in data loss.
-   Disasters such as fires or floods may destroy everything on-premise.

It could even be due to user-error. No matter how technical you are, you could "Overwrite" instead of "Save As", flash an operating system to the wrong drive, or a developer might forcefully push to the wrong branch after amending a commit.

You should always be prepared for the scenario that may lead to loss of data. While not everyone has disposable income lying around, physical goods are generally easy to replace with enough money, potentially years worth of accumulated data is irrecoverable.

## Data in the Cloud

Schofield's Second Law doesn't only target data in your possession, but also data you keep in the cloud. For example, you should store your cloud storage, emails, and media content in a second location as well.

This is especially important when using services that don't take responsibility for backing up your data, or close your account after a period of inactivity. This is common with companies that provide truly free services, free of cost and free of tracking, like Nextcloud providers or Tutanota.

Don't assume your data is safe just because it's in the cloud. A recent example of this is the fire that started in one of OVH's datacenters resulting in the loss of data. OVH Public Cloud provides unmanaged servers, which means the user is responsible for managing and backing up their servers. ([More Info](https://wikipedia.org/wiki/OVHcloud#Incidents))

There is also the risk of vulnerabilities that allow unauthorized access to your account.

For example, last year hackers obtained access to Twitter's administrative tools which granted them access to many high-profile accounts. Using such tools, it would've been just as easy to delete previous posts and media. ([More Info](https://wikipedia.org/wiki/2020_Twitter_account_hijacking))

## Sync Your Data

You can solve some of these problems by using solutions that sync your data between your computer and a server. This offers protection from any hardware related failures, or physical damage.

Data that would have detrimental consequences if lost should be encrypted and synced to cloud storage. Some software like Bitwarden or Thunderbird natively rely on syncing as well, so even if the server were to disappear, you'll still have a recent copy on your device.

However, syncing doesn't solve all problems – it's ideal to have an isolated backup as well. Syncing will automatically send all changes, including user-errors, or even changes made by malware or ransomware. Having regular cold storage backups would be handy for cases like this.

# Schofield's Third Law of Computing

> "The easier it is for you to access your data, the easier it is for someone else to access your data." ― [Jack Schofield](https://www.theguardian.com/technology/2008/jul/10/it.security) (2008)

Protecting data has always involved finding a balance between security and convenience. We want data to be easy to access for us, but hard to access for others.

This conflict has led to issues regarding data negligence.

When you put data on the cloud, you automatically make it easier for others to access. Your cloud provider could have vulnerabilities, someone might guess your password, or an employee could go rouge and compromise or sell your data.

You might be able to blame someone or get compensation for the incident, but your data and potentially your clients' data is still out there, and you'd be the one who ultimately allowed it to happen.

Increasing security tends to be inconvenient, but these are the inconveniences that others bet on when looking to compromise accounts:

-   [Brute-force Attacks](https://wikipedia.org/wiki/Brute-force_attack) – Bet on short passwords, as it's quicker to type.
-   [Credential Stuffing](https://wikipedia.org/wiki/Credential_stuffing) – Bet on password reuse, as it's more convenient than managing multiple.
-   [Dictionary Attacks](https://wikipedia.org/wiki/Dictionary_attack) – Bet on logical passwords, as it's easier to recall.

Furthermore, these attacks rely on users not enabling 2FA, and that the data on the other side isn't obfuscated or encrypted.

You or your organization should be using a password manager, enforcing 2FA on all systems, and where possible encrypting data before it's sent to third-party servers.

Even better, remove data that is no longer relevant. It's always better to erase data than to worry about protecting it.

This might include chat histories, emails, or files that contain confidential information, social media passwords, and client or employee data. Especially if they're months or years old and no longer relevant. If you don't need them, nobody else does either.

# Conclusion

These principles were established over 10 years ago, and apply more today than ever before.

Technology and open-standards have evolved, so they are easier to adhere to. But with the growth of cloud infrastructure, we're increasingly trusting third-parties with our data. In many cases, we may be too comfortable with where it's being left and who has access to it.

Unfortunately, Jack Schofield died in March 2020, but he supported many in the tech community. I hope through sharing his experiences, others may continue to learn from them.