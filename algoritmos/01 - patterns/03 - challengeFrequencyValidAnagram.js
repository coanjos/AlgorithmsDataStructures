function isAnagram(string1, string2) {
    // nao tem o mesmo tamanho? não é anagrama
    if (string1.length !== string2.length) {
        return false
    }

    // criar objectos vazios para contar frequencia
    let frequencyString1 = {}
    let frequencyString2 = {}

    // contar a frequencia string 1
    for(let letter of string1) {
        frequencyString1[letter] = (frequencyString1[letter] || 0) + 1
    }

    // contar a frequencia string 2
    for(let letter of string2) {
        frequencyString2[letter] = (frequencyString2[letter] || 0) + 1
    }

    // comparar as frequências para saber se é anagrama
    for(let key in frequencyString1) {
        if(!(key in frequencyString2)) {
            return false
        }
        if (frequencyString1[key] !== frequencyString2[key]) {
            return false
        }
    }

    return true
    // precisa ser O(n)
}

console.log(isAnagram('dougras', 'sadougr'))