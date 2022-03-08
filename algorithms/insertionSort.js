//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {
    // for loop through length of arr
    //set i to 0; i <= arr.length-1; i++
    // conditional whether i i sless than i = 1 (if not then swap i w/ i+1)
    // return arr
    console.log(arr)
    for(let i= 1; i< arr.length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                console.log(arr)
            }
        }
    }
    return arr
}



console.log(insertionSort([6,4,5,2,8,14,1,3]));