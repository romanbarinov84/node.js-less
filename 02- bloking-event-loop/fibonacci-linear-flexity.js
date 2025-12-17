function info(text) {
    console.log(text, performance.now().toFixed(2));
}

info('program start');

setTimeout(() => info('timeout'), 0);

function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum;

    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}

console.log(fib(1000));

info('program end');
