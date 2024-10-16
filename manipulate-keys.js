function filterKeys(obj,func) {
    let res = {}
    for (let key in obj) {
        if (func(key)) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapKeys(obj,func) {
    let res = {}
    for (let key in obj) {
       res[func(key)] = obj[key]
    }
    return res
}

function reduceKeys(key,func,x=0) {
    
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))