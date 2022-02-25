function carregar() {
    var msg = document.querySelector('div#msg')
    var imagem = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (minuto < 10) {
        msg.innerHTML = `Agora são <strong>${hora}:0${minuto}</strong> horas`
    } else {
        msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong> horas`
    }
   

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src = 'fotoManha.png'
        document.body.style.background = '#92A8A7'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        imagem.src = 'fotoTarde.png'
        document.body.style.background = '#E6CC55'
    } else {
        //BOA NOITE
        imagem.src = 'fotoNoite.png'
        document.body.style.background = '#13151F'
    }    
}
