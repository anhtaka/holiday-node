var moment = require("moment");
var NOWDATE = getNow();

var AryHoliday =[];
const url = 'https://anhtaka.github.io/holiday-node/holiday-main.json';

const https = require('https');
const req = https.request(url, (res) => {
    res.on('data', (chunk) => {
        const chunkString = chunk.toString();
        const obj = JSON.parse(chunkString);

        //AryHoliday = obj.holiday.DATA;
        for (item in obj.holiday) {
            //console.log(obj.holiday[item].DATA);
            AryHoliday.push(obj.holiday[item].DATA);
        }
        console.log(AryHoliday);
    });

    res.on('end', () => {
        console.log('JSONデータは以上です。');
    });
})
req.on('error', (e) => {
console.error(`エラーが出ました： ${e.message}`);
});
req.end();

function getNow() {
    //console.log("TEST");
    return moment().utcOffset("+09:00").format("YYYY-MM-DD");
}