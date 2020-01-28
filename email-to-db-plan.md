# Volunteer Application to Database Project Outline

### Background
MoW receives emails from their web server when a volunteer fills out an application. This data has to then be input again by hand to their volunteer database.

### Goal
Automate the process so that the volunteer application information can go directly to the database, bypassing the tedious manual task.

### Approach
The information from the volunteer application in the email can be parsed and then sent via a POST request to their MOW scheduler system.

For example:

After a volunteer hits submit on their form, MoW receives following email:

```
==INFORMATION ABOUT YOU==
First name: Timmy
Last name: Turner  
Street address: 123 City Drive
City: Cary
State: North Carolina
```
As well as many more fields.

The body of the email can be parsed to pull out the volunteer's information and stored in an dictionary-like object.

```javascript
data:{
    fname: 'Timmy',
    lname: 'Turner',
    street: '123 City Drive',
    city: 'Cary',
    state: 'North Carolina',
}
```
A key-pair object can be passed as the payload to a POST request to the server.
MoW has 2 pages with details, though they appear to be contradictory regarding field names.

*  [Field Reference](http://support.mowscheduler.com/integration/volunteerapplication/fieldreference)
*  [REST API guide](http://support.mowscheduler.com/integration/rest)


### Implementation
Using Google Apps Script, a trigger can be set up to run every _x_ minutes. This is convenient because Google is doing all of the work for running the script on a routine basis.
Google Apps Script has support for Gmail, so if there is a dummy Gmail account that can receive the approved volunteer emails, the script can look through the dummy emails account.

Right now there is a simple method of looking for fields. Using `indexOf('Field name')` can give the index in the string for a given field. For example, `indexOf('Street address:')` would give the index of where "Street address" starts. If you add the length of "Street address" onto that index, you now have the index of the field. 

Next, take the `indexOf('\n', {start index of word})` starting after the index found previously. A slice/substring from the first index to the second index will be what the volunteer entered for the field.

Gather all of the fields and put them in a key-value pair dict/object.

Google Apps Script also has support for post requests using `UrlFetchApp(url, params)`. This is where the endpoint and API key need to be known.

To make it easier, the dummy Gmail account can setup a filter to label incoming emails from certain accounts or domains. There is a way for the script to pull all threads with a given label. This may be overkill, because chances are that no one else is emailing this account, so going by unread may be enough. Another alternative would be to check if `==INFORMATION ABOUT YOU==` (or another identifier) is in the email.

After going through the unread emails, it would mark all of the processed ones as read. There could even be another check using the time by looking at the email receive time and how it compares to the current time. 



### Minor requests and questions for Ian
1. Change the date field, phone number, and email field on the form to be more specific or restricted
  * Date acceptable formats:
     * mm/dd/yyyy
     * yyyy-mm-dd
  * Phone number acceptable formats:
     * (111) 111-1111
     * 111-111-1111
     * 1111111111
     * +1 (111) 111-1111
     * 1 (111) 111-1111
     * 1 111 111-1111
2. We need an API key to actually test. There is a test mode flag that prevents a contact from actually being generated.
	