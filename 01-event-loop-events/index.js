const fs = require("fs");
const dns = require("dns");


function info(text){
  console.log(text,performance.now().toFixed(2));
  
}

function timeStamp() {
  return performance.now().toFixed(2);
}

console.log("program start", timeStamp());
//timeouts
setTimeout(() => console.log("timeout 1", timeStamp()), 0);
setTimeout(() => {
  process.nextTick(() => console.log("next tick 3", timeStamp()));
  console.log("timeout 3 ", timeStamp());
}, 20);
setTimeout(() => console.log("timeout 2", timeStamp()), 10);
process.nextTick(() => console.log("nexttick 2"), timeStamp());

//closes
fs.writeFile("text.txt", "Hello Node.js", (err) => {
  if (!err) {
    console.log("file written", timeStamp());
  }
});

//nexttick
process.nextTick(() => console.log("next tick one", timeStamp()));

//Promises
Promise.resolve().then(() => {
  console.log("Promise one", timeStamp());
});

//setImmediate
setImmediate(() => console.log("immediate 1", timeStamp()));

//intervals

let intervalCount = 0;

const intervalId = setInterval(() => {
  console.log(`Interval ${(intervalCount += 1)}`)
  if(intervalCount === 5){
    clearInterval(intervalId)
  }
},1000);

//DNS I/O events
dns.lookup("localhost", (err, address, family) => {
  console.log("localhost dns 1", address, timeStamp());
  console.log("localhost dns 2", family, timeStamp());

  if (err) {
    console.error(err);
  }

  Promise.resolve().then(() => console.log("Promise 2"), timeStamp());
});

info("I'm function info")

console.log("program end", timeStamp());

