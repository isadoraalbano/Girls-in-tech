var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");

for (var i = 1; i <= lines[0]; i++) {
    var prev = 0;
    var next = 1;
    var fib = 0;
    var num = Number(lines[i]);
    for (var x = 1; x < num; x++) {
        fib = prev + next;
        prev = next;
        next = fib;
    }
    console.log("Fib("+num+") = "+fib)

}
