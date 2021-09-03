function carregar(){
    var bg = document.getElementById("fundo")
    var msg = document.getElementById("hora")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        msg.innerHTML = msg.innerHTML + "<br><p>Bom dia !!!</p>"
        img.src = "/Exercícios/exe001/imagens/manha.jpg"
        document.body.style.background = "#eec87c"
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML = msg.innerHTML + "<br><p>Boa Tarde !!!</p>"
        img.src = "/Exercícios/exe001/imagens/tarde.jpg"
        document.body.style.background = "#88555d"
    }
    else{
        msg.innerHTML = msg.innerHTML + "<br><p>Boa Noite !!!</p>"
        img.src = "/Exercícios/exe001/imagens/noite.jpg"
        document.body.style.background = "#622236"
    }
}