var strStr = function(string, substring) {
    if (substring === "") return 0

    const prefixTable = buildPrefixTable(substring)

    let i = 0
    let j = 0

    while(i < string.length && j < substring.length) {
        if (string[i]===substring[j]) {
            i+=1
            j+=1
        } else if (j>0) {
            j=prefixTable[j-1]
        } else {
            i+=1
        }

        if(j === substring.length) {
            return i-j
        }

        return j === substring.length ? i-j : -1
    }
}

function buildPrefixTable(s) {
    const table = [0]
    let i = 1
    let j = 0

    while (i<s.length) {
        if(s[i]===s[j]) {
            j+=1
            table[i]=j
            i+=1
        } else if (j>0) {
            j=table[j-1]
        } else {
            table[i] = 0
            i+=1
        }
    }

    return table
}