var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
var num = lines[0]
if (num <= 2000) {
    console.log("Isento")
} else {
    num -= 2000;
    if (num <= 1000) {
        var result = num * 0.08;
        console.log(result.toFixed(2))
    } else{
        num -= 1000;
        result = 80;
    if (num <= 1500) {
        result += num*0.18;
        console.log(result.toFixed(2))
    }
    else{
        result+=270;
        num-=1500;
        result+=num*0.28;
        console.log(result.toFixed(2))

    }
}
}