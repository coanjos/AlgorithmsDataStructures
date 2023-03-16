function areThereDuplicates(...args) {
    // criar obj frequencia
    const frequencyCounter = {}
    // iterar args e contar
    for(val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    for(key in frequencyCounter) {
        if(frequencyCounter[key] > 1) {
            return true
        }
    }

    return false

}

