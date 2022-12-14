function noExtraSemiTest() {
  console.log('I really should not end with semi-colons...');
}

function arrowFunctionTest(arrFunc) {
  let result = arrFunc(2)
  console.log(result)
}

arrowFunctionTest((a) => { return a + 1})
arrowFunctionTest(a => { return a * 2})
