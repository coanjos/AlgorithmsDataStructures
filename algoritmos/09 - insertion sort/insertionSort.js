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

const insertionSort = (array) => {

    for (let i = 1; i < array.length; i++) {
        let valorAtual = array[i];

        let j = i - 1;

        while(j >= 0 && array[j] > valorAtual) {
            array[j + 1] = array[j]
            j--
        }

        array[j + 1] = valorAtual        
    }
    
    console.log(array);
}

insertionSort(array);