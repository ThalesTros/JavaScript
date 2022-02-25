let num = [5, 8, 2, 9, 3, 4, 2, 14, 65, 34, 98]

//console.log(num) - Maneira padrão de mostrar um array na tela

/* Maneira sem lógica de mostrar um array na tela
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])
console.log(num[7])
console.log(num[8])
console.log(num[9])
console.log(num[10])
*/

//Maneira de mostrar um array na tela com lógica

for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}