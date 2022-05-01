> - 原文地址：[AWS IAM – Policy, Access Roles, Resources Explained, and Why They're Useful](https://www.freecodecamp.org/news/the-introduction-to-iam-i-wish-i-had/)
> - 原文作者：[Periklis Gkolias](https://www.freecodecamp.org/news/author/periklis-gkolias/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![AWS IAM – Policy, Access Roles, Resources Explained, and Why They're Useful](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/g7In5Xr-2.jpg)

IAM, or Identity and Access Management, is one of the most common terms you'll hear in cloud-native environments.

But what does it do? And if you're already familiar with IAM, how long did it take you to fully understand it?

I will explain the main concepts behind this massive family of software, with you, the busy engineer, in mind.

The fundamentals described here are vendor agnostic, though most of my experience is with AWS's implementation.

## What Is IAM?

IAM is a complex system of entities (humans, applications, and so on) that request access to a system. It is also a hierarchical set of rules to grant or deny requested access.

Before we go any further, here are the main terms you'll encounter:

- **Resource**: Anything worth protecting. A storage service, virtual machine, etc.
- **Policy**: A set of rules that dictate who can and can't do something on a single resource or group of resources.
- **Action**: Anything someone can do inside the cloud environment. For example, creating a virtual machine.
- **User**: Well... A user :)
- **Group**: A group of users with the same permissions applied.
- **Principal**: A user or an application requesting access.
- **Role**: A set of powers assigned to a principal, usually for a limited amount of time.

## Why IAM Is Useful

IAM is mainly used for authentication, authorization, granular access, and governance.

Let's see what those all mean:

- **Authentication**: The act over verifying who you are.
- **Authorization**: The act of identifiying if someone can perform the action they are requesting. This is usually combined with authentication, but not always.
- **Granular access**: Permissions that control each action that can happen on a resource. For example, a user might have permission to see firewall rules, but doesn't have permission to change them. This is implemented with [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control).
- **Governance**: The actions you take to know what is happening in your environment, mostly for reasons of budget, compliance, and proper access scope.

If you're a company of 1-3 people, then setting up a full-blown IAM solution is probably overkill. Buf if your team is larger than that, or you're planning to scale up, then you should start considering it.

![IAM pillars](https://www.freecodecamp.org/news/content/images/2022/04/WxyvyO4.jpg)

## Common Problems You Don't Use IAM

I believe you can see the benefits of an IAM solution.

Now let's take a look at some common problems organizations face in the absence of it.

### It's Hard to Audit and Administer Access

Have you heard of cases where an employee had more access than they should? And additionally, no one knew?

This can be prevented with a properly set-up IAM solution.

### Setting Up Accounts for New Hires Is a Pain

With an IAM solution in place, this would just be a matter of a few clicks. Namely, set up the users and add them to the IAM groups their teams use. That's it.

But without an IAM solution? You would need to set all the permissions for each account manually.

You might have a reference user to copy from, but does each new account need all the permissions the reference user has? Do you have special handling for user accounts that are less than 6 months old? Does the reference user have superuser permissions that should not be accidentally assigned to a new hire's account?

### Offboarding People Is Time Consuming

Here you'll have similar problems to the new hire case above. But when a collegue is leaving, you'll need to change the password to all the accounts they **potentially** used.

This can turn ugly very fast, not to mention the side effects this has on other team memebers.

And you would have to do this for every script, application, and other resource whenever there's an offboarding. What if you have a team change 2-3 times per month? You and your team would have a hard time being productive.

### Simple Things Require Human Intervention

Without an IAM solution, tasks like resetting a password or re-enabling an account that was locked need to be done manually.

Top-tier IAM solutions have a way to resolve such issues fast without much hassle.

## Best Practices

![Best practices](https://www.freecodecamp.org/news/content/images/2022/04/M7N8blv.jpg)

If you've decided to set up IAM, here are some best practices. This is far from a full list, and is based on my personal experience. But I've seen these practices on more than one team, so they should work for you as well.

### Never Grant Full Access... EVER

In a real-world scenario, you wouldn't want every user to have unlimited access to an account. Ideally, no one should full access to anything (apart from the account owner).

For example, if an employee's responsibility is to monitor logs, they should have read access only to that tool. They should not be able to restart a service, or view billing information.

### Prefer Groups to Multiple Users

It's better to use groups instead of multiple users when you have a choice. Groups make administration exponentially easier.

For example, if a new person joins your organization as a developer, they can be added to an IAM group for developers. That new person will then inherit all the powers of that IAM group.

The alternative, creating a user for each group (reader\_susan, admin\_susan) is considered obsolete.

### Prefer Roles on Existing Users to Creating a New User

When given the option, prefer assigning a role to an existing user rather than creating a new user.

For example, don't create an admin user and share the password between 10 people. Create an admin role and assign it to whoever needs it for a limited amount of time.

### Audit Permissions Frequently

It is easy to make mistakes or perform malicious actions. At the very least, a company should audit permissions regularly, and ensure that only the proper people have the minimum level of access necessary for their roles.

You could also send an email to a certain team when a suspicious action happens. For example, assigning an admin role to a new hire.

### Set Up Boundaries Beforehand

If an IAM solution allows for it, add boundaries to your ecosystem.

According to Amazon's documentation:

> A permissions boundary is an advanced feature for using a managed policy to set the maximum permissions that an identity-based policy can grant to an IAM entity. An entity's permissions boundary allows it to perform only the actions that are allowed by both its identity-based policies and its permissions boundaries.

(I know, I know — I promised to be vendor-agnostic 🙂)

In layman's terms, you can define the "maximum" permissions that can be assigned to anyone.

For example, a user will at most be able to view the logs from the relevant tool and restart a service. If someone attempts to get a role to create a new virtual machine they will be disallowed.

## Conclusion

Thank you for reading this far. I hoped you enjoyed this introduction to IAM.

If you have any questions, please reach out to me on Twitter.
