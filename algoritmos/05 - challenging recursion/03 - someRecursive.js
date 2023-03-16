function someRecursive(arr, callback) {
    if (arr.length === 0) {
        return false
    }
    // chamar callback com 1
    if (callback(arr[0])) return true

    return someRecursive(arr.slice(1), callback)
    // chamar de forma recursiva

}

function callbackTest(input) {
    if (input > 3) {
        return true
    } else {
        return false
    }
}

console.log(someRecursive([1, 4], callbackTest))