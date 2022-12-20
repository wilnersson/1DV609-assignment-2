/**
 * Module for testing the indent rule.
 * 
 * This rule controls the usage of indentation.
 */

// Invalid
function indentationTesting(number) {
  const result = number * 2
    return result
}

// Valid
function indentationTestingWithManyParameters(
  anUnnecessarilyLongParameterNameForTheHeckOfItNumber, 
  someOtherParameterThatShouldBeAString) {
  result = anUnnecessarilyLongParameterNameForTheHeckOfItNumber * 2
  return someOtherParameterThatShouldBeAString + result
}
