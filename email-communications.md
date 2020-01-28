## Ian's introduction

* Minimal experience with coding
* Deals primarily on the client side of things (ensuring they are enrolled, operations running smoothly)
*  Not dealing much with volunteer recruitment / fundraising
MOW Durham Background
* 560 clients, each get 1 meal a day (around lunch)
* 410-450 meals a day
* Additional Services
  * Pet food program (completely donation based)
  * Vials of life are provided by Durham County EMS
  * Provide doorbells for clients who need them (partnership with Habitat for Humanity)
* Delivery drivers are volunteers (not true of all MOW chapters). Due to this, they have gotten feedback from many clients that they feel drivers are very friendly and dedicated etc.
* Client database is on a separate server from the 'regular' server (not quite clear what the infrastructure layout is just yet). The main server I believe hosts their volunteer database.


## Email from Ian to Richard (July 2019)
> I had the chance to email with someone from OneEach Technologies, who created our company website. This is where our client and volunteer applications come through, and it has the ability to export excel reports. I have attached de-identified examples of these two reports. The person at OneEach told me the following when I asked about what type of database they use: “Well, our system is a proprietary config on a Drupal farm so I do not have a lot of the technical backend information for you.  All that you would need to worry about on your end is adding content to the site. So we would manage any customizations on the site here and do not really allow any backend access.” That being said, as we discussed at the meeting, we have the ability to change forms on the site, and export reports from completed forms. We also have the ability to automate emails that include application information whenever an application is submitted. I'm curious what the response from OneEach means to you.
> 
>As discussed at the meeting, our client database is called ServTracker, and it is a product of Accessible Solutions. It is an access database, and it lives on a different server than our main server. I've attached an export of de-identified service unit information which could be used for project #3. I have also attached a report that could be used for project #1.
>
>Finally, our volunteer database is called "Meals on Wheels Scheduler", or "Scheduler" for short. It's made by a company called Purplewire. Here's what they said about their type of database: "The MOW Scheduler runs on a mysql database. However, we need to say up front that we can't give outside people or programs direct access to the database for security reasons. We have a basic REST API (it hasn't been publicly announced yet) for Contact data that could potentially provide an integration method for some kinds of projects, and we're interested in expanding this API to allow other types of integration in the future." I've attached a template that Scheduler provides for bulk uploading new volunteers.
>
>Let me know if you have any questions about any of this info or attachments, or if additional info is needed. I'll also talk with our senior staff on Thursday about their thoughts on these four projects.
>Thanks again for your time and work on this!


## Email from Ian to Richard (September 2019)
>**Ian**: I've followed up with the developer for our website (OneEach Technologies) to see what they thought about integrating directly with MOW Scheduler (our online volunteer database) and it doesn't sound promising. I've included my chat with their help desk below, in case you see any opportunity here that I couldn't. I wasn't sure what the "third party solution" he mentioned at the end was.

*Email thread between Ian and Jeff (OneEach)*
>**Ian**: Good morning, I'm wondering about the possibility of integrating our volunteer application with our volunteer database, MOW Scheduler. The MOW Scheduler database has recently made it easier for volunteer applications to be sent directly to their system, and I'm wondering how we could set up our volunteer application page on our website to communicate directly with theirs. Is this possible? Thanks!
>
>For additional information on the MOW Scheduler system: http://support.mowscheduler.com/integration/volunteerapplication/
>
>**Jeff**: I am afraid this is not possible, unfortunately.
>
>**Ian** to confirm, this is not possible even if we paid for development?
>
>**Jeff** I am afraid not no. Even so, the cost would be extremely high and the maintenance would be rather worse. So we do not do it since it is so cost-prohibitive. If there is a third-party solution that can provide an embed we can do that. I have only seen this tool with a link out.

## Email from Richard to Ian (September 2019)
> Thanks for the update! I agree, this doesn’t bring much confidence but I do think I understand what he’s getting at. By “Third Party Solution” I think he generally means a development solution produced by someone other than OneEach Technologies (First Party) or MOW Durham (Second Party). Typically “Third Party” refers to a solution or team that helps to support a larger, more broader solution in a limited capacity. In this case, the broader solution being the MOW Durham website and the third-party solution being this connection to the Volunteer database from the website.
> In his reference to a solution that they can “embed”, it sounds like he’s referring to a solution that essentially allows them to drop external packaged-code into the internal MOW Durham website code with minimal or no additional work. This external packaged-code would single-handedly implement the required transfer between the volunteer application form/data and the volunteer database while also not impacting any of the existing MOW Durham website functionality.
> I’m not confident that such a neatly packaged solution exists for what we’re trying to accomplish, but I’ll double check with the team to see if I’m missing any ideas and get back to you soon.

