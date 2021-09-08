/*
    FUNÇÃO NUMERO PAR/IMPAR
function parImpar(n){
    if (n%2==0){
        return "par"
    }
    else{
        return "impar"
    }
}

let res = parImpar(11)

console.log(res)

    FUNÇÃO PARA MASC OU FEMI
function sex(x){
    if (x == "m" || x == "M"){
        return "MASCULINO"
    }
    else{
        return "FEMININO"
    }
}

let genero = sex("m")

console.log(`Gênero definido para ${genero}`)

    FUNÇÃO PARA SOMA
function soma(a=0, b=0){
    return a+b;
}
let val = soma(5)
console.log(`A soma dos valores é ${val}`)


let v = function(x){
    return x*2
}

console.log(v(5))


    FUNÇÂO PARA RESULTADO FATORIAL
    */
function fatorial(n){
    let fat = 1
    for(c = n; c > 1; c--){
        fat *= c
    }
    return fat;
}
console.log(fatorial(12));




/*
var fatorial = 5;
var resultado = fatorial;
var primeiroMulti = fatorial -1;
for (var i = primeiroMulti; i > 1; i--){
    resultado *= i;
}
console.log(resultado)
*/ 
