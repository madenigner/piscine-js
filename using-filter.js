let regex = /[aeiou]/i;
function filterShortStateName(arr) {
  return arr.filter((str) => str.length < 7);
}

function filterStartVowel(arr) {
  return arr.filter((word) => regex.test(word[0]));
}
function filter5Vowels(arr) {
  return arr.filter((word) => {
    let counter = 0;
    for (let w of word) {
      if (regex.test(w)) {
        counter++;
      }
    }
    return counter >= 5;
  });
}
function filter1DistinctVowel(arr) {
 return arr.filter(word => {
    let visited = []
    for (let w of word) {
        if (regex.test(w)) {
                if (!visited.includes(w)) {
                    visited.push(w.toLowerCase())
                }
        }
    }    
    return visited.length == 1
 })
}
function multiFilter(arr) {
    return arr.filter(mult => {
       return mult.capital.length >= 8 && !regex.test(mult.name[0]) && regex.test(mult.tag) && mult.region != 'South'                    
    })
}


// console.log(multiFilter(arr2));
