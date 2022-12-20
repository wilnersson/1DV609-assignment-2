/**
 * Module for testing the no-sparse-arrays rule.
 * 
 * This rule controls the usage of empty locations in array indexes.
 */

// Valid
const testArrayOne = ['hello', 'world']

// Invalid, empty element on index 1.
const testArrayTwo = ['hello', , 'world']

// Valid
let testArrayThree = [1,2,3]

// Invalid, empty element on index 1.
let testArrayFour = [1,,3,4]

// Invalid, empty element on index 0.
const testArrayFive = [,1,'hello']

// Valid
const testArraySix = ['hello',1]
