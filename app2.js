

var AryHoliday =[];
const url = 'https://anhtaka.github.io/holiday-node/holiday-main.json';

console.error(`開始`);
const https = require('https');
httpsGet();
console.error(`完了`);

 function httpsGet() {
    return new Promise(async (resolve, reject) => {

        const req = await https.request(url, (res) => {
            res.on('data', (chunk) => {
                console.log('処理中');
            });
        })
        req.end();
    });

}
