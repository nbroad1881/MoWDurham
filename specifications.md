# Project Ideas from Ian at Meals on Wheels

## Ian's introduction

Ian's Introduction:
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


## Initial ideas
1. Integrating our volunteer / client application intake webform with our volunteer / client databases
   * Volunteers & Clients have different application webforms, but both available on the website
   * One of the MOW Durham staff gets an e-mail notification that an application was submitted
   * Once they are approved, the volunteer/client needs to be added to a database (they will be different databases based on whether or not they are a client or volunteer)
   * The webform submission data may be stored in their backend web server
   * Backend web server and site was set up by another company, but day to day stuff is managed by MOW Durham (One Each Technologies set it up for them)
2. Creating a user friendly client application process that also better explains other services a person might be eligible for
   * Durham county is involved in a roll out of NC Cares 360 (it is a client referral system which is meant to help social services better). This program may address this concern. Ian wants to hold off on it for now.
3. Creating a daily checklist of items for delivery, pulling data from our client database
   * The user for this would be The Greeter
   * There is a volunteer known as The Greeter for the driver volunteers. The Greeter needs to ensure that all the required food is available and ready for each route.
   * Currently, they are manually making this checklist on a large legal sheet of paper. They create this manually by using a few of the reports they already generate (different reports). It's quite manual.
   * There's a report that might already give most of the information they need, but not everything that is required. Also the format is not ideal.
   * They want to translate the data in this database into an elegant checklist for this Greeter
  
4. Data visualizations that help illustrate the impact of MOW Durham, as well as showing the community need
   * Lot of data visualizations exist today for MOW at the national level. But they would like to generate visuals at the local level for MOW Durham specifically
   * Ian will send examples at the national level for us for inspiration
   
5. Need to keep track of the amount of time that volunteers take to delivery across routes.
   * Currently they use clock in and clock out times. 3/4 of the clients come back to the MOW Durham office. 1/4 will call in or use the mobile app to log their completion times. This generates different sources of data for the completion times which causes manual work to join it all together.
   * iOS sign in/out app?
   * Some volunteers likely not comfortable using mobile apps. 10-30% of volunteers use the app.
   * When people clock in, there is a sign out sheet that everyone signs. When people clock out, they either use the app or they give their physical route sheets which themselves dictate the completion time.
6. Maximize enrollment of volunteers given budgetary constraints. How many clients can they serve while still having enough food for everyone? (A math problem he says)
   * Need to bring in budgetary data (monthly spending in funding streams), Need to bring in from client database the total number of clients served in each funding stream in the last month, and number of meals served in the funding streams in the last month
   * Some of the meals are subsidized for clients
   * Currently, enrollment is done on an ad-hoc basis. When they see that the client count is down, they will see where they can add clients.
   * DSS gets involved with subsidizing meals for MOW clients (Department of Social Services)
   * ServeTracker (client database)
7. MOW Route streamlining (Did not originally prioritize this idea / think it was necessary)
   * Ian feels the client database does this pretty well already, not an existing need for them. **(EDIT: He changed his mind a bit half-way through, he actually might be interested somewhat)**
      * Interested in optimizing route order, but not in adjusting the routes themselves. Wants routes to remain mainly static and consistent. This is both for operational reasons but also volunteers tend to get to know clients on their routes pretty well and develop relationships. Clients & volunteers would want to keep seeing the same people generally.
      * Doesn't want to dynamically change route assignments in any kind of automated way
   * Route sheets generated each day for volunteers via their app / existing software. Directions come from Bing maps. It seems pretty dynamic, if volunteers need to cancel it sends the directions to the replacement volunteer.
   * Their current app allows smartphone users to sync the directions to their preferred directions app (e.g. Google maps, ways etc.)
   
  
## Updated Project Shortlist
1. Maximize enrollment of clients given budgetary constraints. Calculate and report how many clients can be serviced at any given time based on available funding sources.
   * Potential Challenges: Read access to client database data. Client data is stored in an MS Access database which is not ideal.
   * Likely Relevant Skillsets: MS Access, SQL, MS Excel, VBA (potentially), Python (potentially)
2. Integrating our volunteer / client application intake webform with our volunteer / client databases
   * Potential Challenges: Read access to client & volunteer database data. Client data is stored in MS Access database which is also not ideal. Volunteer database service is unknown, but likely a database that can support online transactions.
   * Likely Relevant Skillsets: SQL, Database management, front-end UI development, back-end app development, application hosting
