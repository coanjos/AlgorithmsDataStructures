class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)
        this.bubbleUp();
    }

    bubbleUp() {        
        let index = this.values.length - 1
        let element = this.values[index]

        while(index > 0) {
            let parentIndex = Math.floor((index - 1)/2)
            let parent = this.values[parentIndex]

            if(element <= parent) break

            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex            
        }
    }
}

const maxBinaryHeap = new MaxBinaryHeap()

maxBinaryHeap.insert(10)
maxBinaryHeap.insert(15)
maxBinaryHeap.insert(12)
maxBinaryHeap.insert(20)
maxBinaryHeap.insert(21)

console.log(maxBinaryHeap.values)


