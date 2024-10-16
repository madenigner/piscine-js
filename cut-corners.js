function toInt(x) {
    if (x > 68719476735 || x < -68719476735) {
        let num = 0;
        if (x < 0) {
            while (x < -68719476735) {
                x += 68719476735;
                num -= 68719476735;
            }
            while (x < 0) {
                x += 1;
                num--;
            }
        } else {
            while (x > 68719476735) {
                x -= 68719476735;
                num += 68719476735;
            }
            while (x >= 1) {
                x -= 1;
                num++;
            }
        }
        return num;
    }

    if (x < 0 && x > -1) {
        return 0;
    }

    let neg = false;
    if (x < 0) {
        neg = true;
        x = -x;
    }

    let num = 0;
    while (x >= 1) {
        x -= 1;
        num++;
    }

    return neg ? -num : num;
}
function round(x) {
    let negative = false
    if (x < 0) {
        x = -x
        negative = true
    }
    let temp = toInt(x)
    if (x-temp < 0.5) {
        return negative ? -temp : temp
    }else {
        
            return negative ? -temp-1 : temp+1
        
    } 
}
function ceil(x) {
    if (x==0) return x;
    let negative = false
    if (x<0) {
        x = -x
        negative = true
    }
    let temp = toInt(x)
    return negative ? -temp : temp+1
}
function floor(x) {
    let negative = false
    if (x<0) {
        x = -x
        negative = true
    }
    let temp = toInt(x)
    return negative ? -temp-1 : temp
}

function trunc(x) {
    let negative = false
    if (x<0) {
        x = -x
        negative = true
    }
    let temp = toInt(x)
    return negative ? -temp : temp
}

console.log(ceil(0))


