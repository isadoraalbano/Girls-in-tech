var input = require('fs').readFileSync('./stdin', 'utf8');

var lines = input.split(/\r\n| /);
var points = lines.toString().split(/,+/);

var x1 = points[0];
var y1 = points[1];
var x2 = points[2];
var y2 = points[3]


var square = Math.pow((x2 - x1),2) + Math.pow((y2-y1),2);
var result = Math.sqrt(square)
console.log(result.toFixed(4))