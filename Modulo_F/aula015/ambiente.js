let num = [5, 8, 2, 9, 3] // Vetor ou Array
num.push(1) // acrescenta o valor na última posição()
num.sort() // Coloca os elementos em ordem crescente.
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é  ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O  valor do vetor está na posição ${pos}`)
}