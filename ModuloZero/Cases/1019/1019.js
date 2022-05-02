var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var seconds = lines[0];
var hours = seconds / 3600;
var rest = seconds % 3600;
var minutes = rest / 60;
var seconds = rest % 60;
console.log(parseInt(hours)+" : "+parseInt(minutes)+" : "+parseInt(seconds))