function verificar() {
    const nome = document.getElementById('name')
    const sexo = document.getElementsByName('radSex')
    const txtPeso = document.getElementById('pesoDig')
    const peso = Number(txtPeso)
    const txtAltura = document.getElementById('alturaDig')
    const altura = Number(txtAltura)
    let imc = peso/altura**2
    if (nome.value.length == 0||peso <= 0|| altura <= 0){
        res.innerHTML = `[ERRO] Verifique os dados e tente novamente!`
    } else {
        res.innerHTML = imc
    }
}
