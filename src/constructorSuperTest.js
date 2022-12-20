/**
 * Module for testing the constructor-super rule.
 * 
 * This rule controls the usage of the super() method when using inheritance in classes.
 */

class TestA {
  #aNumber

  constructor() {
    this.#aNumber = 1
  }
}

// Invalid, missing the super() call.
class TestB extends TestA {
  #anotherNumber

  constructor() {
    this.#anotherNumber = 2
  }
}

// Valid
class TestC extends TestA {
  #aString

  constructor() {
    super()

    this.#aString = 'Hello World!'
  }
}

// Valid
class TestD extends TestA {
  #anotherString

  constructor() {

    super()

    this.#anotherString = 'Hello again...'
  }
}
