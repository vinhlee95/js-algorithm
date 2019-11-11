/**
 * Queue code examples
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
class Queue {
	constructor(array) {
		this.array = array
	}

	isEmpty() {
		return this.array.length === 0
	}

	/**
	 * PEEKING
	 *  - return first el in the queue without removing it from the data structure
	 *  - Time complexity: O(1)
	 *
	 * @return Node
	 */
	peek() {
		return this.array[0]
	}

	// INSERTING: implemented by push() - O(1)
	enqueue(value) {
		return this.array.push(value)
	}

	// DELETION: implemented by shift() - O(1)
	dequeue() {
		return this.array.shift()
	}

	// Clone the original array to a new one
	clone() {
		return new Queue(this.array.slice())
	}

	/**
	 * Access nth node from the last item of the queue
	 *  - O(n)
	 *
	 * @return Node
	 */
	accessNthNode(n) {
		if(n < 0) {
			console.error('n must be greater than 0')
			return
		}

		// Make a copy of original queue
		// so that the original queue doest not get mutated
		const clone = this.clone()

		while(--n !== 0) {
			clone.dequeue()
		}

		return clone.dequeue()
	}

	/**
	 * Search an item in a clone
	 *
	 * @param {Object} clone
	 * @return Node
	 */
	search(value) {
		const clone = this.clone()

		while(!clone.isEmpty()) {
			if(clone.dequeue() === value) {
				return true
			}
		}

		return false
	}
}

const myQueue = new Queue([1,2,3,4])
console.log('Peek', myQueue.peek())
console.log('2th node is', myQueue.accessNthNode(2))
console.log('Has 2', myQueue.search(2))
console.log('Has 5', myQueue.search(5))