var sampleBody = '==INFORMATION ABOUT YOU==\n\
First name: Timmy\n\
Last name: Turner\n\
Street address: 123 City Drive\n\
City: Cary\n\
State: North Carolina\n\
Zip code: 27519\n\
Email address (if any): timmy@gmail.com\n\
Phone number (home or cell): 9194443333\n\
Phone number (work):\n\
Employer (if retired, former employer): Costco\n\
Date of birth (optional, month/date):\n\
Are you (the volunteer) under 18 years of age? No\n\
How did you hear about us? Just Serve\n\
==DRIVER\'S LICENSE AND VEHICLE INFORMATION==\n\
Driver’s license number: 12345678\n\
State issued: North Carolina\n\
Expiration date: 3/13/2024\n\
Vehicle insurance company: Allstate\n\
Policy number: 12345678\n\
Expiration date: 12/16/18\n\
==EMERGENCY CONTACT INFORMATION==\n\
First name: Harry\n\
Last name: Potter\n\
Relationship to you: Spouse\n\
Phone number: 919333444\n\
==OTHER INFORMATION==\n\
Do you belong to a club, group, or civic organization? No\n\
Do you belong to a local house of worship? Yes\n\
If yes, please provide name: Hogwarts School\n\
Is your volunteer interest in order to fulfill community service\n\
hours? : No\n\
Have you ever been convicted of a felony or misdemeanor\n\
classified as an offense against a person or family? : No\n\
==AGREEMENTS==\n\
STATEMENT OF LIABILITY: Timmy Turner\n\
CONFIDENTIALITY STATEMENT: Timmy Turner\n\
BACKGROUND CHECK ACCEPTANCE: Timmy Turner\n\
==Title VI COMPLIANCE==\n\
==Meals on Wheels of Durham Title VI Compliance==\n\
Title VI Compliance Signature: Timmy Turner\n\
Title VI Compliance Date: Wed, 06/20/2018'

var mow_label = "mow"
var user_email = '****@***.com'

function searchForNewEmails(){
  var now = new Date();
  // Must set up filter to automatically apply this label
  var label = GmailApp.getUserLabelByName(mow_label);
  var threads = label.getThreads();
  
  for (var i=0; i<threads.length; i++){
    var t = threads[i];
    var messages = t.getMessages();
      for(var j=0; j<messages.length;j++){
        var m = messages[j];
        //If this script responds to emails, this will ignore the emails it sends
        if (m.getFrom() == user_email){
          continue;
        }
        
        //May want to check only messages that are received within the last hour or two.
        var message_date = m.getDate();
        var diffTime = Math.abs(now - message_date);
        var diffMinutes = Math.ceil(diffTime / (1000 * 60)); 
        
        var payload = pullDataFromEmailBody(m.getPlainBody());
        post(payload);
      }
  }
}

/**
 * Creates two time-driven triggers that trigger nothing right now.
 */
function createTimeDrivenTriggers() {
  // Trigger every 6 hours.
  ScriptApp.newTrigger('searchForNewEmails')
      .timeBased()
      .everyMinutes(5)
      .create();
}

//First string is used to find the data in the email, 
//Second string is the API Field Name for the key-pair object in the POST request.
var firstName = ["First name:", 'First_Name'];
var lastName = ["Last name:", "Last_Name"];
var streetAddress = ["Street address:","Street"];
var city = ["City:", "City"];
var state = ["State:", "State_Province"];
var zipCode = ["Zip code:", "Postal_Code"];

var emailAddress = ["Email address (if any):", "Email"];
var phoneNumberHomeOrCell = ["Phone number (home or cell):", "Home_Phone"];
var phoneNumberWork = ["Phone number (work):", "Work_Phone"];
var employer = ["Employer (if retired, former employer):", "Company"];
var dateOfBirth = ["Date of birth (optional, month/date):", "Birthday"];
var under18YearsOfAge = ["Are you (the volunteer) under 18 years of age?", "X-Under 18"];

var howDidYouHearAboutUs = ["How did you hear about us?", "X-How did you hear about us"];
var driversLicenseNumber = ["Driver’s license number:", "Drivers_Info"];
var stateIssued = ["State issued:", "X-State Issued Drivers License"];
var expirationDate = ["Expiration date:", "License_Expiration"];
var vehicleInsuranceCompany = ["Vehicle insurance company:", "Insurance_Info"];

