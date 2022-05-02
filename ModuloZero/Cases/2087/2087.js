var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
    var prev = 1;
    var next = 1;
    var fib = 0;
    var array = [prev, next];
    var num = lines[0]
    for (var x = 0; x < num-2; x++) {
        fib = prev + next;
        array.unshift(fib)
        prev = next;
        next = fib;
    }
    console.log(array.toString().split(",").join(" "))

