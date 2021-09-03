function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("p#res")
    if (fAno.value.length == 0 || fAno.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked){
            genero = "Masculino"
            if( idade >= 0 && idade < 10){
                res.innerHTML = `<p> Você é uma criança</p>`
                img.setAttribute("src", "criancah.jpg")
            }
            else if (idade < 21){
                res.innerHTML = `<p> Você é um Jovem</p>`
                img.setAttribute("src", "adolescenteh.jpg")
            }
            else if (idade < 50){
                res.innerHTML = `<p> Você é um Adulto</p>`
                img.setAttribute("src", "homem.jpg")
            }
            else{
                res.innerHTML = `<p> Você é um Idoso</p>`
                img.setAttribute("src", "idosoh.jpg")
            }
        }

        else if (fsex[1].checked){
            genero = "Feminino"
            if( idade >= 0 && idade < 10){
                res.innerHTML = `<p> Você é uma criança</p>`
                img.setAttribute("src", "criançam.jpg")
            }
            else if (idade < 21){
                res.innerHTML = `<p> Você é uma Jovem</p>`
                img.setAttribute("src", "adolescentem.jpg")
            }
            else if (idade < 50){
                res.innerHTML = `<p> Você é um Adulto</p>`
                img.setAttribute("src", "mulher.jpg")
            }
            else{
                res.innerHTML = `<p> Você é um Idoso</p>`
                img.setAttribute("src", "idosom.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML += `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}