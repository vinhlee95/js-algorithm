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
	 * Time complexity: O(1)
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
	 * Time complexity: O(1)
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
	 * Time complexity: O(1)
	 *
	 */
	deleteHead() {
		if(!this.head) {
			return
		}

		if(this.head === this.tail) {
			this.resetList()
			return
		}

		this.head = this.head.next
		this.head.prev = null // unlink old head
		this.size --
	}

	/**
	 * Delete tail
	 * Time complexity: O(1)
	 *
	 */
	deleteTail() {
		if(!this.tail) {
			return
		}

		if(this.head === this.tail) {
			this.resetList()
			return
		}

		this.tail = this.tail.prev
		this.tail.next = null
		this.size --
	}

	/**
	 * Search from head
	 * Time complexity: O(n)
	 *
	 */
	searchFromHead(value) {
		let currentHead = this.head
		while(currentHead.next) {
			if(currentHead.value === value) {
				return true
			}

			currentHead = currentHead.next
		}

		return false
	}

	/**
	 * Search from tail
	 * Time complexity: O(n)
	 *
	 */
	searchFromTail(value) {
		let currentTail = this.tail
		while(currentTail.prev) {
			if(currentTail.value === value) {
				return true
			}

			currentTail = currentTail.prev
		}

		return false
	}

	/**
	 * Helpers method
	 *
	 */
	resetList() {
		this.head = null
		this.tail = null
	}
}