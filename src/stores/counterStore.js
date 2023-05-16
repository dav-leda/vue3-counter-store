

export const counterStore = {

  // STATE
  counter: 0,

  // GETTERS
  double() {
    return this.counter * 2
  },

  // SETTERS
  increment() {
    this.counter++
  },
  decrement() {
    this.counter > 0 && this.counter--
  }
}

