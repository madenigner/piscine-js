function generateLetters() {
    for (let i = 0 ; i < 120 ; i++) {
        let char = document.createElement("div")
        char.style.fontSize = `${11+i}px`
        char.textContent = String.fromCharCode(65 + Math.floor(Math.random()*26))
        if (i < 40) {
            char.style.fontWeight = "300"
        }else if (i < 80){
            char.style.fontWeight = "400"
        }else {
            char.style.fontWeight = "600"
        }
        document.body.appendChild(char)
    }
}
//////////////////
export{
    generateLetters
}