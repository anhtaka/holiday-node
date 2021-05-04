var request = require('sync-request');
const getUrl = 'https://anhtaka.github.io/holiday-node/holiday-main.json';
var AryHoliday =[];
var returnCode;


console.log("Start  Return Request Sync");
returnCode = httpGet(getUrl);
console.log("Status Code (main)     : "+returnCode);
console.log(AryHoliday);
console.log("End    Return Request Sync");

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