function triangle(str,x) {
    let res = ""
    for (let i=1 ; i <= x ; i++) {
        for (let j=1 ; j <= i; j++) {
            res += str
        }
        if (i < x) {

            res +='\n'
        } 
    }
    return res
}
console.log(triangle('*',5))