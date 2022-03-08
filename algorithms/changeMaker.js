function coins(val){
    if(val % 1 != 0){
        val*=100;
    }
    var quarters = Math.floor(val/25);
    val-=25*quarters;
    var dimes = Math.floor(val/10);
    val-=10*dimes;
    var nickles = Math.floor(val/5);
    val-=5*nickles;
    penny = val;
    return [quarters + ' Quarters', dimes + ' Dimes', nickles + ' Nickles', penny + ' Pennies'];

}

console.log(coins(2.23));