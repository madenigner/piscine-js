function matchCron(cron,date){
    
    let newDate = new Date(date)
    // console.log(newDate);

    let v = cron.split(' ')
    var minute = v[0],hour = v[1],dayOfMon = v[2],montOfYea = v[3],dayOfWeek = v[4];
    if ((newDate.getMinutes()== minute*1 || minute == '*') && (newDate.getHours() == hour*1 || hour == '*') &&
     (newDate.getDate() == dayOfMon*1 || dayOfMon == '*') && (newDate.getMonth()+1 == montOfYea*1 || montOfYea == '*') && (newDate.getDay() == dayOfWeek*1 || dayOfWeek == '*')){
        return true
     }
    return false
}
// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')));