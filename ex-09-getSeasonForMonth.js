/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/

function getSeasonForMonth(x) {
	if ((x > 0 && x < 13) && (typeof x == "number") && (x < 3 || x == 12)) {
		return "winter"
	}
	else if ((x > 0 && x < 13) && (typeof x == "number") && (x > 2 && x < 6)) {
		return "spring"
	}
	else if ((x > 0 && x < 13) && (typeof x == "number") && (x > 5 && x < 9)) {
		return "summer"
	}
	else if ((x > 0 && x < 13) && (typeof x == "number") && (x > 8 && x < 12)) {
		return "fall"
	}
	return false
}
const printEx09 = getSeasonForMonth(9)
console.log(printEx09)

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
