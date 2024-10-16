function isFriday(date) {

    let newDate = new Date(date)
    return newDate.getDay(newDate) == 5
}

function isWeekend(date) {

    let newDate = new Date(date)
    return (newDate.getDay(newDate) == 6 || newDate.getDay(newDate) == 7)
}
function isLeapYear(date) {
    let newDate = new Date(date)
    return (newDate.getFullYear() % 4 ) == 0

}
function isLastDayOfMonth(date) {
    let newDate = new Date(date.getFullYear(),date.getMonth()+1,0)
    return newDate.getDate() === date.getDate()

}
console.log(isLastDayOfMonth(new Date('2019-02-28')));