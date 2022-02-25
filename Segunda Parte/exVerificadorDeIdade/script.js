function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.querySelector('#txtnasc') 
    let res = document.querySelector ('#res')

    if (nasc.value.length == 0 || nasc.value > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(nasc.value)
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotoBebeHomem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotoJovemHomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoAdultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoIdosoHomem.png')
            }

        } else if (sex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotoBebeMulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotoJovemMulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoAdultoMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoIdosoMulher.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos <strong>${gen}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}