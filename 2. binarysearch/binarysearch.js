const binarySearch = (searchingArray, valueForFinding) => {
	let start = 0
	let end = searchingArray.length - 1
	let middle = Math.floor((start + end) / 2)

	while (searchingArray[middle] !== valueForFinding && start <= end) {
		if (valueForFinding < searchingArray[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
		middle = Math.floor((start + end) / 2)
	}

	if (searchingArray[middle] === valueForFinding) {
		return middle
	}

	return -1
}

export default binarySearch
