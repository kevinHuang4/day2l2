// objects
// number
// string
// array
// boolean

// function




var nums = [1,3,6,8,75,-92]


const number = require('./number')
const string = require('./string')
const calcDis = require('./function')


var useCalcDis = calcDis(15,5)

var stats = require('simple-statistics')

console.log(number)
console.log(string)
console.log(useCalcDis)
console.log(stats)

console.log(stats.min(nums))
console.log(stats.sum(nums))
console.log(stats.median(nums))
console.log(stats.mean(nums))



// lodash
// sample
// shuffle
// take

var _ = require('lodash')

console.log(_.take(nums,3))
console.log(_.sample(nums))
console.log(_.shuffle(nums))
