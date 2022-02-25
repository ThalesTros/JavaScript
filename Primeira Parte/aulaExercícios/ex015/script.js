function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtAno')
    let res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert(`[ERRO]Verifique os dados e tente novamente!`)
    } else {
        let fSex = document.getElementsByName('radSex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'fotoBebeHomem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotoJovemHomem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'fotoAdultoHomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoIdosoHomem.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'fotoBebeMulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotoJovemMulher.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'fotoAdultoMulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoIdosoMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}