var request = require('sync-request');
var moment = require("moment");
var NOWDATE;
NOWDATE = getNow();
//---------
const getUrl = 'https://anhtaka.github.io/holiday-node/holiday-main.json';
var AryHoliday =[];
var returnCode;

//exports.handler = function (event, context) {
console.log("Start  Return Request Sync");
returnCode = httpGet(getUrl);
console.log("Status Code (main)     : "+returnCode);
console.log(AryHoliday);
console.log("End    Return Request Sync");

if (chkHolidayHoliday(NOWDATE) === 1) {
  console.log("holiday");
}else{
  console.log("work"); 
}
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
function chkHolidayHoliday(valueDate) {
  var flg = 0;
　console.log('dddd'+ valueDate.format('dddd'));
  switch (valueDate.format('dddd')) {
      case 'Monday':
      case 'Tuesday':
      case 'Wednesday':
      case 'Thursday':
      case 'Friday':
        console.log(valueDate.format('YYYY-MM-DD'));
          //holiday検索
        var a = AryHoliday.indexOf(valueDate.format('YYYY-MM-DD'));
        console.log("a=" + a);
        if(a == -1){
          flg =  0;
        }else{
          flg = 1; //holiday
        }
        
        break;
      case 'Saturday':
      case 'Sunday':
        flg = 1;
        break;
  }
  console 
  return flg
}
function getNow() {
  //console.log("TEST");
  return moment().utcOffset("+09:00");
}