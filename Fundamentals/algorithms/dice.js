function d6(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    roll = (Math.floor(Math.random() * (max - min + 1) + min))
    return roll;
}
    
var playerRoll = d6(1,6);
console.log("The player rolled: " + playerRoll);