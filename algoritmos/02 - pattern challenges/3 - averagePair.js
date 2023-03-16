function averagePair(arr, average) {
    if (arr.length < 2) {
        return false
    }
    // criar left e right
    let left = arr[0]
    let right = arr[1]
    // criar while com alguma restrição
    while(left < (arr.length - 1)) {
        let avg = (arr[left] + arr[right]) / 2

        console.log('left' + arr[left])
        console.log('right' + arr[right])
        console.log(avg)

        // fazer left caminhar só depois que right chegou ao final

        if (avg === average) {
            return true
        } else if (right <= arr.length) {
            right++
        } else {
            left++
            right = left + 1
        }
    }
    return false    
}

console.log(averagePair([1,2,3], 2.5))