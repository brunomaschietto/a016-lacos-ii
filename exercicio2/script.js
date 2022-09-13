let numero = +prompt('Digite um número:')
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Tabuada do ${numero}`)
for (i in tabuada) {
    console.log(`${numero} x ${tabuada[i]} : ${numero * (tabuada[i])}`)
}

