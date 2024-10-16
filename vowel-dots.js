function vowelDots(str) {
   let res = ''
   for (let i=0 ; i<str.length; i++) {
    if (vowels.test(str[i])) {
        res+= str[i] + '.'
    }else {
        res+= str[i]
    }
   }
   return res
   
}
let vowels = /a|e|i|o|u/i;
