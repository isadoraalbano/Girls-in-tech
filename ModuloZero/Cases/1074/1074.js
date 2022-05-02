var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split("\n");
cont = lines[0]
for (var i = 1; i <= cont; i++) {
    if (lines[i] > 0 && lines[i] % 2 == 0) {
        console.log("EVEN POSITIVE")
    }else if (lines[i] > 0 && lines[i] % 2 != 0){
        console.log("ODD POSITIVE")
    } else if(lines[i] < 0 && lines[i] % 2 == 0){
        console.log("EVEN NEGATIVE")
    }else if(lines[i] < 0 && lines[i] % 2 != 0){
        console.log("ODD NEGATIVE")
    }else{
        console.log("NULL")
    }
}

