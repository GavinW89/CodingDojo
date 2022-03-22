const unionSorted = (arrLeft, arrRight) => {
    var union = [];
    var iLeft =  0;
    var iRight = 0;

    while(iLeft <= arrLeft.length - 1){
        if(arrLeft[iLeft] === arrRight[iRight]){
            union.push(arrLeft[iLeft])
            iLeft++;
            iRight++;
        }else if(arrLeft[iLeft] >  arrRight[iRight]){
            union.push(arrRight[iRight]);
            iRight++;
        }else{
            // console.log(`left i:${iLeft}, right i:${iRight}`);
            union.push(arrLeft[iLeft]);
            iLeft++;
        }
    }
    while(iRight <= arrRight.length - 1){
        union.push(arrRight[iRight]);
        ++iRight;
    }
    return union;
}

console.log(unionSorted([2,4,7,9,10,13,17,22],[2,3,5,7,9,10]));
console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7]));
console.log(unionSorted([1,5,9],[2,6,10,15,24,36]));