

var AryHoliday =[];
const url = 'https://anhtaka.github.io/holiday-node/holiday-main.json';

console.error(`開始`);
const https = require('https');


https.get(url, (res) => { // <- this is a function that is called when there's a response. Waiting for a response is as easy as writing code inside this function (or use async await)
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => { //this is a function attached to the response's 'data' event. it's called every time a chunk of data arrives. (multiple times per request)
    process.stdout.write(d);
  });

}).on('error', (e) => { //the https.get function returns a request that can emit an error event. this is an eventlistener for that. try an invalid url to test this branch of your code
  console.error(e);
});
console.error(`開始1`);