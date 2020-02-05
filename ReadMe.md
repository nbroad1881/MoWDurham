# Information about All Projects

  
## Project Shortlist
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
   

## Who is doing what?
1.  Daily Checklist
    *  Richard D, Sakshi, Chris D
2.  Integrating application webform with database
    * Ankur S	, Nick B 
3.   Data Visualization
    * David B

## Files sent by Ian
* Template for Uploading Volunteer Applications to Scheduler.xls
  * Template for bulk uploads to volunteer database
* Website Export_Volunteer Applications.xlsx
  * From website applications -> volunteer database 
* Servtracker Export_for Enrollment Tracking.xls
  * Bulk import template for ServTracker
* Website Export_Client Applications.xlsx
  * From website application -> client database
* Servtracker Export_Daily Service Units.xls 
  * Pull from client database
* ServTracker Data Import Specification.xlsx
  * Input format for client database

## All files stored on drive
[https://drive.google.com/drive/folders/12jTjEJxas3gD2ShNI5F-1UxEr2p5DbBp?usp=sharing](https://drive.google.com/drive/folders/12jTjEJxas3gD2ShNI5F-1UxEr2p5DbBp?usp=sharing)


## Excel
* Python
   * [xlwings](https://www.xlwings.org/) "Leverage the power of Python from and with Excel"
   * [openpyxl](https://openpyxl.readthedocs.io/en/stable/) "A Python library to read/write Excel 2010 xlsx/xlsm files"
* VBA tutorial [https://www.tutorialspoint.com/vba/vba_quick_guide.htm#](https://www.tutorialspoint.com/vba/vba_quick_guide.htm#)
* [https://www.thespreadsheetguru.com/blog/2014/9/27/vba-guide-excel-pivot-tables](https://www.thespreadsheetguru.com/blog/2014/9/27/vba-guide-excel-pivot-tables)
* [https://trumpexcel.com/pivot-cache-excel/](https://trumpexcel.com/pivot-cache-excel/)
   

## Database Information
1. Client database
    * Microsoft Access
    * Not connected 
2. Volunteer database
    * [MOW Scheduler](http://support.mowscheduler.com/integration/volunteerapplication/)
    * [REST API integration](http://support.mowscheduler.com/integration/rest)
    * [Field reference](http://support.mowscheduler.com/integration/volunteerapplication/fieldreference) 
3. Web server 
    * OneEach Technology


## Volunteer Application Format
Submitted on Wednesday, June 20, 2018 - 11:21am  
Submitted by anonymous user: 10.10.21.213  
Submitted values are:    
==INFORMATION ABOUT YOU==  
First name: Timmy  
Last name: Turner  
Street address: 123 City Drive  
City: Cary  
State: North Carolina  
Zip code: 27519  
Email address (if any): timmy@gmail.com  
Phone number (home or cell): 9194443333  
Phone number (work):  
Employer (if retired, former employer): Costco  
Date of birth (optional, month/date):  
Are you (the volunteer) under 18 years of age? No  
How did you hear about us? Just Serve  
==DRIVER'S LICENSE AND VEHICLE INFORMATION==  
Driver’s license number: 12345678  
State issued: North Carolina  
Expiration date: 3/13/2024  
Vehicle insurance company: Allstate  
Policy number: 123456789  
Expiration date: 12/16/18  
==EMERGENCY CONTACT INFORMATION==  
First name: Harry  
Last name: Potter  
Relationship to you: Spouse  
Phone number: 9193334444  
==OTHER INFORMATION==  
Do you belong to a club, group, or civic organization? No  
Do you belong to a local house of worship? Yes  
If yes, please provide name: Hogwarts School  
Is your volunteer interest in order to fulfill community service
hours? : No  
Have you ever been convicted of a felony or misdemeanor
classified as an offense against a person or family? : No  
==AGREEMENTS==  
STATEMENT OF LIABILITY: Timmy Turner  
CONFIDENTIALITY STATEMENT: Timmy Turner  
BACKGROUND CHECK ACCEPTANCE: Timmy Turner  
==Title VI COMPLIANCE==  
==Meals on Wheels of Durham Title VI Compliance==  
Title VI Compliance Signature: Timmy Turner  
Title VI Compliance Date: Wed, 06/20/2018  
The results of this submission may be viewed at:
https://www.mowdurham.org/node/19/submission/1333  


## Data Visualization
1. [https://www.census.gov/data/developers/data-sets/acs-1year.html](https://www.census.gov/data/developers/data-sets/acs-1year.html)
2. [Census for Durham County](https://factfinder.census.gov/bkmk/cf/1.0/en/county/Durham%20County,%20North%20Carolina/ALL)

## Route planning options
* [https://www.routexl.com/?lang=en](https://www.routexl.com/?lang=en)
* [https://www.mapquest.com/routeplanner/narrative](https://www.mapquest.com/routeplanner/narrative)
* [https://www.speedyroute.com/](https://www.speedyroute.com/_)
* [https://www.myrouteonline.com/user-guides/google-maps-route-planner](https://www.myrouteonline.com/user-guides/google-maps-route-planner) 

## Initial project ideas
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

##  Email from Ian to Richard (July 2019)
1.    Assuming a client/volunteer application has been approved, do you tend to enter the information for that approved client/volunteer via a bulk-upload or by manually entering their data into a web form (e.g. with various fields etc.)?
a.    Assuming the answer is manual field entry, is there a bulk upload alternative available (for client / volunteer databases)?
2.    Do you tend to enter/upload data for multiple approved applicants at once (if bulk upload) / back-to-back (if manual entry)? Or do you tend to only enter one approved applicant in a single sitting as soon as they are approved? For example, if 7 applicants are approved each day of the week, do you enter each one each day or wait until the end of the week to do all 7?


##  Email from Richard to Ian (July 2019)
To your questions:

1.  We usually enter these manually. However, I believe bulk upload is possible for both databases. For our volunteer database, we can import .xls or .xlsx files. I've sent our client database folks an email to see exactly how we could upload to this system, but I believe it can be done.  
2.     For clients, we enter them one at a time, as soon as we enroll the client.  For volunteers, it varies a bit. Sometimes it might be a week's worth at once, but we definitely do one at a time in this system as well.

##  Email from Ian to Richard (July 2019)
> I had the chance to email with someone from OneEach Technologies, who created our company website. This is where our client and volunteer applications come through, and it has the ability to export excel reports. I have attached de-identified examples of these two reports. The person at OneEach told me the following when I asked about what type of database they use: “Well, our system is a proprietary config on a Drupal farm so I do not have a lot of the technical backend information for you.  **All that you would need to worry about on your end is adding content to the site. So we would manage any customizations on the site here and do not really allow any backend access.” That being said, as we discussed at the meeting, we have the ability to change forms on the site, and export reports from completed forms. We also have the ability to automate emails that include application information whenever an application is submitted. I'm curious what the response from OneEach means to you.**
> 
>As discussed at the meeting, our **client database is called ServTracker, and it is a product of Accessible Solutions**. It is an access database, and it lives on a different server than our main server. I've attached an export of de-identified service unit information which could be used for project #3. I have also attached a report that could be used for project #1.
>
>Finally, our **volunteer database is called "Meals on Wheels Scheduler"**, or "Scheduler" for short. It's made by a company called Purplewire. Here's what they said about their type of database: "The **MOW Scheduler runs on a mysql database**. However, we need to say up front that we can't give outside people or programs direct access to the database for security reasons. We have a **basic REST API** (it hasn't been publicly announced yet) for Contact data that could potentially provide an integration method for some kinds of projects, and we're interested in expanding this API to allow other types of integration in the future." I've attached a template that Scheduler provides for bulk uploading new volunteers.
>
>Let me know if you have any questions about any of this info or attachments, or if additional info is needed. I'll also talk with our senior staff on Thursday about their thoughts on these four projects.
>Thanks again for your time and work on this!

## Call between Richard and Ian (August 2019)
1. Ian does not think our approach for transferring client application data will be tractable, will probably need to shelf this without direct DB access.
2. Project for transferring volunteer application data will also not work under the excel workbook approach, however the volunteer database has apparently released API functionality for POSTing data to their database. We should discuss to see how and if we can leverage this. Link to that documentation:
    [http://support.mowscheduler.com/integration/volunteerapplication/](http://support.mowscheduler.com/integration/volunteerapplication/)
3. He wants to also put the budgetary constraint for client applications project on hold, it's become less of a priority
4. Remaining projects in scope for now: **Daily Checklist, Data Visualization, Volunteer Application Transfer (potentially)**



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
