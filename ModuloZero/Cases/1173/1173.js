var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(" ");
var num = Number(lines[0])
var array = [num]
for(var i=0; i<=10; i++){
    array.push(num*2);
    num = num *2
    console.log("N["+i+"] = "+array[i])
}