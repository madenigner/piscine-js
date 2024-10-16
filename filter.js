function filter(arr,func) {
    let res = []
    for (let i =0 ; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr,func){
    let res = []
    for (let i =0 ; i < arr.length; i++) {
        if (!func(arr[i],i,arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function partition(arr,func) {
    let flt = []
    let rjc = []
    flt = (filter(arr,func))
    rjc = (reject(arr,func))

    return [flt, rjc]
}