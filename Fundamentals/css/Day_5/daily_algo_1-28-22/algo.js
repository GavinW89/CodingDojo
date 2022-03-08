// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

    function reverseWhile( arr ) {
        var x = 0;
        while(x<arr.length/2){
            var temp = arr[x];
            arr[x] = arr[arr.length-1-x];
            arr[arr.length-1-x] = temp;
            x++
        }
        return arr;
    }

    
    function reverse(arr){
        var out =[];
        for(var i=arr.length-1;1>0;i--){
            out.push(arr[i]);
        }
        return out;
    }
    
    reverse("a","b","c","d","e");
    console.log(reverseWhile());
    console.log(reverse());
