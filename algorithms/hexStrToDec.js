const hexStrToDec = (str) => {
    let sum = 0;
    let baseNum = 1;
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] === 'A'){
            sum += baseNum10;
        }
        else if(str[i] === 'B'){
            sum += baseNum11;
        }
        else if(str[i] === 'C'){
            sum += baseNum12;
        }
        else if(str[i] === 'D'){
            sum += baseNum13;
        }
        else if(str[i] === 'E'){
            sum += baseNum14;
        }
        else if(str[i] === 'F'){
            sum += baseNum15;
        }
        else {
            sum += baseNum * parseInt(str[i]);
            // console.log(str[i]);
        }
        baseNum *= 16;
    }
    return sum;
}