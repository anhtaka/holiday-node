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
    var item;
    var obj = JSON.parse(response.getBody('utf8'));
    for (item in obj.holiday) {
        AryHoliday.push(obj.holiday[item].DATA);
    }
    console.log("AryHoliday="+AryHoliday);
    return response.statusCode;
}
/*  input:yyyy-mm-dd  */
function chkHolidayHoliday(valueDate) {
  var hFlg = 0;
  //holiday検索
  var a = AryHoliday.indexOf(valueDate.format('YYYY-MM-DD'));
  if(a == -1){
      //check week
      switch (valueDate.format('dddd')) {
          case 'Monday':
          case 'Tuesday':
          case 'Wednesday':
          case 'Thursday':
          case 'Friday':
              hFlg =  0; 
              break;
          case 'Saturday':
          case 'Sunday':
              hFlg = 1;
              break;
      }
  }else{
      hFlg = 1; //holiday
  }
  return hFlg
}
function getNow() {
  //console.log("TEST");
  return moment().utcOffset("+09:00");
}