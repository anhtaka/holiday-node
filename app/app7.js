var request = require('sync-request');
var moment = require("moment");
var NOWDATE;
NOWDATE = getNow();
//---------
// const getUrl = 'https://anhtaka.github.io/holiday-node/holiday-main.json';
const getUrl = 'https://http-nodejs-production-fa1a.up.railway.app/holidays'
var AryHoliday =[];
var returnCode;

//exports.handler = function (event, context) {
//console.log("Start  Return Request Sync");
returnCode = httpGet(getUrl);
//console.log("Status Code (main)     : "+returnCode);
console.log(AryHoliday);
//console.log("End    Return Request Sync");



function httpGet(url){
  var response = request(
    'GET',
    url
    );
    console.log("Status Code (function) : "+response.statusCode);
    var item;
    var obj = JSON.parse(response.getBody('utf8'));
    for (item in obj) {
      AryHoliday.push(obj[item].DATA);
    }
    console.log("AryHoliday="+AryHoliday);
    return response.statusCode;
}

function getNow() {
  //console.log("TEST");
  return moment().utcOffset("+09:00");
}