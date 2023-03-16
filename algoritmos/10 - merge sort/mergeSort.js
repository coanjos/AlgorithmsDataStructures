const createArray = () => {
    const arr = [];

    for (let index = 0; index < 6; index++) {
        const element = Math.floor(Math.random() * 1000) + 1;

        arr.push(element)        
    }

    return arr;
}

const array = createArray();

console.log(array);

const merge = (left, right) => {
    let i = 0
    let j = 0
    let result = []

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}

const mergeSort = (array) => {
    if (array.length < 2) return array
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
    return merge(left, right)
}

console.log(mergeSort(array))

