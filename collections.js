function arrToSet(arr) {
    return new Set(arr)
}
function arrToStr(arr) {
    return arr.join('')
}
function setToArr(set) {
    return [...set]
}
function setToStr(set) {
    return Array.from(set).join('')
}
function strToArr(str) {
    return str.split('')    
}
function strToSet(str) {
    return new Set(str)
}
function mapToObj(map) {
    const obj = {}
    for (const [x,y] of map) {
        obj[x] = y
    }
    return obj
}
function objToArr(obj) {
    return Object.values(obj)
}
function objToMap(obj) {
    return new Map(Object.entries(obj))
}
function arrToObj(arr) {
    const obj = {}
    let i = 0
    for (const x of arr) {
        obj[i] = x
        i++
    }
    return obj
}
function strToObj(str) {
   return arrToObj(strToArr(str))
}

function superTypeOf(input) {
    if (input === null) {
        return "null"
    }
    const map = input instanceof Map
    if (map) {
        return "Map"
    } 
    const set = input instanceof Set
    if (set) {
        return "Set"
    }
    const array = input instanceof Array 
    if (array) {
        return "Array"
    }
    if (undefined === input) {
        return "undefined"
    } 

    return (typeof input).charAt(0).toUpperCase() + (typeof input).slice(1)
}