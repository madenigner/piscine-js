const weekDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','secondMonday','secondTuesday','secondWednesday','secondThursday','secondFriday','secondSaturday','secondSunday']

function addWeek(date) {
    let index = new Date('0001-01-01')
    let x = (date-index)/(1000*60*60*24)
        console.log(x%14);

    return weekDay[x%14]
}
date = new Date('2001-05-11')
console.log(addWeek(date)); 

function timeTravel(object) {
    let hour = object.date.getHours()
    hour = object.hour
 
    let minute = object.date.getMinutes()
    minute = object.minute
 
    let second = object.date.getSeconds()
    second = object.second
    object.date.setHours(object.hour)
    object.date.setMinutes(object.minute)
    object.date.setSeconds(object.second)
 
    return object.date
 }
const object = {
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }