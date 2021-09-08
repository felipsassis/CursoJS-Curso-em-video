let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
var res = document.querySelector("div#res")
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true 
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
        
    }
    else{
        alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert("Adicione valores antes de finalizar")
    }
    else{
        let total = valores.length
        let soma = 0
        let media = 0
        let valoresPr = valores.sort((a, b) => a-b) 
        for (let pos in valores){
            soma += valores[pos]
        }
        media = soma/total
        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo, temos ${total} número cadastrados.</p>`
        res.innerHTML += `<p>O menor numero digitado foi ${valoresPr[0]}</p>`
        res.innerHTML += `<p>O maior numero digitado foi ${valoresPr.reverse()[0]}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores ficou ${media}</p>`
    }
}