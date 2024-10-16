function adder(arr, n = 0) {
  return arr.reduce((pre, next) => pre + next, n);
}

function sumOrMul(arr, n = 0) {
  return arr.reduce((pre, next) => (next % 2 == 0 ? pre * next : pre + next), n);
}


function funcExec(arr, n=0) {
    return arr.reduce((pre,next) => next(pre),n)
}
