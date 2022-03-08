var cookies = document.getElementById("acceptBtn").onclick = function(){
    document.getElementById("cookies").style.display = "none";
}

var succulentImg = document.getElementById("succulentImg")
function hover() {
    console.log("mouse hover")
    succulentImg.src = 'images/assets/succulents-1.jpg'
}

function unhover() {
    console.log("mouse out")
    succulentImg.src = 'images/assets/succulents-2.jpg'
}
