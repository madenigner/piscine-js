function pyramid(str,x) {
    let res = ""
   for (let i = 1 ; i <= x ; i++) {
    for (let j = 0 ; j < (x-i) ; j++) {
        for (let t = 0 ; t<str.length ; t++ ) {

            res+= ' '
        }
    }
        for (let k = 1 ; k <= (i*2)-1 ; k++) {
            res+= str
        }
        if (i < x) {
            res+='\n'
        }
   } 
   return res
}
console.log(pyramid('a',5))