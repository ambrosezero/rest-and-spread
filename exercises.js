// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


let filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);



let findMin = (...args) => args.reduce((accum, arg) => accum < arg ? accum : arg, NaN);


// ?????? why isnt an implicit return possible in the following?????
// ?????? is it because i am returning an object?????
let mergeObjects = (...objs) => objs.reduce((accum, obj) => { return { ...accum, ...obj } }, {})



let doubleAndReturnArgs = (arr, ...nums) => nums.reduce((accum, num) => [...accum, num * 2], arr);


/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = (items) => {
    const exractIndex = Math.floor(Math.random() * items.length)
    return items.filter((value, index) => index != exractIndex)
}

/** Return a new array with every item in array1 and array2. */

let extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

let addKeyVal = (obj, key, val) => { return { ...obj, [key]: val } }


/** Return a new object with a key removed. */
// ????? is there a better way to perform the following function
let removeKey = (obj, key) => {
    let fxnObj = { ...obj }
    delete fxnObj[key]
    return fxnObj
}


/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => { return { ...obj1, ...obj2 } }


/** Return a new object with a modified key and value. */

function update(obj, key, val) { return { ...obj, [key]: val } }




