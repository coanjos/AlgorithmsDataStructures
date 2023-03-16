function sameFrequency(num1, num2) {
    let first = num1.toString()
    let second = num2.toString()

    if (first.length !== second.length)
        return false

        let frequencyCounter = {}

        for(let num of first) {
            frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
        }

        console.log(frequencyCounter)

        for (let num of second) {
            if (!(num in frequencyCounter)) {
                return false
            }
            if (frequencyCounter[num] > 0) {                
                frequencyCounter[num]--
                console.log(frequencyCounter)
            } else {
                return false
            }
        }

        return true
}

console.log(sameFrequency(22, 222))