function RNA(str) {

    let res = ""
    for (let i=0 ; i < str.length ; i++) {
        res += dna[str[i]]
    }
    return res

}
function DNA(str) {

    let res = ""
    for (let i=0 ; i < str.length ; i++) {
        res += rna[str[i]]
    }
    return res

}


let dna = {
    G  :  'C',
    C  :  'G',
    T  :  'A',
    A  :  'U',
}

let rna = {
    C  :  'G',
    G  :  'C',
    A  :  'T',
    U  :  'A',
}