const fs = require("fs");
const dns = require("dns");

function timeStamp() {
  return performance.now().toFixed(2);
}

console.log("program start", timeStamp());
//timeouts
setTimeout(() => console.log("timeout 1", timeStamp()), 0);
setTimeout(() => {
  process.nextTick(() => console.log("next tick 3", timeStamp()));
  console.log("timeout 3 ", timeStamp());
}, 2000);
setTimeout(() => console.log("timeout 2", timeStamp()), 10);


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

//DNS I/O events
dns.lookup("localhost", (err,address,family) => {
   console.log("localhost dns 1", address , timeStamp());
   console.log("localhost dns 2", family , timeStamp());

   if(err){
    console.error(err)
   }
   
})


console.log("program end", timeStamp());
