function sign(nbr) {
   if ( nbr > 0 ) {
    return 1
   } else if (nbr < 0 ) {
    return -1
   }else {
    return 0
   }
}

function sameSign(x,y) {
    if (sign(x) == sign(y)) {
        return true
    }
    return false
} 
