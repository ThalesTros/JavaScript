function parOuImpar (n) {
    if (n % 2 == 0) {
        return `Par!`
    } else {
        return `ímpar!`
    }
}

let res = parOuImpar(7)
console.log(res)

console.log(parOuImpar(6))