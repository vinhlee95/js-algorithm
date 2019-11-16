// Node
class Node {

  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

// Linkedlist
class LinkedList {

  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  isEmpty() {
    return this.head === null
  }

  /**
   * Add a value at the front of the list
   *
   * @param value
   */
  push(value) {

    this.head = new Node(value, this.head)

    // In case push to empty list then the new node is both the head and tail of the list
    if (this.tail === null) {
      this.tail = this.head
    }
  }

  /**
   * Add a value at the end of the list
   *
   * @param value
   */
  append(value) {

    // If empty, update both head and tail
    if (this.isEmpty()) {
      this.push(value)
      return
    }

    // Other cases, create a new node after the tail node
    this.tail.next = new Node(value)
    this.tail = this.tail.next
  }

  /**
   * Add a value after a particular node of the list
   *
   * @param value
   * @param node
   */
  insertAfter(value, node) {

    if (this.tail === node) {
      this.append(value)
      return this.tail
    }

    node.next = new Node(value, node.next)
    return node.next
  }

  /**
   * Find node at index
   *
   * @param index
   */
  node(index) {
    // Create a new reference to head and keep track of the current number of traversals
    let currentNode = this.head
    let currentIndex = 0

    // Using while loop, move the reference down the list until reaching the desired index
    while(currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  /**
   * Remove the value at the front of the list
   *
   * @returns removed value
   */
  pop() {
    const removedValue = this.head ? this.head.value : null
    this.head = this.head ? this.head.next : null

    if (this.isEmpty()) {
      this.tail = null
    }

    return removedValue
  }

  /**
   * Remove the value at the last node
   *
   * @returns removed value
   */
  removeLast() {

    if (this.isEmpty()) {
      return null
    }

    // If only one node then removeLast is equivalent to pop
    if (this.head.next === null) {
      return this.pop()
    }

    // Keep searching for a next node until current.next is null then current is the last node of the list
    let prev = this.head
    let current = this.head
    let next = current.next

    while (next !== null) {
      prev = current
      current = next
      next = current.next
    }

    prev.next = null
    this.tail = prev

    return current.value
  }

  removeAfter(node) {
    if (node.next === this.tail) {
      this.tail = node
    }

    node.next = node.next ? node.next.next : null

    return node.next ? node.next.value : null
  }
}

