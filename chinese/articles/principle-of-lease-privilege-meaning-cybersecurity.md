> -  原文地址：[Principle of Least Privilege – Definition and Meaning in Cybersecurity](https://www.freecodecamp.org/news/principle-of-lease-privilege-meaning-cybersecurity/)
> -  原文作者：[Manish Shivanandhan](https://www.freecodecamp.org/news/author/manishmshiva/)
> -  译者：
> -  校对者：

![Principle of Least Privilege – Definition and Meaning in Cybersecurity](https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/cover.png)

Information technology has made a profound impact on our lives over the last three decades. It has helped us create global businesses, transform industries, and build powerful connections.

But it has also led to increased risks in security and privacy. Individuals and businesses are vulnerable to cyber attacks now more than ever. Recent data breaches (and eventual bankruptcy) of various businesses have shown us the importance of having strong cyber defense mechanisms.

Given the cost of having in-house cyber security teams, most small businesses are at risk of a data breach. As the former FBI director Robert S. Mueller said, “There are only two types of companies: Those that have been hacked and those that will be hacked”.

So what is a scalable and cost-effective solution that businesses can start implementing? We can start with one: The Principle of Least Privilege.

## What is the Principle of Least Privilege?

The principle of least privilege (PoLP) is the practice of limiting access to resources for members of an organization. In simple words, if someone does not need access to a resource, they shouldn’t have it.

In spite of this logical statement, PoLP is rarely implemented. Every person in an organization should only have enough permissions to do their particular job functions. Nothing less, nothing more.

It doesn’t matter how skilled or trustworthy a member is. The principle of least privilege is the vital ingredient to a company’s security. With governments insisting that cyber breaches be made public, the right access control is the only way businesses can protect themselves from monetary and reputational damages.

## How to Implement the Principle of Least Privilege

So how can an organization implement PoLP? Here are five ways to get started.

### Role-based access management

Managing access for individual users is a challenge in itself. Adding security to it makes it even harder. This is where Role-based access can help accomplish both these objectives.

Organizational members can be grouped into classes based on their job functions – for example, Developers, Sysadmins, and Human resource professionals. Every group can have their own set of permissions for organisational resources.

This makes implementing access controls more scalable. Adding/removing users will be a matter of adding them to their respective groups. Role-based access also removes the need for revoking individual access to services during employee changeovers.

### Multi-factor authentication (MFA)

MFA is another way of implementing secure access to organizational services. Using MFA makes it harder to use employee credentials to gain access to critical business assets.

There are three types of MFA methods:

-   What you know (passwords, pin numbers)
-   What you have (badge, smartphone authentication)
-   What you are (fingerprint and other biometric identifiers)

### Just-in-time access management

While dealing with a large number of personnel, employers often struggle with turning access on and off. This can become a serious vulnerability if access to an outsider is not turned off for a long time.

Just-in-time access management allows administrators to grant temporary access to resources. Granting access with an expiry date is the best way to protect resources since it eliminates the need for removing access once the job function is complete.

### Audit trail

An audit trail logs every action performed by every employee in an organization. There are many benefits to using an audit trail when it comes to deploying personnel-based security measures.

Having an audit trail helps prevent attacks as well as tracks attacks to their source. During social engineering attacks, employees at the lower level are more vulnerable. In the event of a breach in an employee’s account, companies can avoid further escalations by using a well-defined audit trail.

### Security policies

Having a set of security policies is vital to prevent cyber-attacks. These policies range from password policies to resource-sharing policies. Having a set of security policies documented will also help other members make informed decisions.

[Here is a great list of cybersecurity policies to start with](https://securityscorecard.com/blog/cybersecurity-policy-examples).

## Challenges of Implementing Principle of Least Privilege

Finding the perfect balance between security and usability has always been a challenge for businesses. Here are a few challenges that will rise when trying to implement PoLP.

### Legacy applications

Legacy applications will always be a challenge for any security practitioner. If the application belongs to a third party, it increases the effort needed to make a company secure. If it is hard to transition from a legacy service, businesses should take measures to limit admin access to non-admin users.

You should also update applications to their latest versions. Most software updates are security patches. Even modern applications can have access-related vulnerabilities if they are not from a trusted vendor. It is important to verify every application before they are deployed in a company.

### Employee frustration

Implementing strong security policies will often lead to employee frustration. This is because the more relaxed the security protocols, the easier an employee’s job is. Unfortunately, this will result in the organization’s downfall, sooner or later.

Regular cybersecurity training can help employees understand the importance of security practices. This training can also help raise awareness on securing personal resources like mobiles and laptops.

### Lack of awareness

Employees can become aware of cyber risks through training, but this doesn’t apply to suppliers and vendors. Third-party vendors often carry great risks even if a company’s systems are secure.

Businesses can invite their suppliers and vendors for cybersecurity awareness programs. But this does not guarantee secure practices, nor is it scalable. Strong third-party security policies are a better way to mitigate these external risks.

## Benefits of the Principle of Least Privilege

When implemented properly, PoLP can provide a strong shield of security for any business. Here are some of the benefits.

### Data security

The core purpose of PoLP is to eliminate Privilege Escalation. Most breaches start from a lower level and are then escalated by malicious actors. Using PoLP practices will slow down attackers and provides defenders with a fighting chance.

### Secure Scalability

Businesses can scale with confidence if strong PoLP practices are in place. Fortunately, PoLP multiplies the security posture of an organization as it scales to more resources. It is also easier to implement PoLP at small-scale architectures compared to a large enterprise.

### Regulatory Compliance

Depending on the nature of the business, regulatory compliance is mandatory in most countries. PoLP is a recurring topic in most compliance requirements. This includes [HIPPA compliance](https://compliancy-group.com/what-is-hipaa-compliance/) for healthcare providers, [PCI-DSS compliance](https://www.imperva.com/learn/data-security/pci-dss-certification/) for payment handlers, and many others.

### Reduced third-party risk

A third-party provider will always be an attack vector. Given the limited influence of a business over the vendor’s security practices, preparation is key. Ensuring that PoLP practices are always followed can help mitigate numerous external risks to an organization.

### Improved incident response

In most countries, CEOs are liable in the event of a security breach. In the unfortunate event of a cyber incident, PoLP tools like audit trails will make or break a company. Identifying and containing incidents is paramount in protecting a business from critical damage or even bankruptcy.

## Real-World Incidents

-   [The 2013 Target security breach](https://www.usatoday.com/story/money/2017/05/23/target-pay-185m-2013-data-breach-affected-consumers/102063932/)—Target had to pay $18.5 million in damages after a security breach. Hackers gained access to target systems via a third-party vendor who had access to Target’s network.
-   [Solarwinds breach](https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know)—Attackers gained access to one of many global (and fully privileged) accounts of Solarwinds. This led to one of the biggest breaches of the 21st century affecting even the US government.
-   [NSA Snowden breach](https://www.venafi.com/blog/deciphering-how-edward-snowden-breached-the-nsa)—Arguably the most famous security breach of all time, Edward Snowden had admin-level access to resources that helped him copy 1.7 million NSA files. NSA eliminated a number of sysadmins to improve the PoLP posture.

## Summary

Businesses with a lack of exposure to cybersecurity often overlook the dangers of a cyber attack. Malicious actors can bring a business to a standstill and even bankrupt an entire company.

The Principle of Least privilege is the first and most important step in securing an organization. Implementing PoLP does not shield an organization from all cyber attacks, but a lack of PoLP will make it ridiculously easy.

Loved this article? Join **[Stealth Security Weekly Newsletter](https://stealthsecurity.io/)** and get articles delivered to your inbox every Friday. You can also [connect with me](https://www.linkedin.com/in/manishmshiva/) on LinkedIn.