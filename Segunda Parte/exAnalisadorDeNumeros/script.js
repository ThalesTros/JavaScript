let num = document.getElementById('num')
let lista = document.getElementById('selNumDig')
let res = document.getElementById('res')
let valores = []

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(num, list) {
    if (list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert ('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalVal = valores.length 
        let maiorVal = valores[0] 
        let menorVal = valores [0]
        let somaVal = 0

        for (let pos in valores) {  
            somaVal += valores[pos]
            if (valores[pos] > maiorVal) 
                maiorVal = valores[pos]
            if (valores[pos] < menorVal) 
                menorVal = valores[pos]
        }

        /* 
        let somaVal = 0
        for (let i in valores) {
            somaVal += valores[i]
        }
        */

        let mediaVal = somaVal / totalVal        

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totalVal} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorVal}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorVal}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somaVal}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${mediaVal.toFixed(2)}.</p>`
    }
}
