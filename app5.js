var request = require('sync-request');
var requestT = require('then-request');
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
console.log("AryHoliday="+AryHoliday);
console.log("End    Return Request Sync");

//}

function httpGet(url){
    requestT('GET', url).done(function (res) {
      //console.log("res="+res.getBody());
      var item;
      var obj = JSON.parse(res.getBody());
      for (item in obj.holiday) {
          AryHoliday.push(obj.holiday[item].DATA);
      }  
      console.log("AryHoliday1="+AryHoliday);
    });
    
}

function getNow() {
    //console.log("TEST");
    return moment().utcOffset("+09:00");
  }