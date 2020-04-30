const cleanerBinarySearch = (searchingArray, valueForFinding) => {
	let start = 0,
		end = searchingArray.length - 1,
		middle = Math.floor((start + end) / 2)

	while (searchingArray[middle] !== valueForFinding && start <= end) {
		valueForFinding < searchingArray[middle]
			? (end = middle - 1)
			: (start = middle + 1)

		middle = Math.floor((start + end) / 2)
	}
	return searchingArray[middle] === valueForFinding ? middle : -1
}

export default cleanerBinarySearch
