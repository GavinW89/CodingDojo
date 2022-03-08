// Bubble Sort: run through the array and look at two adjacent values at a time
///swap the two adjacent values if the greater one comes first
// loop through the array many times until there is a perfect run with no swaps

function bubbleSort(arr) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i <= arr.length - 2; i++) {
            if (arr[i] > arr[i+1]) {
                swapped = true;
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5, 4, 2, 6, 8, 14, 1, 3];
console.log(arr);
console.log(bubbleSort(arr));