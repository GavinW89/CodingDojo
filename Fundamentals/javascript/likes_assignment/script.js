var arr = [9,12,9]

function addLike(id) {
    arr[id]++
    document.getElementById(id).innerText = arr[id]
}
