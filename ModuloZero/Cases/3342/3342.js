var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
var num = Number(lines)
var brancas = 0;
var pretas = 0;
var quant = num * num;
for (var i = 0; i < quant; i++) {
    if (i % 2 === 0) {
        brancas++;
    }else{
        pretas++;
}
}
console.log(brancas+" casas brancas e "+pretas+" casas pretas")