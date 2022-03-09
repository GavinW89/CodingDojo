const combine = (leftArr, rightArr) => {
    let ar3 = []

    let l1 = leftArr.length - 1

    let l2 = rightArr.length - 1

    let i = j = k = 0

    while (i <= l1 && j <= l2) {
        if (leftArr[i] >= rightArr[j]) {
            ar3.push(rightArr[j++])

        } else {
            ar3.push(leftArr[i++])

        }
    }

    while (i <= l1) {
        ar3.push(leftArr[i]);
        i++;
    }

    while (j <= l2) {
        ar3.push(rightArr[j++]);
    }

    return ar3;
}

const mergeSort = (arr) => {
    console.log(arr);
    if(arr.length <= 1) return arr;

    let leftArr = arr.slice(0, Math.floor(arr.length/2));
    let rightArr = arr.slice(Math.floor(arr.length/2));

    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    arr = combine(leftArr,rightArr);
    console.log(`combined: ${arr}`);
    return arr;
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));