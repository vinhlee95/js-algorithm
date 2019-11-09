/**
 * Double linked list examples
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
class DoubleLinkedListNode {
	constructor(data) {
		this.data = data
		this.prev = null
		this.next = null
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
		this.isEmpty = this.size === 0
	}

	/**
	 * ADD TO HEAD
	 *
 	*/
	addToHead(value) {
		let newNode = new DoubleLinkedListNode(value)
		// If no node exists
		if(!this.head) {
			this.head = newNode
			this.tail = this.head // exact same object
		} else {
			// Link new node with current head
			newNode.next = this.head
			this.head.prev = newNode

			// Change head
			this.head = newNode
		}

		this.size ++
	}

	/**
	 * Add to tail
	 *
	 */
	addToTail(value) {
		let newNode = new DoubleLinkedListNode(value)

		if(!this.tail) {
			this.tail = new Node()
			this.head = this.tail
		} else {
			// Link new node with current tail
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}

		this.size ++
	}

	/**
	 * Delete head
	 *
	 */
	deleteHead() {
		if(!this.head) {
			return
		}

		if(this.head === this.tail) {
			this.head = null
			this.tail = null
			return
		}

		this.head = this.head.next
		this.head.prev = null // unlink old head

		if(!this.isEmpty) {
			this.size --
		}
	}
}