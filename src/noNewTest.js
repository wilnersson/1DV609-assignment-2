/**
 * This rule is aimed at maintaining consistency and convention by disallowing constructor calls using 
 * the new keyword that do not assign the resulting object to a variable.
 */

// new is used correct
a === new ObjectInstance()

// here without new, and is then a function call
Recipie()

new Date() // predefined class

// no assigning to a variable
new variableToObject()

// without variable, gives syntax error, but still interesting ESLint does not warn.
= new Instance()
