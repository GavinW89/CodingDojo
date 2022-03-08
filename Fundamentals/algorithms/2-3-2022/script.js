var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

function getNum(Num) {
    for(i=0; i<arr2d.length; i++ ){
        for(j=0; j<arr2d[i].length; j++){
            if(arr2d[i][j] == Num){
                console.log(arr2d[i][j] + " True")
                return true;
            }
        }
    
    }
}
getNum(7);


var newArr = [];
var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

function flatArr() {
    for(i=0; i<arr2d.length; i++){
        for(j=0; j<arr2d[i].length; j++){
            newArr.push(arr2d[i][j]) 
        }
    }
    console.log(newArr)
}
flatArr()