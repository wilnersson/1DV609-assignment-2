
let that

function f() {
  var that
  that = this
    
  var foo, that
  foo = 42
  that = this

  var context = this

  // var foo = 42, self = this

  var self; self = 42

}
