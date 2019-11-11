/**
 * Linked list code examples
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
class SinglyLinkedListNode {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null // default value
		this.tail = null // pointer to the next node
		this.size = 0
	}

	insertToHead(value) {
		if(this.head === null) {
			this.head = new SinglyLinkedListNode(value)
		} else {
			const temp = this.head
			this.head = new SinglyLinkedListNode(value)
			this.head.next = temp
		}

		this.size ++
	}

	insertToTail(value) {
		if(this.head === null) {
			this.head = new SinglyLinkedListNode(value)
		} else {
			const temp = this.tail // current tail
			this.tail = new SinglyLinkedListNode(value) // new tail
			temp.next = this.tail // connect old tail to new tail
		}
	}
}
