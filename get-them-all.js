function getArchitects() {
    let byA = Array.from(document.getElementsByTagName("a"))
    let bySpan = Array.from(document.getElementsByTagName("span"))
    return [byA,bySpan]
}

function getClassical() {
    let getClassical = Array.from(document.getElementsByClassName("classical"))
    let getNonClassical = Array.from(document.querySelectorAll("a:not(.classical)"))

    return [getClassical,getNonClassical]
}

function getActive() {

let getActive = (document.querySelectorAll("a.classical.active"))
let getNonActive = (document.querySelectorAll("a.classical:not(.active)"))

    return [getActive,getNonActive]
}

function getBonannoPisano() {
    let getBonannoPisano = (document.getElementById('BonannoPisano'))
    let getNonBonannoPisano = Array.from(document.querySelectorAll('a.classical:not(#BonannoPisano)'))
   

    return [getBonannoPisano,getNonBonannoPisano]
}

// console.log(getActive);

export{getArchitects}
export {getClassical}
export{getActive}
export{getBonannoPisano}
