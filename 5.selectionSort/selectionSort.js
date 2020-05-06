const selectionSort = (arr) => {
	let lowest,
		count = 0
	for (let i = 0; i < arr.length; i++) {
		lowest = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j
			}
		}
		;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
		count++
	}
	console.log(`Swap ${count}`)

	return arr
}

export default selectionSort
