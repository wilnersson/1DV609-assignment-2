// This rule is aimed at maintaining consistency and convention by disallowing constructor calls using 
// the new keyword that do not assign the resulting object to a variable.

function newWithinAssignment(){
  var a 
  if (a === new Date()) { 
    a = false 
  }
}

var monster = new Monster()

Recipie()

function NotUsingAssignment(){
  new Thing() 
}

new Day()