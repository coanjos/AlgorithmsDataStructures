function findLongestSubstring(str) {
    if (str.length === 0) {
        return 0
    }

    let frequency = {}
    let longest = 0
    let tempCount = 0
    let left = 0
    let right = 0

    while (left < str.length) {
        if (str[right] in frequency) {
            left++
            right = left
            longest = Math.max(tempCount, longest)
            tempCount = 0
            frequency = {}
        } else if (right < str.length) {
            frequency[str[right]] = (frequency[str[right]] || 0) + 1
            tempCount++
            right++
            console.log(tempCount, str[right])
        } else {
            left++
            right = left
        }
    }

    return longest
}

console.log(findLongestSubstring('abbcd'))