var policyNumber = ["Policy number:", "Insurance_Info"];
var expirationDate = ["Expiration date:", "Insurance_Expiration"];

var emergencyFirstName = ["First name:", "X-Emergency Contact First Name"];
var emergencyLastName = ["Last name:", "X-Emergency Contact Last Name"];
var emergencyRelationship = ["Relationship to you:", "X-Emergency Contact-Volunteer Relationship"];
var emergencyPhoneNumber = ["Phone number:", "X-Emergency Contact Phone Number"];
var belongToAClubGroupOrCivicOrganization = ['Do you belong to a club, group, or civic organization?', "X-Belong to a club, group, or civic organization"];
var belongToALocalHouseOfWorship = ['Do you belong to a local house of worship?', "X-Belong to a local house of worship"];
var ifYesPleaseProvideName = ['If yes, please provide name:', "X-Name of local house of worship"];
var interestInCommunityService = ['hours? :', "X-Volunteering to fulfill community hours"];
var convicted = ['offense against a person or family? :', "X-Convicted of felony or misdemeanor"];

var statementOfLiability = ['STATEMENT OF LIABILITY:', "X-Agreement to statement of liability"];
var confidentialityStatement = ['CONFIDENTIALITY STATEMENT:', "X-Agreement to confidentiality statement"];
var backgroundCheckAcceptance = ['BACKGROUND CHECK ACCEPTANCE:', "X-Background check acceptance"];
var complianceSignature = ['Title VI Compliance Signature:', "X-Title VI Compliance Signature"];
var titleVIComplianceDate = ['Title VI Compliance Date:', 'X-Title VI Compliance Date'];
//Iterate through this to find the data and add a key-pair to the 
var fields = [firstName,
              lastName,
              streetAddress,
              city,
              state,
              zipCode,
              emailAddress,
              phoneNumberHomeOrCell,
              phoneNumberWork,
              employer,
              dateOfBirth,
              under18YearsOfAge,
              howDidYouHearAboutUs,
              driversLicenseNumber,
              stateIssued,
              expirationDate,
              vehicleInsuranceCompany,
              policyNumber,
              expirationDate,
              emergencyFirstName,
              emergencyLastName,
              emergencyRelationship,
              emergencyPhoneNumber,
              belongToAClubGroupOrCivicOrganization,
              belongToALocalHouseOfWorship,
              ifYesPleaseProvideName,
              interestInCommunityService,
              convicted,
              statementOfLiability,
              confidentialityStatement,
              backgroundCheckAcceptance,
              complianceSignature,
              titleVIComplianceDate];

//pass message.plainBody() as parameter
function pullDataFromEmailBody(body) {
  
  var payload = {};

  var log_check = ''; //will log results to debug
  var start_index = 0;
  var end_index, field;
  
  //Go through each field
  for (var i=0; i<fields.length;i++){
    var search_field = fields[i][0];
    var payload_key = fields[i][1];
    
    
    //Because there are two fields for 'First name' and 'Last name', checking if i
    // is greater than 5 ensures that this condition only holds for the second grouping
    if((search_field.indexOf('First') !== -1 || search_field.indexOf('Last') !== -1) && (i > 5)){
        start_index = body.lastIndexOf(search_field) + search_field.length;
        end_index = body.indexOf('\n',start_index);
    }
    else{
      start_index = body.indexOf(search_field) + search_field.length;
      end_index = body.indexOf('\n',start_index);
    }
    
    //todo: validation for email, phone numbers, and dates
    
    //Policy number and Vehicle Insurance Company share a key, 
    //so append policy number onto insurance company
    if (search_field === policyNumber){
      payload[payload_key] = payload[payload_key] + ' ' + body.slice(start_index, end_index).trim();
    }else{
      payload[payload_key] = body.slice(start_index, end_index).trim();
    }
    
    log_check += payload_key + ":" + body.slice(start_index, end_index).trim()+'\n';
  }
  
  //log results for debugging purposes
  console.log(log_check);
  return payload;
}


//make post request to specified url

var test_url = 'https://httpbin.org/post';
function post(payload){
  
  var options = {
    'method' : 'post',
    'payload' : payload,
    'headers':{
      'X-API':'something'//need from Ian
    }
  };
  //log whatever is sent back
  console.log(UrlFetchApp.fetch(test_url, options));
}



