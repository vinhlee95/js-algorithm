class Stack {

  constructor(array) {
    this.array = []

    if (array) {
      this.array = array
    }
  }

  isEmpty() {
    return this.array.length === 0
  }

  getBuffer() {
    return this.array.slice()
  }

  /**
   * Return the last added element without remove it from stack
   */
  peek() {
    return this.array[this.array.length - 1]
  }

  /**
   * Insert element to stack
   *
   * @param value
   */
  push(value) {
    this.array.push(value)
  }

  /**
   * Remove element from stack
   *
   * @returns removed element
   */
  deletion() {
    return this.array.pop()
  }

  stackSearch(stack, element) {
    const bufferArray = stack.getBuffer()

    const bufferStack = new stack(bufferArray)

    while(!bufferStack.isEmpty()) {
      if (bufferStack.pop() === element) {
        return true
      }
    }

    return false
  }
}
