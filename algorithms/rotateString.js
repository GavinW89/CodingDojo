//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    //length-num
    //for loop starting at pointer
    //take all the charactrers infront of pointer
    //loop through the string again from beginning
    //take all remaing characters and push into new str
    let newString = "";
    const pointer = str.length - num;
    for(let i = pointer; i<str.length; i++){
        newString += str[i]
        if(i===str.length-1){
            for(j=0; j<pointer;j++){
                newString += str[j]
            }
        }
    }
    return newString

}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    //test length of bot strng
    //if true continue
    //for loop i++
    //each iter of i we callback rotatestr
    if(str1.length === str2.length){
        for(i=0; i<str1.length; i++){
            if(rotateString(str1,i) === str2){
                return true
            }
        }
    }
    return false
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));
console.log(isRotation("piper picked peppers","picked pepperspiper "))
console.log(isRotation("piper picked peppers","picked peppers piper "))
