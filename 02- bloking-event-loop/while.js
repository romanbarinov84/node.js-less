let isRunning = true;

setTimeout(() => {
    isRunning = false;
}, 0);

process.nextTick(() => {
    console.log('nextTick');
});

while (isRunning) {
    console.log('While loop is running ...', performance.now().toFixed(2));
}
