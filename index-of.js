function indexOf(arr,value,n = 0) {
  
    for (let i = n ; i <= arr.length ; i++) {        
        if ( arr[i] === value ) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr,value, x = (arr.length)-1){

    for (let i = x ; i >= 0 ; i--) {        
        if ( arr[i] === value ) {
            return i
        }
    }
    return -1
}
function includes(arr,value) {
    for (let i = 0 ; i <= arr.length ; i++) {        
        if ( arr[i] === value ) {
            return true
        }
    }
    return false
}

let arr = [1,2,3,4,5,1]
let value = 1
