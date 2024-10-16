function getAcceleration(obj) {
    if (obj.f && obj.m != undefined) {
        return (obj.f/obj.m)
    }else if (obj.Δv && obj.Δt != undefined) {
        return (obj.Δv/obj.Δt)
    }else if (obj.d && obj.t != undefined) {
        return (((obj.d)*2)/Math.pow(obj.t,2))
    }else {
        return "impossible"
    }
}
