function pick(obj, keys) {
    const res = {}
    const keyArray = Array.isArray(keys) ? keys : [keys]

    keyArray.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
            res[key] = obj[key]
        }
    })

    return res
}

function omit(obj, keys) {
    const res = {}
    const keyArray = Array.isArray(keys) ? keys : [keys]

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !keyArray.includes(key)) {
            res[key] = obj[key];
        }
    }
    return res
}

// let obj = {
//     name : 'Amine',
//     age : 19,
//     'a' : '3',
//     'b' : '6',
// }
// let keys = ['a','b']

// console.log(pick(obj,keys));