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

const array = [6,2,1,7,3,12]
console.log(bubbleSort(array))