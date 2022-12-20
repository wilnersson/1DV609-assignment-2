/**
 * Module for testing the arrow-parens rule.
 * 
 * This rule controls the usage of parentheses around input parameters in arrow functions.
 */

function arrowFunctionTest(arrFunc) {
  let result = arrFunc(2)
  console.log(result)
}

// Valid
arrowFunctionTest((a) => { return a + 1})

// Invalid, parentheses around input parameter missing.
arrowFunctionTest(a => { return a + 1})
