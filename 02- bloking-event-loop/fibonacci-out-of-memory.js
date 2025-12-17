const fs = require("fs");
let isRunning = true;

setTimeout(() => {
  isRunning = false;
  console.log("isRunning:false");
}, 10);

process.nextTick(() => {
  console.log("nextTick");
});

function setImmediatePromise() {
    return new Promise ((resolve , reject) => {
        setImmediate(() => resolve())
    })
}

async function whileLoop() {
    while(isRunning){
        console.log("while loop is Running ...");
        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log("while loop ended")
)