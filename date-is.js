function isValid(date) {
    if (typeof date === 'number' && !isNaN(date)) {
        return new Date(date) instanceof Date
    }
    return date instanceof Date && !isNaN(date) 
}

function isAfter(first,second) {
    return first>second
}
function isBefore(first,second) {
    return second>first
}
function isFuture(date) {
    return (isValid(date) && isAfter(date,Date.now())) 
}
function isPast(date) {
    return (isValid(date) && isBefore(date,Date.now())) 
}