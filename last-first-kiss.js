function first(element) {
    return element[0]
}

function last(element) {
    return element[element.length-1]
}

function kiss(element) {
    return [last(element),first(element)] 
}
