function split(str, x) {
    let res = [];
    let item = '';
    let i = 0;

    if (x === '') {
        for (let i = 0; i < str.length; i++) {
            res.push(str[i])
        }
        return res
    }

    while (i < str.length) {
       if (str.slice(i, i + x.length) === x) {
          res.push(item)
          item = ''
          i += x.length
       } else {
          item += str[i]
          i++
       }
    }
 
    res.push(item)
    return res
 }

function join(arr,x) {
    let res = ""
    for (let i =0 ; i <= arr.length-1 ; i++) {
        if (i<arr.length-1) {
            res +=arr[i]
            res += x
        }else {
            res +=arr[i]
        }
        
    } 
    return res
}
