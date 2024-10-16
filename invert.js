function invert(obj) {
    let res = {}
    for (let o in obj) {
        if (obj.hasOwnProperty(o)) {

            res[obj[o]] = o
        }
    }
    return res
}

let obj = { brand: 'ford',
    motor: 'v8',
    year: 2000,
    fast: true,
    eco: true }

console.log(invert(obj));