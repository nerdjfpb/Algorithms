import linearSearch from './1.linearSearch/linearSearch'
import binarySearch from './2. binarysearch/binarysearch'
import clearnerBinarySearch from './2. binarysearch/clearnerBinarySearch'

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
