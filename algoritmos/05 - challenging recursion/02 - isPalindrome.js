function isPalindrome(string) {
	let result = ''

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return helperInput
		}

		return helper(helperInput.slice(1)) + helperInput[0]
	}

	result = helper(string)

	if (result === string) {
		return true
	} else {
		return false
	}
}

console.log(isPalindrome('tacocat'))