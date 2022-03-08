var likes = document.querySelector(".numLikes")

function liked(element) {
    console.log(element.getAttribute('num'))
    element.setAttribute("num",parseInt(element.getAttribute("num"))+1) 
    element.innerHTML = element.getAttribute("num")+ " likes"
}

function logout(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
}

function hideButton(element) {
    element.style.display = "none";
}