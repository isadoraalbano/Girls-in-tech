var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(' ');
var a = Number(lines[0])
var b = Number(lines[1])
var c = Number(lines[2])

if (a + b > c && b + c > a && a + c > b){
    var perimetro = a+b+c;
    console.log("Perimetro = "+perimetro.toFixed(1))
} else{
    var area = (a+b)/2*c;
    console.log("Area = "+area.toFixed(1))
}