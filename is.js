

is.num = function num(x) {
        return typeof x == "number"
     }
is.nan = function nan(x) {
    return Number.isNaN(x)
}
is.str = function str(x) {
    return typeof x == "string"
}
is.bool = function bool(x) {
    return typeof x == "boolean"
}
is.undef = function undef(x) {
    return typeof x == "undefined"
}
is.def = function def(x) {
    return typeof x != "undefined"
}
is.arr = function arr(x) {
    return Array.isArray(x)
}
is.obj = function obj(x) {
    return !Array.isArray(x) && typeof x == "object" && x != null
}
is.fun = function fun(x) {
    return typeof x == "function"
}
is.truthy = function truthy(x) {
    return Boolean(x)

}
is.falsy = function falsy(x) {
    return !Boolean(x)
}