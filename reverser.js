function reverse(arr) {
    let n = arr.length
    let res = []
    for (let i = n-1; i >=0 ; i--) {
        res.push(arr[i])
    }
    if (typeof arr == 'string') {
        return res.join('')
    }
    return res
}
