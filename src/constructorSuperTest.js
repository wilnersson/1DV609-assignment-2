class TestA {
  #aNumber

  constructor() {
    this.#aNumber = 1
  }
}

class TestB extends TestA {
  #anotherNumber

  constructor() {
    this.#anotherNumber = 2
  }
}

class TestC extends TestA {
  #aString

  constructor() {
    super()

    this.#aString = 'Hello World!'
  }
}

class TestD extends TestA {
  #anotherString

  constructor() {

    super()

    this.#anotherString = 'Hello again...'
  }
}
