var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(" ");
var a = Number(lines[0]);
var b = Number(lines[1]);
var c = Number(lines[2]);
var areaTrianguloRetangulo = ((a * c) / 2).toFixed(3);
var areaCirculo = (3.14159 * Math.pow(c, 2)).toFixed(3);
var areaTrapezio = ((a + b) / 2 * c).toFixed(3);
var areaQuadrado = (Math.pow(b, 2)).toFixed(3);
var areaRetangulo = (a * b).toFixed(3)
console.log("TRIANGULO: "+areaTrianguloRetangulo+"\nCIRCULO: "
+areaCirculo+"\nTRAPEZIO: "+areaTrapezio+"\nQUADRADO: "+areaQuadrado+
"\nRETANGULO: "+areaRetangulo)