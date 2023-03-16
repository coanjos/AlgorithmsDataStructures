let arr = [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9, [1000, 2, [333]]],
    [10, 11, 12, 13, 14, 15]
];

function flatten(arr) {
    let result = []

    function helper(input) {
        if (input.length === 0) {
            return
        }

        if (Array.isArray(input[0])) {
            helper(input[0])
        } else {
            result.push(input[0])
        }

        helper(input.slice(1))
    }

    helper(arr)

    return result
}

console.log(flatten(arr))