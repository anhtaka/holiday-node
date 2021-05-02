var moment = require("moment");

// 現在時刻を取得する例
console.log(moment().format()); // 2014-07-16T09:00:00+09:00 (default)
console.log(moment().format("YYYY-MM-DD"));          // 2014-07-17

const url = 'https://anhtaka.github.io/holiday-node/holiday-main.json';

const https = require('https');
const req = https.request(url, (res) => {
    res.on('data', (chunk) => {
        const chunkString = chunk.toString();
        const obj = JSON.parse(chunkString);
        for (item in obj.holiday) {
            console.log(obj.holiday[item].DATA);
        }
    });
    res.on('end', () => {
        console.log('JSONデータは以上です。');
    });
})
req.on('error', (e) => {
  console.error(`エラーが出ました： ${e.message}`);
});

req.end();