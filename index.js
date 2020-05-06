import linearSearch from './1.linearSearch/linearSearch'
import binarySearch from './2. binarysearch/binarysearch'
import clearnerBinarySearch from './2. binarysearch/clearnerBinarySearch'
import searchSubstring from './3.findingSubstring/basicSearchSubstring'
import bubbleSort from './4.bubbleSort/bubbleSort'
import optimizedBubbleSort from './4.bubbleSort/optimizedBubbleSort'
import selectionSort from './5.selectionSort/selectionSort'
import optimizedSelectionSort from './5.selectionSort/optimizedSelectionSort'
import insertionSort from './6.insertionSort/insertionSort'

//-----------Linear Search------------
const userNames = [
	'kitty_1',
	'hacker420',
	'batman15',
	'bored20',
	'alone_programmer',
]
const newUserName = 'alone_programmer'

console.log('-----------Linear Search Start------------')
console.log(linearSearch(userNames, newUserName))
console.log('-----------Linear Search End------------')
//-----------Linear Search End------------

//-----------Binary Search Start------------
const searchingArray = [1, 2, 3, 4, 5]
const valueForFinding = 5

console.log('-----------Binary Search Start------------')
console.log(binarySearch(searchingArray, valueForFinding))
console.log('-----------Binary Search End------------')

console.log('-----------Cleaner Binary Search Start------------')
console.log(clearnerBinarySearch(searchingArray, valueForFinding))
console.log('-----------Cleaner Binary Search End------------')
//----------- Binary Search End------------

//-----------Searching a substring in a longstring(Basic Approach) Start------------

const bigStr =
	'Mom send a flying sandle to me because I was singing and singing all day!'
const smallStr = 'sing'

console.log(
	'-----------Searching a substring in a longstring(Basic Approach) Start------------'
)
console.log(searchSubstring(bigStr, smallStr))
console.log(
	'-----------Searching a substring in a longstring(Basic Approach)------------'
)
//-----------Searching a substring in a longstring(Basic Approach) End------------

//-----------Bubble Sort Start------------

const arrayForBubbleSort = [39, 58, 47, 10, 15, 48, 20]

console.log('-----------Bubble Sort Start------------')
console.log(bubbleSort(arrayForBubbleSort))
console.log('-----------Bubble Sort End------------')
//-----------Bubble Sort End------------

//-----------Optimized Bubble Sort Start------------

console.log('-----------Optimized Bubble Sort Start------------')
console.log(optimizedBubbleSort(arrayForBubbleSort))
console.log('-----------Optimized Bubble Sort End------------')
//-----------Optimized Bubble Sort End------------

//-----------Selection Sort Start------------

const arrayForSelectionSort = [39, 58, 47, 10, 15, 48, 20]

console.log('-----------Selection Sort Start------------')
console.log(selectionSort(arrayForSelectionSort))
console.log('-----------Selection Sort End------------')
//-----------Selection Sort End------------

//-----------Optimized Selection Sort Start------------

const arrayForOptimizedSelectionSort = [39, 58, 47, 10, 15, 48, 20]

console.log('-----------Optimized Selection Sort Start------------')
console.log(optimizedSelectionSort(arrayForOptimizedSelectionSort))
console.log('-----------Optimized Selection Sort End------------')
//-----------Optimized Selection Sort End------------

//-----------Insertion Sort Start------------

const arrayForInsertionSort = [39, 58, 47, 10, 15, 48, 20]

console.log('-----------Insertion Sort Start------------')
console.log(insertionSort(arrayForInsertionSort))
console.log('-----------Insertion Sort End------------')
//-----------Insertion Sort End------------
