function filterValues(obj,func) {
  let res = {}
   for (let key in obj) {
    if (func(obj[key])) {
        res[key] = obj[key]
    }
   }
   return res
}

function mapValues(obj,func) {
    let res = {}
    for (let key in obj) {
        res[key] = func(obj[key])
       }
       return res

}
function reduceValues(obj,func, x=0) {
    let total = 0
   for (let key in obj) {
    total = func(total, obj[key])
   }
   return total+x
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
