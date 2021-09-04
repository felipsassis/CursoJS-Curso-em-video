function calcular(){
    var num = document.getElementById("numero").value
    var contador = 1
    var res = document.getElementById("res")
    res.innerHTML = `<p>COMPLETO!</p><br>`

    while(contador <= 10){
        res.innerHTML += `<p> ${num} X ${contador} = ${parseInt(num)*contador}</p>`
        contador++;
    }
}













/*var c = 1
var numero = 2
while( c <= 10){
    console.log(`${numero} X ${c} = ${c*numero}`)
    c++;
}*/ 

