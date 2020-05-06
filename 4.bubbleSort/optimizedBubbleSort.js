const optimizedBubbleSort = (arr) => {
	let noSwap
	let stepCount = 0

	for (let i = arr.length; i > 0; i--) {
		noSwap = true
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				noSwap = false
			}
			stepCount++
		}

		if (noSwap) break
	}
	console.log(`Step Count: ${stepCount}`)
	return arr
}

export default optimizedBubbleSort
