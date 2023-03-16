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

const bubbleSort = (array) => {
    let houveTroca = true;

    while(houveTroca) {
        houveTroca = false;

        for (let index = 0; index < array.length - 1; index++) {
            if (array[index] > array[index + 1]) {
                let temp = array[index]

                array[index] = array[index + 1]
                array[index + 1] = temp

                houveTroca = true
            }            
        }
    }

    console.log(array)
}

bubbleSort(array);