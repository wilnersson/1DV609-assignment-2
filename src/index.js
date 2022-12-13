function arrowFunctionTest(arrFunc) {
  let result = arrFunc(2)
  console.log(result)
}

arrowFunctionTest((a) => { return a + 1})
