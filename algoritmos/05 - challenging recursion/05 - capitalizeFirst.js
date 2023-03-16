function capitalizeFirst(arr) {
    let result = []

    function helper(input) {
        if (input.length === 0) {
            return
        }

        let capital = input[0]

        result.push(capital[0].toUpperCase() + capital.slice(1))

        helper(input.slice(1))
    }

    helper(arr)

    return result
}


console.log(capitalizeFirst(['caio', 'dougra']))