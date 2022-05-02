var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var alcool=0;
var diesel =0;
var gasolina=0;
for(var i=0; i< lines.length; i++){
    if(lines[i] == 4){
        break;
    }
    if(lines[i] == 3){
        diesel++;
    }
    if(lines[i] == 2){
        gasolina++;
    }
    if(lines[i] == 1){
        alcool++;
    }
}
console.log("MUITO OBRIGADO\n"+"Alcool: "+alcool+"\nGasolina: "+gasolina+"\nDiesel: "+diesel);