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

const selectionSort = (array) => {
    for (let outer = 0; outer < array.length; outer++) {
        let minIndex = outer;

        for (let inner = outer + 1; inner < array.length; inner++) {
            if (array[inner] < array[outer]) {
                minIndex = inner;
            }            
        }
        
        let temp = array[outer];
        array[outer] = array[minIndex];
        array[minIndex] = temp;
    }
    
    console.log(array);
}

selectionSort(array);