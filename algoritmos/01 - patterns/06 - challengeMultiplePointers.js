function uniqueValues(arr) {
    if(arr.length <= 0) {
        return 0
    }
    // iniciar i = 0
    let i = 0
    // iniciar j = 1
    let j = 1
    // i é o valor real, j é o que procura valores diferentes
    const arrayUniques = []
    // dar push numa array com i
    arrayUniques.push(arr[i])
    // verifica enquanto i === j, pula j pra próxima. qdo for direfente, i = j
    while(j < arr.length) {
        if(arr[i] === arr[j]) {
            j++;
        } else {
            i = j
            arrayUniques.push(arr[i])
        }
    }

    return arrayUniques.length
}

console.log(uniqueValues([]))