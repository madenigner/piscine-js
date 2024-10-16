function fusion(obj1, obj2) {
    let res = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                res[key] = [...obj1[key], ...obj2[key]];
            } else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                res[key] = `${obj1[key]} ${obj2[key]}`;
            } else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
                res[key] = obj1[key] + obj2[key];
            } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
                res[key] = fusion(obj1[key], obj2[key]);
            } else {
                res[key] = obj2.hasOwnProperty(key) ? obj2[key] : obj1[key];
            }
        }
    }

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
            res[key] = obj2[key];
        }
    }

    return res;
}


// console.log(fusion(fusion({ a: 12, b: 2, c: 43 }, { a: 23, b: 2 }), { a: 35, b: 4, c: 43 }))