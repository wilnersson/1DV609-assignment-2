
/**
 * Enforce the consistent use of the radix argument when using parseInt()
 *  must be an integer between 2 and 36
 * must contain a second parameter = the radix
 * Optional. Default is 10.
 * radix = A number (2 to 36) specifying the number system.
 */



// Missing radix parameter
var num = parseInt("071") // 57

// Not within radix range
var num = parseInt("071", "abc")

// Not within radix range
var num = parseInt("071", 37)

var num = parseInt("71", 10)
console.log(num) // 71

var num = parseInt("071", 10)
console.log(num) // 71

var num = parseInt("071", 36)
console.log(num) // 253

var num = parseInt("071", 8)
console.log(num) // 57

var num = parseFloat("071")
console.log(num) // 71
