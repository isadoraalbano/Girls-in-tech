var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
var num = lines[0];
for(var i = 1; i <=10;i++){
    var result = num*i;
    console.log(i+" x "+num+" = "+result)
}
