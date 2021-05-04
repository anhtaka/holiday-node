var request = require('sync-request');
var moment = require("moment");

const getUrl = 'https://anhtaka.github.io/holiday-node/holiday-main.json';
var AryHoliday =[];
var returnCode;

//exports.handler = function (event, context) {
console.log("Start  Return Request Sync");
returnCode = httpGet(getUrl);
console.log("Status Code (main)     : "+returnCode);
console.log(AryHoliday);
console.log("End    Return Request Sync");


//}

function httpGet(url){
  var response = request(
    'GET',
    url
    );
    console.log("Status Code (function) : "+response.statusCode);

    var obj = JSON.parse(response.getBody('utf8'));
    for (item in obj.holiday) {
        AryHoliday.push(obj.holiday[item].DATA);
    }
    return response.statusCode;
}
/*  input:yyyy-mm-dd  */
function checkweekMonFriHolidayHoliday(value) {
  var flg = 0;
  switch (value) {
      case 'Monday':
      case 'Tuesday':
      case 'Wednesday':
      case 'Thursday':
      case 'Friday':
          //console.log("checkweekMonFri = Mon-Fri");
          return 1;
      case 'Saturday':
      case 'Sunday':
          //console.log("checkweekMonFri = Sat-Sun");
          return 0;
  }
}