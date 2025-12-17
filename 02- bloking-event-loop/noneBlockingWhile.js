const fs = require('fs');
const dns = require('dns');

let isRunning = true;

setTimeout(() => {
    isRunning = false;
}, 10);

process.nextTick(() => {
    console.log('nextTick', performance.now().toFixed(2));
});

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running ...', performance.now().toFixed(2));
        await setImmediatePromise();
    }
}

whileLoop().then(() =>
    console.log('while loop ended', performance.now().toFixed(2))
);
