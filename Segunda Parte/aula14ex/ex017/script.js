function gerarTabuada() {
    let numb = document.getElementById('numb')
    let resp = document.getElementById('selTab')

    if (numb.value == '') {
        alert ('Por favor, digite um número!')
    } else {
        let numero = Number(numb.value)
        resp.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero*i}`
            item.value = `tab${i}`
            resp.appendChild(item)
        }
    }
}