var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
var nome = lines[0];
var salario = Number(lines[1]);
var totalDeVendas= Number(lines[2])
var comissao = totalDeVendas* 0.15;
var totalComComissao = salario+comissao;
console.log("TOTAL = R$ "+totalComComissao.toFixed(2))