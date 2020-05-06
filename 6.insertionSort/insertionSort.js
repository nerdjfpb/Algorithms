const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i],
			swappingValue
		for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j]
			swappingValue = arr[j + 1]
		}
		arr[j + 1] = currentValue
	}

	return arr
}

export default insertionSort
