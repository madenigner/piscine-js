function firstDayWeek(week,year){
    let days = 1 + (week-1)*7
    let firstDay = new Date(year, 0, days)
    // console.log(firstDay);
    while (firstDay.getDay() !== 1) {
        if (firstDay.getFullYear() === year -1) {
            return '01-01-' + year;
            }
        firstDay.setDate(firstDay.getDate()-1)
        }
        if (year.toString().slice(0,2) === '00') {
            firstDay.setDate(firstDay.getDate()+1)
        }
    
    let day = firstDay.getDate().toString().padStart(2, "0")
    let month = (firstDay.getMonth()+1).toString().padStart(2, "0")
    let years = firstDay.getFullYear()
    if (year.toString().slice(0,2) == '00') {
        years =  '00'+ years.toString().slice(-2)
    }
    // console.log(firstDay);

    return `${day}-${month}-${years}`
}
console.log(firstDayWeek(1, '1000'));