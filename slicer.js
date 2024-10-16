function slice(input,start,end=(input.length)) {
   if (end <0) {
    end = (input.length) - (-end)
   }
   let res = []
   if (start >= 0) {
    for (let i = start ; i < end; i++) {
        res.push(input[i])
    }
   }else {
    start = (input.length) - (-start)
    for (let i = end-1 ; i >= start; i--) {
        res.push(input[i])
        
    }
     res.reverse()
   }
   if (typeof input == 'string') {
    return res.join('')
   }else {
    return res
   }
   
}

console.log(slice('abcdef', 0, -2))