/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/
function justOneString(x,y) {
	if ((typeof x == "string") && (typeof y == "string")) {
		return false
	}
	else if ((typeof x !== "string") && (typeof y !== "string")) {
		return false
	}
	return true  
}
const printEx10 = justOneString(6, "dotron")
console.log(printEx10)

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
