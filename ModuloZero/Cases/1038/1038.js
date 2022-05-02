var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(' ');
var products =[
    {cod: 1, category: "Cachorro Quente", price: 4.00},
    {cod: 2, category: "X-salada", price: 4.50},
    {cod: 3, category: "X-bacon", price: 5.00},
    {cod: 4, category: "Torrada simples", price: 2.00},
    {cod: 5, category: "refrigerante", price: 1.50},
];
var item = lines[0];
var quant = lines[1];
var result = products[item - 1].price * quant;
result = parseFloat(result).toFixed(2)
console.log("Total: R$ "+result)