let num = [5,8,2,9,3]
num.push(1)
num.push(15)
num.sort()
console.log(`Nosso vetor é o ${num}, e ele possui ${num.length} elementos.`)
    for(let c in num){
        console.log(`A posição ${c} tem o valor ${num[c]}`)
    }

console.log(num.indexOf(15))
