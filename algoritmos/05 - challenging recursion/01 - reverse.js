function reverse (string) {

    let reverse = []
    let strSplit = string.split('')

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return
        }

        reverse.push(helperInput[helperInput.length - 1])

        helper(helperInput.slice(0, helperInput.length - 1))
    }

    helper(strSplit)

    return reverse.join('')
}

console.log(reverse('aids'))