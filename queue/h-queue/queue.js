class Queue {

  constructor(array) {
    this.array = []
    if (array) {
      this.array = array
    }
  }

  getBuffer() {
    return this.array.slice()
  }

  isEmpty() {
    return this.array.length === 0
  }

  peek() {
    return this.array[0]
  }

  enqueue(value) {
    return this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }

  queueSearch(queue, element) {
    const bufferArray = queue.getBuffer()
    const bufferQueue = new Queue(bufferArray)

    while(!bufferQueue.isEmpty()) {
      if (bufferQueue.dequeue() === element) {
        return true
      }
    }

    return false
  }
}
