var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(/\n/);
var tamanhosTitas = lines[1].split(" ").toString();
var tamanhoMuralha = Number(lines[0].split(" ")[1])
var quantidadeTitas = Number(lines[0].split(" ")[0])
var titaP = Number(lines[2].split(" ")[0]);
var titaM = Number(lines[2].split(" ")[1]);
var titaG = Number(lines[2].split(" ")[2]);
var totalMuralhas = 1;
var cont = 0;
for (i = 0; i < quantidadeTitas; i++) {
    if (tamanhosTitas.charAt(i) == "P") {
        cont += titaP;
    }
    else if (tamanhosTitas.charAt(i) == "M") {
        cont += titaM;
    }
    else {
        cont += titaG;
    }
}
if (cont % tamanhoMuralha == 0) {
    totalMuralhas = parseInt(cont / tamanhoMuralha);
} else {
    totalMuralhas = parseInt((cont / tamanhoMuralha) + 1)
}
console.log(totalMuralhas)