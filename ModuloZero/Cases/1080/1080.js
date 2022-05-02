var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
var ant = 0;
var prox = 0;
var maior =0;
var posicao=0;
for(var i=0; i< lines.length; i++){
ant = prox;
prox = i;
if(Number(lines[ant]) > Number(lines[prox])){
maior = lines[ant];
posicao = ant+1
}else{
maior = Number(lines[prox])
posicao = prox+1
}
}
console.log(maior+"\n"+posicao)