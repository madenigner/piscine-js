function words(str) {
    return str.split(' ')
}
function sentence(str) {
    return str.join(' ')
}
function yell(str) {
    return str.toUpperCase()
}
function whisper(str) {
    return "*" + str.toLowerCase() + "*"
}
function capitalize(str) {
    const txt =  str.toLowerCase()
     return txt[0].toUpperCase() + txt.slice(1)
}