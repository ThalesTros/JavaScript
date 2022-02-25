function contar() {
    let numIni = document.getElementById('numIni')
    let numFim = document.getElementById('numFim')
    let numPas = document.getElementById('numPas')
    let resp = document.getElementById('resp')

    if (numIni.value == '' || numFim.value == '' || numPas.value == '') {
        resp.innerHTML = 'Impossível Contar! Faltam Dados!'
    } else {
        resp.innerHTML = 'Contando: <br>'
        let inicio = Number(numIni.value)
        let fim = Number(numFim.value)
        let passo = Number(numPas.value)

        if (passo <= 0) {
            alert('Passo Inválido! Considerando PASSO 1!')
            passo = 1
        }

        if (inicio < fim) {
            //Contagem Crescente
            for (let i = inicio; i <= fim; i += passo) {
            resp.innerHTML += `${i} &#x1F449; `
        } 
        } else {
            //Contagem Decrescente 
            for (let i = inicio; i >= fim; i -= passo) {
                resp.innerHTML += `${i} &#x1F449; `
            }
        }
        resp.innerHTML += `&#x1F3C1;` 
    }
}