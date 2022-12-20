/**
 * Module for testing the semi rule.
 * 
 * This rule controls the usage of semicolons.
 */

// Invalid, extra semicolon after console.log() call.
function noExtraSemiTestNegative() {
  console.log('I really should not end with semi-colons...');
}

// Valid
function noExtraSemiTestPositive() {
  console.log('Perhaps like this.')
}

// Valid, though not sure why as the semicolon appears unnecessary.
function noExtraSemiBlockEnd() {
  console.log('What about ending blocks with a semi?')
};
