function isSubsequence(str1, str2) {
    if (str1.length > str2.length) {
        return false
    }

    let left = 0
    let right = 0

    while(left < str1.length && right < str2.length) {
        console.log(str1[left])
        console.log(str2[right])
        if (str1[left] === str2[right]) {
            left++
            right++
        } else {
            right++
        }

        if (left === str1.length) {
            return true
        }
    }
    
    

}

console.log(isSubsequence('hello', 'hello world'))