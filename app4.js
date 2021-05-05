const https = require('https')
let url = 'https://anhtaka.github.io/holiday-node/holiday-main.json';
const AryHoliday = [];

 function f() {
    //let promise = new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
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
    //return Promise.resolve(1);
    //});
    //let result = await promise;
    return 1;
}
  
  f(); // 1

  console.log("tedt1");