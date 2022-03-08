// What is a variable?
//a placeholder for a value

// Make me a variable called name and put your name as the value
var name = "Gavin";

// Make me a variable called age and put your age as the value
var age = 21;

// Pretend it's your birthday and add 1 to your age
age++;
// age += 1
// age = age + 1


// Make me a variable called isStudent and set the value to true
var isStudent = true;

// What do we call the variable type I just had you make?
// boolean

// What is a conditional statement and why are they handy?
// Helps specify what to do under certain conditions
// helps us decide if we need to do a certain action

// Write me a conditional statement that checks if your age is under 25. If it is, print "Wow, you're pretty young!" if it's not, print "Age = wisdom"
if( age < 25 ) {
    console.log("Wow, you're pretty young!")
} else{
    console.log("Age = Wisdom")
}


// Write me a conditional statement that checks if you are a student. If you are, print "Good on you for learning to code!"
if ( you == student){
    console.log('Good on you for learning to code!')
}
// Write a for loop that starts at 0, ends at 10, and increments up by 1. Inside the loop, print the value of i
for(var i = 0; i <= 10; i++){
    console.log(i)
}

// Now write me a for loop that starts at 20, ends at 1, and decrements by 2. Inside the loop, print the value of i
for( var i = 20; i >=1; i-=2){
    console.log(i)
}

// Make me an array with the values [3,7,10,2,4,18]
var arr=[3,,7,10,2,4,18]

// Pop quiz: what index value do arrays ALWAYS start on?
arr[0]

// Pop quiz: if I wanted to grab the 2nd value in an array, how would I write that?
arr[1]

// Pop quiz: how would I grab the LAST value in an array?
arr[arr.length-1]

// Push the value 5 into the array you made
arr.push(5)

// Write me a for loop that traverses through the array from before and prints the values at each index
for(i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// Now add to that loop some logic that checks if the value is greater than 5 and ONLY print the value if it is larger than 5
for(i = 0; i<=arr.length; i++){
    if arr[i]>5;
        console.log(arr[i])
}

// Function time! Tell me what a function is and why we use them?
//function is action an action we can execute and call on mulitple times

// If I write function doAThing(value)...what is the term we use for that "value" inside the parentheses?
parameter

// Write me a function that, when called, prints out "Hello there!"
function hello(){
    console.log("Hello there!")
}
// Now add the ability for the function to accept a name and print out "Hello there {given name here}!"
function hello(name){
    console.log("Hello there " + name + "!")
    //this also works
    console.log(`Hello there ${name}!`)
}

hello("Gavin")
// Quick! Tell me the coolest thing you've learned this week!
// Everything! I know now enough to make small websites

// What are you most proud of yourself for figuring out this week?
// Knowing how to write html and css

// Are you excited to learn more?
// Im excited to move forward and learn new code

// What can we do to make your time with us even better?
// nothing! love whats happening in this course