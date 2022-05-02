var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
for(var i= 0; i < lines.length; i++){
    var position = lines[i].toString().split(' ');
    if(Number(position[0]) == Number(position[1])){
        break
    }
    if(Number(position[0]) > Number(position[1])){
         console.log("Decrescente");
    }else{
        console.log("Crescente");
    }
}