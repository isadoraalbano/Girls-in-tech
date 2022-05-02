var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(" ");
var quant = lines[0];
var num = 4*quant;
var cont = 0
var array = []
for(var i=1; i<= num; i++){
    if(cont < 3){
        array.push(i);
        cont++;
    }
    if(cont == 3){
        console.log(array.toString().split(",").join(' ')+" PUM")
        cont =0;
        array = []
        i= i+1
    }

}
