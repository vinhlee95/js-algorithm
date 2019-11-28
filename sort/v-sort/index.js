/**
 * Sort algorithm code samples
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
const swap = (arr, index1, index2) => {
	const temp = arr[index1]
	arr[index1] = arr[index2]
	arr[index2] = temp
}

const bubbleSort = (arr) => {
	for(let i = 0; i <= arr.length; i ++) {
		for(let j = 0; j <= i; j++) {
			if(arr[i] < arr[j]) {
				swap(arr, i, j)
			}
		}
	}

	return arr
}

const selectionSort = (arr) => {
	for(let i = 0; i <= arr.length; i ++) {
		// set minimum to this position
		let min = i
		for(let j = i+1; j <= arr.length; j++) {
			// find the min value
			if(arr[j] < arr[min]) {
				min = j
			}
		}

		// check if min is actually the first item
		if(i !== min) {
			swap(arr, i, min)
		}
	}

	return arr
}

const array = [100, 4, 0, 18, 9, 6,2,1,7,3,12]
// console.log(bubbleSort(array))
console.log(selectionSort(array))