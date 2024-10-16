function dayOfTheYear(date) {
   let newDate = date.getTime()
   let start = new Date('0001-01-01') 
   if (newDate/(1000*60*60*24) < 0 ) {
    return 
   }
    return (newDate/(1000*60*60*24))
}
console.log(dayOfTheYear(new Date('0001-01-01')));