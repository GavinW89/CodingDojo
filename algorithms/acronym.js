function acronym(str) {
    var acro = ""
    acro += str[0]
    for(var i=0; i<str.length; i++){
            if(str[i] === " "){
                acro += str[i+1]
            }
        }
    return acro.toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way"));