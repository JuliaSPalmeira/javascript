function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        img.src = 'dia.png'
        document.body.style.background = '#EFB37E'
    } else if (hora >=12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#4A5E56'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#00192E'
    }
}
