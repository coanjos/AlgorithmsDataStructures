function minSubArrayLen(arr, num) {
    let minLen = 1
    let tempSum = 0
    let currentCount = 1

    for(let i = 0; minLen <= arr.length; i++) {
        if (currentCount <= minLen) {
            tempSum += arr[i]
            currentCount++
        } else {
            tempSum = tempSum - arr[i - minLen] + arr[i]
            // console.log('soma antes: ', tempSum)
            // console.log('a debitar: ', arr[i - minLen])
            // console.log('a colocar: ', arr[i])
        }

        if(tempSum >= num) {
            return minLen
        }

        //console.log(tempSum)

        if(i === (arr.length - 1)) {
            minLen++
            i = -1
            currentCount = 1
            console.log('-----')
            tempSum = 0
        }
    }

    return 0

}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))