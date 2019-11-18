/**
 * Search code examples
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
/**
 * Linear search
 * TC: O(n)
 *
 * @param {Array} list
 * @param {Number} val search term
 * @return Number
 */
function linearSearch(list, val) {
	let value = null
	for(let i = 0; i < list.length; i++) {
		if(list[i] === val) {
			value = val
			break
		}
	}

	return value
}

// console.log(linearSearch([1,2,3,4,5], 6))

/**
 * Binary search
 *
 * @param {Array} list
 * @param {Number} val search term
 */
function binarySearch(list, val) {
	let lowIndex = 0
	let highIndex = list.length - 1

	while(lowIndex < highIndex) {
		// Check middle index
		const middleIndex = Math.floor((lowIndex + highIndex) / 2)
		if(list[middleIndex] === val) {
			return list[middleIndex]
		} else if(list[middleIndex] > val) {
			highIndex = middleIndex
		} else {
			lowIndex = middleIndex
		}
	}

	return -1
}

console.log(binarySearch([1,3,7,9, 11, 13, 15, 16, 19,21], 19))