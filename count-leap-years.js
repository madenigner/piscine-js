function countLeapYears(date) {
    let newDate = date.getFullYear()
    let nmber = ((newDate)/4)-((newDate)/100)+((newDate)/400)
    return Math.trunc(nmber)
}
// console.log(countLeapYears(new Date('0001-12-01')));