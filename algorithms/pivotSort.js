const partition = (arr) => {
    let pivi = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[pivi]){
            console.log("move this value backward: " + arr[i]);
            for(let j = i; j > pivi; j--){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            pivi++;
            console.log(arr);
        }  
    }
    console.log("pivot value: " + arr[pivi]);

    return arr;
}

//should return [4,2,3,5,9,5]
console.log(partition([5,4,9,2,5,3]));
//should return [4,7]
// console.log(partition([7,4]));
//should return [2,1,3,4,5]
// console.log(partition([3,5,1,2,4]));

// console.log(partition([7,2,10,15,1]));