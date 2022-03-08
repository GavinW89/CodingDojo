//Highlight and run each code individually!
//Print all odd numbers till 20 using "for" loop
for(var i=1; i<=20; i++) {
    if(i % 2 !== 0)
    console.log(i);
}

//Print all odd numbers till 20 using "while" loop
function allOdd(){
    var i = 1;
    while( i <=20 ) {
        if(i % 2 !== 0)
        console.log(i);
        i++;
    }
}
allOdd()

//Print all values that are evenly divisible by 3 counting down from 100 - 0
for(var i=100; i>=3; i--) {
    if(i % 3 === 0)
    console.log(i);
}

//Print all values that are evenly divisible by 3 counting down from 100 - 0 with "while" loop
function divideThree() {
    var i = 100
    while( i >= 3) {
        console.log(i)
        i--;
    }
}
divideThree()

//Print the sequence [4, 2.5, 1, -0.5, -2, -3.5] using "for" loop
var array = [4, 2.5, 1, -0.5, -2, -3.5];
for(i=0; i<array.length; i++) {
    console.log(array[i]);
}

//Print the sequence [4, 2.5, 1, -0.5, -2, -3.5] using "while" loop
function sequencePrint(array) {
    var i = 0;
    while(i < array.length) {
        console.log(array[i])
        i++;
    }
}
sequencePrint([4, 2.5, 1, -0.5, -2, -3.5]);

//Print sum of all all numbers 1 - 100
var sum = 0;
for(i=1; i<=100; i++){
    sum += i;
}
console.log(sum)

//Print sum of all numbers 1 - 100 using "while" loop
var sum = 0;
var i = 1;
while(i <= 100){
    sum += i
    i ++
}
console.log(sum)

//Print product of all numbers 1-12
var product = 1
for(i=1; i<=12; i++) {
    product *= i;
}
console.log(product);

//Print product of all numbers 1-12 using "while" loop
var product = 1;
var i = 1;
while(i<=12) {
    product *= i
    i++;
}
console.log(product)