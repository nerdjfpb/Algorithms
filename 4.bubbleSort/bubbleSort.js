const bubbleSort = (arr) => {
	let stepCount = 0

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
			stepCount++
		}
	}
	console.log(`Step Count: ${stepCount}`)
	return arr
}

export default bubbleSort
