//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common
//This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    let newArray=[];
    for(i=0; i<arrLeft.length; i++){
        for(j=0; j< arrRight.length; j++){
            if(arrLeft[i] === arrRight[j]){
                newArray.push(arrLeft[i]);
                arrRight.splice(j,1)
                break
            }
        }
    }
    return newArray
}

// console.log(intersect([2,4,7,9,10],[2,2,3,5,7,9,10]));
// console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
// console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
// console.log(intersect([],[]))

//ITERATION THREE : Going up
// const intersectUp = (arrLeft,arrRight) => {
//     var intersection = []
//     var runner =  0;
//     var runnerTwo = 0;

//     while(runner <= arrLeft.length - 1){
//         if(arrLeft[runner] === arrRight[runnerTwo]){
//             intersection.push(arrLeft[runner])
//             runner++;
//             runnerTwo++;
//         }else if(arrLeft[runner] >  arrRight[runnerTwo]){
//             runnerTwo++;
//         }else{
//             runner++;
//         }
//     }
//     return intersection;
// }

// console.log(intersectUp([2,4,7,9,10],[2,2,3,5,7,9,10]));
// console.log(intersectUp([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersectUp([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersectUp([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
// console.log(intersectUp([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
console.log(intersectUp([1,2,3,4],[50,51,51,53]));
