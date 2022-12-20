/**
 * This is a commonly used alias but there are others like that and self.
 * This rule is to ensure that the same alias is used.
 *  
 */ 

// from https://eslint.org/docs/latest/rules/consistent-this
// to try to understand this rule
// incorrect code 
var self = 42

var that = this

self = 42

that = this

// correct code
var self = this

var that = 42

var that

self = this

foo.bar = this

// self is assigned in eslintrc.json as default option
// that seems to be why this can be assigned to self but not to that
// And self seems to be occupied, cant be assigned to anything else than this

// own tests

self = this 

self = that // cant be assign to another alias name

self = this.object

self = self.object


// here that seems ok to use
let counter = {
  count: 0,
  next: function () {
    return ++that.count
  },
}

counter.next()