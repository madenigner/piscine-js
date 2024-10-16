function ionOut(str) {
    let res = str.match(regex)
    if (res==null) {
        return []
    }
    for (let i=0 ; i < res.length; i++) {
        res[i] = res[i].replace('ion','')
    }
   
    return res
}
let regex = /[\w]*t(ion)[\w]*/g;