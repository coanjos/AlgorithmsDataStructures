function power(base,exp) {
    // base case
    if (exp < 1) {
        return 1
    }

    // recursion

    return base * power(base, exp - 1)
}

console.log(power(3, 3))