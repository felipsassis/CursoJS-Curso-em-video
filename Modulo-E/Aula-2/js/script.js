function calcular(){
    var num = document.getElementById("numero").value
    var res = document.getElementById("res")
    res.innerHTML = `<p>COMPLETO!</p><br>`

    for (contador = 1; contador<=10; contador++){
        res.innerHTML += `<p> ${num} X ${contador} = ${parseInt(num)*contador}</p>`
    }



}