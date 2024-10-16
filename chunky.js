function chunk(arr,int) {
   let res = []
   let temp = []
   let j = 0 

    for (let i=0 ; i< arr.length ; i++) {
        if (j == int) {
            res.push(temp)
            j=0
            temp=[]
        }
        temp.push(arr[i])
        j++
    }
   res.push(temp)
   return res
}
