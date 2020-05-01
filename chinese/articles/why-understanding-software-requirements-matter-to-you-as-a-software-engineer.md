> * 原文地址：[Why You Need to Understand Software Requirements as a Software Engineer 你以为软件工程师就是写代码的吗？深入理解软件需求很重要！](https://www.freecodecamp.org/news/build-a-simple-json-api-in-python/)
> * 原文作者：Greg Byrne
> * 译者：
> * 校对者：

![Why You Need to Understand Software Requirements as a Software Engineer](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/understanding-software-requirements.jpg)

In this article, you'll learn all about Software Requirements. You'll get an outline on the topic area, the process, and most importantly what your responsibilities are in this area as a software engineer.

You should gain some insight into your role and activities with software requirements. If anything, you'll have something to discuss with colleagues after your next stand-up 😃

This article borrows heavily from the tome that is the  [IEEE SWEBOK guide][1]. It attempts to distill some of that knowledge, re-purposing it more concisely. In case your wondering, SWEBOK is an acronym for the Software Engineering Body of Knowledge which is maintained by the IEEE Computer Society.

## Upfront, Why is this important?

There is a misconception from those not in software engineering that the role of a software engineer is to just "write code."

Yes, we're technologists who generally love learning programming. In reality, this is a simplistic view that under-values what a software engineer professional actually does in their day-to-day job and career. It focuses only on a slice of their overall responsibilities.

A software engineer's role is to build business solutions at enterprise scale. This includes a large number of responsibilities that aren't related to the code they create.

One area of responsibility you have as a professional software engineer is the area of software requirements.

## What are Software Requirements?

Software Requirements on the surface sound simple. The software must do X for Y so that Z. Think about it for long enough on any problem that software could solve (or about existing software already solving a problem) and you could probably brainstorm a large number of requirements. Easy right?

Well no, in fact, for most enterprise software.

_How are you gathering your requirements? Are you considering the stakeholders needs and priorities? Is this really a requirement for users of the software? Are there technical limitations of considerations? How do you know when it's done? Does the requirement implementation satisfy a set criterion? And so on..._

When you start drilling into the idea of Software Requirements, you find that they hide a large and deeper knowledge area.

How deep and large a knowledge area? SWEBOK defines the area of Software Requirements as being "_concerned with the elicitation, analysis, specification, and validation of software requirements as well as the management of requirements during the whole life cycle of the software product._"

The size of this area, such as the number of activities and how involved each can be, gave enough credence to devote a branch of engineering known as "_requirements engineering_" solely focused on the requirements process.

Certain organizations may hire specifically for the role of a requirements engineer. You may see this more often in really large organizations who provide system-level solutions, for example, where their proposed solutions to customer problems encompass a total solution of which the software is just a single component.

More typically, organizations tend to share requirements engineering responsibility through activities assigned amongst the various other project roles, like designers, business analysts, product owners, offering or client management, technical writers, software architects/engineers, and so on.

In general, it is difficult to implement the requirements process in a linear process in practice, like a waterfall methodology. That would require software requirements to be elicited from the stakeholders, classified, allocated, and eventually handed over for implementation by the software development team. This often isn't feasible for long-term at-scale successful solutions.

Requirements for those large software projects are never perfectly understood or perfectly specified. Instead, they usually iterate to just enough level of quality and detail that allows for design and procurement decisions to be made.

Requirements engineering is distinct from software engineering in the type of work you focus on.

It is important you understand your connection with the requirements process as likely you will be generally involved in some requirements activity at some point.

## What is involved in software requirements for the software engineer?

Depending on your organization's requirements process and/or the requirement activities the software engineer is responsible for, you may be involved in any or all stages. This could be from gathering requirements right through to verifying their implementation.

Areas where you may be involved:

-   Elicitation - the gathering of requirements for the software
-   Classification - categorizing the requirement
-   Validation - confirming the requirement with stakeholders
-   Development & Implementation - building the software to meet the requirement
-   Negotiation - dealing with stakeholder conflicts of interest
-   Verification - evaluating the software function satisfies the requirement

It's worthwhile to note that this isn't a duplicate of the requirements engineering process. They require a deeper level of involvement and types of activity with certain areas, such as the management and documentation of requirements.

Managing and documenting requirements won't typically be your responsibility. It will likely be one the other roles sharing requirements responsibility.

It is important that you know how to access and use the management system of requirements to assess requirement changes and impact analysis.

### Um, there isn't a management system of requirements...

In some cases, the recording and management of requirements may not be in a specialized system. They could be recorded in other types of recording systems, such as issue tracking software, project management tools, or perhaps even the version control system.

In other cases, organizations or project teams don't develop a means to document and manage requirements. They instead might rely on the vision of leadership (an individual or team with the common example being the company founder) and/or have limited resources. They can counter-argue that recording or managing requirements isn't necessary.

Not recording and managing requirements can potentially be a serious risk to an organization and the software solution process.

For example, your organization, which develops solutions for client needs, will have to meet certain legal obligations. They will state that your software component is built to provide certain functionality and is able to give a specified level of service (SLAs).

But if a conflict (legal or otherwise) should arise, perhaps a missing piece of functionality, a non-functional requirement wasn't operating as expected, or even time/budget spent on unwanted features, how do you show what was implemented was what was agreed by the stakeholders as required and necessary?

Your organization should be able to demonstrate the mapping between the high-level solution requirements (what the client needs as a solution) to the validated software requirements (what the stakeholders agreed as meeting the functional needs of the solution, not necessarily 1-to-1) through to implementation of documentation and recording of acceptance or service level tests that demonstrate the functionality provided.

Another more common (and less contrived) example is assessing impact. As your organization or project team grows and evolves, so too does the software you create. Unless the software is meant to be dispensable, it should be envisioned to operate over a period of time and so will be subject to upgrades, new features and maintenance.

This new work may negate, impact, or change existing functionality designed to meet a historical requirement in various ways (such as changing the software architecture or design of a component).

If so, you will need to revisit old requirements to understand better the motivations that underpin it. For example, why was it implemented in such a way? Does the current work need to change? Is the old requirement still relevant? etc.

## Elicitation of Software Requirements

Requirements elicitation refers to the activity that describes how the requirements are gathered or collected. Not all requirements are "gathered" from a customer and may be derived from the system or domain the software operates within (such as operability and reliability for critical systems).

From a project management perspective, elicitation is critical to derive the project scope and the deliverables important to the client or user needs, prioritizing the most important needs first.

### What is involved in eliciting software requirements?

Depending on the your role's level of involvement in the requirements process, you may need to take requirements from source.

Requirements elicitation helps inform the design and architecture of the overall solution. It's important you understand where requirements come from and what techniques are used.

### Where do the software requirements come from?

There are many sources to requirements, such as:

-   Goals (also known as Business Concern, Critical Success Factor, etc.)
-   Domain Knowledge
-   Stakeholders
-   Business rules
-   Operational environment

If you're involved in the elicitation from sources, you'll need to:

-   Pay particular attention to the goals.
    -   These often are generally vague, like  _"The software must be implemented using best practices"_  or  _"The software must be user-friendly"_
    -   Assess the relative value to priority of the solution. Study relatively low-cost ways of achieving.
-   Acquire or have available knowledge about the application domain
    -   This provides you the background information that gives understanding to the reasons behind the requirements.
    -   Development of models of the real-world problem, such as entity relationship models, are key to good software requirements analysis. Try to think using an ontological approach.
-   Identify, represent and manage the viewpoints of many different types of stakeholders
    -   Requirements may be conflicting, overlapping, or require different motivations in parts from the needs of different stakeholders.
    -   It's important you recognize the different needs, especially in the implementation pre-planning, where the needs are incorporated into the design.
-   Show sensitivity to the solution's operating environment
    -   The operating environment will be subject to an organization's structure, culture and internal politics.
    -   A general principle your software should strive for is not introducing unplanned or forced changes on the organization's business process.

### How do I get the software requirements?

Some principal techniques you may be involved with (providing technical expertise) could be:

-   conducting stakeholder interviews
-   outlining scenarios
-   building prototypes
-   observation in the problem area
-   user stories

In building prototypes, a general principle you should try follow is to use low fidelity prototypes more often in these earlier stages.

These are preferred to avoid stakeholder fixation on minor or incidental characteristics. A higher-quality prototype can limit design flexibility in unintended ways.

## Classification of Software Requirements

When software requirements have been elicited, they can then be classified across a number of categories by the project team.

This helps in a variety of ways, such as estimating project effort, identifying components for the solution design, or even simple implementation considerations.

Classification types can include:

-   Functional / Non-functional
    -   Functional requirements describe the functions that the software is to execute. For example, providing a communication channel for a user or transferring data from one format to another. They can also be known as product's features or capabilities.
    -   Non-functional requirements act to enforce certain constraints on the solution, often in terms of quality. These can further classify into the many types of "_\-ilities_" such as availability, reliability, recoverability, maintainability, scalability, performance, security, etc.
-   Derived / Imposed / Emergent
    -   Does the requirement derive from other requirements?
    -   Is the requirement being imposed explicitly by a stakeholder?
    -   Is the requirement an emergent property? In other words, it cannot be addressed by a single component but depends on how all the software components interoperate.
-   Process / Product
    -   Is the requirement product-related? (an example, "_The software must verify a person's eligibility_")
    -   Is the requirement process-related? (an example, "_The software must be developed incrementally and use continuous integration and deployment workflows_)
-   Priority
    -   Balancing the cost of development and implementation versus need for delivery.
    -   Can use a fixed-label scale like mandatory, highly desirable, desirable, and optional.
-   Scope
    -   Used to consider the impact on the software architecture and component designs.
    -   Non-functionals often have a global scope.
-   Volatility / Stability
    -   The potential the requirement will change during the life cycle of the software.
    -   This will help implement designs that are tolerant of changes

## Validation of Software Requirements

Once the software requirements have been elicited and classified, they need to be validated with the stakeholders for accuracy and whether or not they actually fulfill their needs. Requirements that cannot be validated are really just "wishes" by the stakeholders.

If you follow an iterative development method, the validation of requirements can be performed regularly, separated by scope around specific solution areas, or undertaken in chunks, or some other type of separation that makes logical sense.

Requirement validation usually involves the solution team replaying their understanding of the requirement back to stakeholders. It can also involve an initial design (business or technical, or both) which shows how each of the stakeholder needs will be implemented.

These understandings are iteratively created through the planning stages and normally consist of the views of a cross-functional team (designers, business analysts, technical experts).

In some cases, the design may need some pre-implementation work to better demonstrate the team's understanding, usually in the form of a functional prototype.

During validation, your team may not be able to perfectly satisfy the requirements of every stakeholder. It will be your responsibility as the technical expert to demonstrate and negotiate the tradeoffs that fit the constraints. It will need to be acceptable to the principal stakeholders while also within budgetary, technical, regulatory, and other measures.

### Using functional prototypes

Functional prototypes are useful as they allow for:

-   validating that the requirements are understood
-   easier interpretation of the engineer's assumptions
-   feedback which can provide new requirements

You must consider that stakeholders can be distracted by cosmetic or quality problems. You can mitigate this through consistently communicating the real importance of the demonstration - the core underlying functionality.

How the prototype is built is determined by your project team. Some advocates prefer prototypes that avoid software altogether (similar to those built when eliciting requirements). Others prefer some type of software display through design tool-kits or a quickly built draft iteration of the software behind a feature control.

Whatever choice your team decides upon should consider the speed of building the prototype versus the effectiveness of demonstrating the core functionality.

## Development & Implementation of Software Requirements

When the requirement has been validated with stakeholders, you can begin development/implementation of the requirement.

In many cases, you will act as software architect because the process of analyzing and elaborating the requirements demand that the architecture/design components that will be responsible for satisfying the requirements be identified.

A key interest for your organization is to profit from the software solution. It is your responsibility to try to use methods that reduce the cost of development and maintenance.

You can do this, for example, through component reuse (internally or from other products), using well-defined patterns, and working with well-tested and well-documented tools/frameworks.

Specific requirements, particularly constraints, can have huge impact on the cost of software. For example if your skill set in the implementation is poor or the perhaps the requirement is counter or doesn't fit with the current architecture. Important tradeoffs among such requirements should be identified to the project team.

Throughout the requirements process, an important point you should understand is the expectation that a significant proportion of requirements will change. Recognize the inevitability of change and try take steps in your design to allow for it.

### The User Story

A software engineer often works within the context of a user story deliverable. The user story is a natural-word representation of a particular user-type's interaction with the software and the functionality it should provide them. It usually follows the format of:

> As a <role> , I want <goal/desire>, so that <benefit>

An example:

> As a course administrator, I want to see the number of people enrolled in a course, so that I can see the current course capacity

In some cases, the user story will come with a design or prototype if these were required in the validation stage.

It is possible the user story isn't user-centric and instead derives from an emergent property or non-functional requirement. In these cases, you may receive the requirement in a different deliverable context (such as a specification or scenario set).

A user story is intended to contain just enough information so that your engineering team can produce a reasonable estimate of the effort to implement it. If your team is unable to produce a reasonable estimate, it could a be a sign of a poor match in knowledge/skills, individual confidence levels, fitting or dependency constraints, or crucially that the user story is lacking in quality.

Software engineers are (necessarily) constrained by project management plans, so you must try to take steps to check that the quality of the requirements is as high as possible, given the available resources.

Before a user story is implemented, check:

-   for an appropriate acceptance criteria, written or agreed with the stakeholders, that determines how the goals of the user story can be fulfilled with the implementation.
    -   This will form the basis for the acceptance tests of the feature (in other words, the tests that demonstrate the requirement is fulfilled).
    -   This may also form part of the team definition of "done" or complete.
-   the prototype design (if made) is feasible and can fit within the current architecture, engineering skills, and tools approved for use in the project.
-   any assumptions that underpin the requirement.
    -   This can highlight gaps in knowledge, potential problems, or other scenarios/edge cases not considered that require further clarification from the stakeholders.

## Negotiation of Software Requirements

In implementing a requirement, it is possible that not every stakeholder interest is satisfied perfectly. This can happen, for example, between functional and non-functional requirements, or where one requirement implementation impacts on another stakeholder interest.

In most cases, it is unwise for you to make a unilateral decision.

Instead, your responsible for assessing the problem, communicating simply, and negotiate tradeoffs that are acceptable to principal stakeholders while remaining within budgetary, technical, regulatory, other constraints.

## Verification of Software Requirements

All software requirements demand the need to be verifiable, as a feature or functional requirement, or at global level as a non-functional requirement. Requirements should be verified against the finished product.

An important task for you is to plan how to verify each requirement.

A software engineer verifies a requirement using an acceptance test. The acceptance test demonstrates how the requirement has been completed (fulfilling the acceptance criteria) by showing end-user behavior conducting business with the software as defined by the requirement.

In requirements where its more difficult to demonstrate the verification, such as non-functional requirements, a constructed simulation may be required. For example, to test the performance load of software implementing an intake process, testing software may be created to simulate hundreds or thousands of applications to the system in a black-box acceptance test.

As software evolves over time, the implementation of a new requirement may inadvertently affect the fulfillment of a previously implemented requirement. This regression can be guarded against by automating the acceptance tests. You can find many tools and libraries available for programming languages in general use by enterprises that enable automating acceptance tests.

Don't confuse the acceptance test as your sole testing responsibility. Adequately attempt to cover the implementation with other tests besides acceptance, such as unit or integration tests.

Acceptance tests vary in the level of complexity depending on the acceptance criteria. Different organizations can also use different terminology and practices, which means it can be confused with other types of testing or referred to by different names, such as end-to-end testing, functional testing, or scenario testing. Your organization may also have strict criteria or formats in which acceptance tests are demonstrated with.

Remember that the core of every acceptance test is simply a formal verification that an implemented solution satisfies the software requirement by replicating user behaviors on running application against the end product.

## That's it in a nutshell

You've made it. Kudos to you!

I hope this article provided some benefit in acknowledging your role as a software engineer with Software Requirements.

You can  [read more of my articles on my blog][2].

_This article is shared freely and the author did not receive any contribution or profit as mandated by SWEBOK copyright and reprint permissions. Any views or opinions expressed do not reflect those of IEEE or any body/organization to which I am affiliated with, is not endorsed by the IEEE, and represent my own solely my own view and opinions._

[1]: https://www.computer.org/education/bodies-of-knowledge/software-engineering
[2]: https://www.gregbyrne.ie/
