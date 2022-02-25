function comprar() {
    let produto = prompt('Que produto você está comprando?')
    let valor = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    let dinheiro = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    prompt(`Você comprou ${produto} que custou ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. \n Deu ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${(dinheiro-valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de troco. \n Volte Sempre!`)
}