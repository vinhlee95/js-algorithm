var a = [1,2,3,4,5,6]

function find(array) {
	let sumArr = []
	const newArr = [...array]
	array.forEach((number, index) => {
		newArr.splice(index, 1)

		newArr.forEach(newNumber => {
			if(newNumber + number === 9) {
				sumArr.push([number, newNumber])
			}
		})
	})

	return sumArr
}

const result = find(a)
console.log(result)