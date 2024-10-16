function multiply(a,b) {
   let tempa
    if (a==0 || b==0) {
        return 0
    }
    let factor = false
    if (a > 0) {

         tempa = a
    } 
    if (a < 0 ) {
         tempa = -a

    }
    if (a < 0 && b < 0 ) {
        a = -a
        b = -b
       }else if (a < 0 || b < 0) {
    if (a < 0) {
        a = -a;
        factor=true;
    }else if (b < 0) {
        b = -b;
        factor=true;
    }
   }
    for (let i = 1 ; i < b ; i++) {
        a += tempa 
    }
    if (factor) {
        return -a     
    }  
        return a
}

function divide(a,b) {
    if (a ==0 || b == 0) {
     return 0
    }
     let div 
     let factor = 1 
     if (a < 0 && b < 0 ) {
         a = -a
         b = -b
        }
    if (a < 0 || b < 0) {
     if (a < 0) {
         a = -a
         factor=-1
     }else if (b < 0 ) {
         b = -b
         factor=-1 
     }
    
    }
   
     const temp = a
     for (let i = 1 ; i <= temp ; i++) {
         a -= b  
         if (a == 0) {
             div = i
             break
         }
         else if (a < 0) {
             div = i-1
             break
         }
     } 
     return (multiply(div,factor))
   
 }

function modulo(a,b) {
    
    return (a-(multiply(divide(a,b),b)))
}