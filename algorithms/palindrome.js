function isPalli(arr) {
    for(var left = 0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return false;
        }
    }
    return true;
}

function longestPalli(str) {
    var myarr = str.split(" ")
    console.log(myarr)
    var longestLength = 0
    var longest = ""
    for (i=0; i<myarr.length; i++){
        if(isPalli(myarr[i])) {
            if (myarr[i].length > longestLength){
                longest = myarr[i]
                longestLength = myarr[i].length
            }
        }
    }
    console.log("The Longest Pallindrom is:")
    return longest
}
console.log(longestPalli("hello there im tacocat"))