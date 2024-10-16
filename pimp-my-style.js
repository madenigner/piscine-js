import {styles} from "./pimp-my-style.data.js"

let counter = 0
function pimp() {
    let btn = document.querySelector("button")
    if (!btn.classList.contains("unpimp")) {
        btn.classList.add(styles[counter])
        counter++
    }else {
        counter--
        btn.classList.remove(styles[counter])
        if (counter===0) {
            btn.classList.toggle("unpimp")
        }
    }
    if (counter == styles.length) {
        btn.classList.toggle("unpimp")
    }
}
export{pimp}