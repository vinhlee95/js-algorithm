/**
 * Stacks code examples
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
class Stack {
	constructor(array) {
		this.array = array
	}

	isEmpty() {
		return this.array.length === 0
	}

	/**
	 * PEEKING
	 *  - return last el in the stack without removing it from the data structure
	 *  - Time complexity: O(1)
	 *
	 * @return Node
	 */
	peek() {
		return this.array[this.array.length - 1]
	}

	// INSERTING: implemented by push() - O(1)

	// DELETION: implemented by pop() - O(1)
	delete() {
		return this.array.pop()
	}

	// Clone the original array to a new one
	clone() {
		return new Stack(this.array.slice())
	}

	/**
	 * Access nth node from the last item of the stack
	 *  - O(n)
	 *
	 * @return Node
	 */
	accessNthNode(n) {
		if(n < 0) {
			console.error('n must be greater than 0')
			return
		}

		// Make a copy of original stack
		// so that the original stack doest not get mutated
		const stackClone = this.clone()

		while(--n !== 0) {
			stackClone.delete()
		}

		return stackClone.delete()
	}

	/**
	 * Search an item in a stack
	 *
	 * @param {Object} value
	 * @return Node
	 */
	search(value) {
		const stackClone = this.clone()

		while(!stackClone.isEmpty()) {
			if(stackClone.delete() === value) {
				return true
			}
		}

		return false
	}
}

const myStack = new Stack([1,2,3,4])
console.log('Peek', myStack.peek())
console.log('2th node from the last is', myStack.accessNthNode(2))
console.log('Has 2', myStack.search(2))
console.log('Has 5', myStack.search(5))