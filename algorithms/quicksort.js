const partition = (arr, left, right) => {
    let pivot = arr[left];
    let pointer = left;

    for(let i = left; i <= right; ++i){
        if(arr[i] < pivot){
            ++pointer;
            [arr[i], arr[pointer]] = [arr[pointer],arr[i]];
        }
    }
    [arr[left], arr[pointer]] = [arr[pointer],arr[left]];
    return pointer;
}

const quickSort = (arr) => {
    const internalQS = (arr, left, right) => {
        if(right - left <= 1) return;
        let pivi = partition(arr, left, right);
        internalQS(arr, left, pivi - 1);
        internalQS(arr, pivi + 1, right);
    }
    return internalQS(arr, 0 , arr.length - 1);
}

let testArr = [6,2,10,23,-18,0,4,3,11,6];
// console.log(partition(testArr, 0, testArr.length));
quickSort(testArr);
console.log(testArr);
