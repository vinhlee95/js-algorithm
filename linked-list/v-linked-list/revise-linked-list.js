class SingleNode {
	constructor(value, next) {
		this.value = value
		this.next = next
	}
}

const myNode2 = new SingleNode(2, null)
const myNode1 = new SingleNode(1, myNode2)
// console.log(myNode2)

class LinkedList {
	constructor(head, tail) {
		this.head = head
		this.tail = tail
	}

	isEmpty() {
		return this.head === null
	}

	addToTail(value) {
		if(!this.head) {
			this.head = new SingleNode(value, null)
			this.tail = this.head
		} else {
			const temp = this.tail
			const newNode = new SingleNode(value, null)
			temp.next = newNode
			this.tail = newNode
		}
	}

	printAll() {
		let values = []

		let prev = this.head
		let current = this.head
		let next = current.next

		values.push(current.value)
		while(next !== null) {
			prev = current
			current = next
			next = current.next

			values.push(current.value)
		}

		while(current.next) {
			values.push(current.value)
			current = current.next
		}

		console.log(values)
	}

	printAllByPrev() {
		let values = []

		let prev = this.head
		let current = this.head

		while(prev.next) {
			values.push(current.value)
			prev = current
			current = current.next
		}

		console.log(values)
	}
}

const myLinkedList = new LinkedList(null, null)
myLinkedList.addToTail(1)
myLinkedList.addToTail(2)
myLinkedList.addToTail(3)
myLinkedList.addToTail(4)
myLinkedList.addToTail(5)
myLinkedList.addToTail(6)

// myLinkedList.printAll()
myLinkedList.vinhPrint()