3. Creating a daily checklist of items for delivery to be used by The Greeter
   * Potential Challenges: Read access to client database data. Client data is stored in an MS Access database which is not ideal.
   * Likely Relevant Skillsets: MS Access, SQL, MS Excel, VBA (potentially), Python (potentially)
4. Data visualizations that help illustrate the impact of MOW Durham, as well as showing the community need
   * Potential Challenges: Any interactive visualizations may be difficult to integrate into their existing website due to access and bureaucratic red tape. As MOW is a national organization, there may be hoops to jump through in terms of what it would take to add content to their website. Ian seemed interested in visualizations which could be used as marketing materials to help fundraising--so static info-graphic type visualizations may be a good fit
   * Likely Relevant Skillsets: Data gathering, data analysis, data visualization, content design & presentation (edited)
   

## Email from Ian with more information
> I had the chance to email with someone from OneEach Technologies, who created our company website. This is where our client and volunteer applications come through, and it has the ability to export excel reports. I have attached de-identified examples of these two reports. The person at OneEach told me the following when I asked about what type of database they use: “Well, our system is a proprietary config on a Drupal farm so I do not have a lot of the technical backend information for you.  All that you would need to worry about on your end is adding content to the site. So we would manage any customizations on the site here and do not really allow any backend access.” That being said, as we discussed at the meeting, we have the ability to change forms on the site, and export reports from completed forms. We also have the ability to automate emails that include application information whenever an application is submitted. I'm curious what the response from OneEach means to you.
> 
>As discussed at the meeting, our client database is called ServTracker, and it is a product of Accessible Solutions. It is an access database, and it lives on a different server than our main server. I've attached an export of de-identified service unit information which could be used for project #3. I have also attached a report that could be used for project #1.
>
>Finally, our volunteer database is called "Meals on Wheels Scheduler", or "Scheduler" for short. It's made by a company called Purplewire. Here's what they said about their type of database: "The MOW Scheduler runs on a mysql database. However, we need to say up front that we can't give outside people or programs direct access to the database for security reasons. We have a basic REST API (it hasn't been publicly announced yet) for Contact data that could potentially provide an integration method for some kinds of projects, and we're interested in expanding this API to allow other types of integration in the future." I've attached a template that Scheduler provides for bulk uploading new volunteers.
>
>Let me know if you have any questions about any of this info or attachments, or if additional info is needed. I'll also talk with our senior staff on Thursday about their thoughts on these four projects.
Thanks again for your time and work on this!


## Files sent by Ian
* Template for Uploading Volunteer Applications to Scheduler.xls
* Website Export_Volunteer Applications.xlsx
* Servtracker Export_for Enrollment Tracking.xls
* Website Export_Client Applications.xlsx
* Servtracker Export_Daily Service Units.xls
* ServTracker Data Import Specification.xlsx


## Packages to use with Excel
* Python
   * [xlwings](https://www.xlwings.org/) "Leverage the power of Python from and with Excel"
   * [openpyxl](https://openpyxl.readthedocs.io/en/stable/) "A Python library to read/write Excel 2010 xlsx/xlsm files"
   
   
   
## Route planning options
* https://www.routexl.com/?lang=en
* https://www.mapquest.com/routeplanner/narrative
* https://www.speedyroute.com/
* https://www.myrouteonline.com/user-guides/google-maps-route-planner 



## Email from Ian September 17, 2019
**Ian**: I've followed up with the developer for our website (OneEach Technologies) to see what they thought about integrating directly with MOW Scheduler (our online volunteer database) and it doesn't sound promising. I've included my chat with their help desk below, in case you see any opportunity here that I couldn't. I wasn't sure what the "third party solution" he mentioned at the end was.
______________________________________________
**Ian**: Good morning, I'm wondering about the possibility of integrating our volunteer application with our volunteer database, MOW Scheduler. The MOW Scheduler database has recently made it easier for volunteer applications to be sent directly to their system, and I'm wondering how we could set up our volunteer application page on our website to communicate directly with theirs. Is this possible? Thanks!
For additional information on the MOW Scheduler system: http://support.mowscheduler.com/integration/volunteerapplication/
**Jeff**: I am afraid this is not possible, unfortunately.
**Ian** to confirm, this is not possible even if we paid for development?
**Jeff** I am afraid not no. Even so, the cost would be extremely high and the maintenance would be rather worse. So we do not do it since it is so cost-prohibitive.
If there is a third-party solution that can provide an embed we can do that. I have only seen this tool with a link out.