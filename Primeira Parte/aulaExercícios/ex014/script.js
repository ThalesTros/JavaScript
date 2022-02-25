function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotoManha.png'
        document.body.style.background = '#8EEAEA'
    } else if (hora >= 12 && hora <=18) {
        //BOA TARDE
        img.src = 'fotoTarde.png'
        document.body.style.background = '#2B5D05'
    } else {
        //BOA NOITE
        img.src = 'fotoNoite.png'
        document.body.style.background = '#1D1B31'
    }
}