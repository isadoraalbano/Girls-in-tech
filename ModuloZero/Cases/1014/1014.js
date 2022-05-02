var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
var x = Number(lines[0]);
var y = Number(lines[1]);
var consumption = x/y;
console.log(consumption.toFixed(3)+" km/l")