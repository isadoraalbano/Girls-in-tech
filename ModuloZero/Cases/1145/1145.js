var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(" ");
var num = lines[1];
var quant = lines[0];
var cont = 0
var array = []
for (var i = 1; i <= num; i++) {
    if (cont < quant) {
        array.push(i);
        cont++;
    }
    if (cont == quant) {
        console.log(array.toString().split(",").join(' '))
        cont = 0;
        array = []
    }

}