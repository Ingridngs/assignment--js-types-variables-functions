/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/
function isVowel(characterX) {
	if (characterX == "a" || characterX == "e" || characterX == "i" 
		|| characterX == "o" || characterX == "u" || characterX == "y"
		|| characterX == "A" || characterX == "E" || characterX == "I" 
		|| characterX == "O" || characterX == "U" || characterX == "Y") {
		return true
	}
	return false
}



const printInconsole = isVowel()
console.log (printInconsole)

 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
