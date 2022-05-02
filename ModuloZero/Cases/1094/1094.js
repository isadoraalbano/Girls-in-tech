var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(/\r\n/);
var coelhos = 0;
var sapos = 0;
var ratos = 0;
var total = 0;
for (var i = 1; i <= lines[0]; i++) {
    var coibaia = lines[i].toString().split(' ');
    total += Number(coibaia[0]);
    if (coibaia[1] == "C") {
        coelhos += Number(coibaia[0]);
    }
    if (coibaia[1] == "R") {
        ratos += Number(coibaia[0]);
    }
    if (coibaia[1] == "S") {
        sapos += Number(coibaia[0]);
    }
}
var totalC = ((coelhos * 100) / total).toFixed(2);
var totalR = ((ratos * 100) / total).toFixed(2);
var totalS = ((sapos * 100) / total).toFixed(2);
console.log("Total: " + total + " cobaias\nTotal de coelhos: " + coelhos +
    "\nTotal de ratos: " + ratos + "\nTotal de sapos: " + sapos + "\nPercentual de coelhos: "
    + totalC + "%\nPercentual de ratos: " + totalR + "%\nPercentual de sapos: " + totalS + "%")