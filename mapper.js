function map(arr,func) {
    let res = []
    for (let i=0 ; i < arr.length; i++) {
        res.push(func(arr[i],i,arr))
    }
    return res
}
function flatMap(arr,func) {
    let res = []
    for (let i=0 ; i < arr.length; i++) {
        res = res.concat(func(arr[i],i,arr))
    }
    return res
}

// console.log(flatMap([1, 2, 3], (n) => [n, n]))