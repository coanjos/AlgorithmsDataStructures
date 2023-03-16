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

const pivot = (array, start=0, end=array.length - 1) => {
    const swap = (array, i, j) => {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    const pivot = array[start];
    let swapIdx = start;
    
    for (let i = start + 1; i < array.length; i++){
        if (array[i] < pivot) {
            swapIdx++;
            swap(array, swapIdx, i)
        }     
    }

    swap(array, start, swapIdx)

    return swapIdx
}

const quickSort = (arr, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }

    return arr
}

quickSort(array)

console.log(array)