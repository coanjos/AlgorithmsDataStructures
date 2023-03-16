function capitalizeWords(arr) {
    let result = []

    function helper(input) {
        if (input.length === 0) {
            return
        }

        let capital = input[0]

        result.push(capital.toUpperCase())

        helper(input.slice(1))
    }

    helper(arr)

    return result
}


console.log(capitalizeFirst(['caio', 'dougra']))