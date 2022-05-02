var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
for(var i =1; i <= lines[0];i++){
var cube = Math.pow(i, 3);
var square = Math.pow(i,2);
console.log(i+" "+square+" "+cube)
}