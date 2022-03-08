function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var mindex = i;

        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[mindex]){
                mindex = j
            }
        }
        var temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp
    }
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]))