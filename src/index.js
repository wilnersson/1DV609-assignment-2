function indentationTesting(number) {
  const result = number * 2
    return result
}

function indentationTestingWithManyParameters(
  anUnnecessarilyLongParameterNameForTheHeckOfItNumber, 
  someOtherParameterThatShouldBeAString) {
  result = anUnnecessarilyLongParameterNameForTheHeckOfItNumber * 2
  return someOtherParameterThatShouldBeAString + result
}

function arrowFunctionTest(arrFunc) {
  let result = arrFunc(2)
  console.log(result)
}

arrowFunctionTest((a) => { return a + 1})
