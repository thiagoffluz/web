function somar(n1, n2) {
    return n1 + n2;
}

const s1 = somar(1,2)
console.log(s1);

const somaArrow = (n1, n2) => {
    return n1 + n2
}

const s2 = somaArrow(1, 2)
console.log(s2)

//                   0 1 2 3 4 ... 
const arrIntegers = [1,2,3,4,5,6,7,8,9,10,11]
console.log(arrIntegers.length)
console.log(arrIntegers[0])

const arrStrings = ['Rafael', 'Gabriel', 'Manoel']
const arrProfissao = ['Programador', 'Contador', 'Cantor']
const i = 2
console.log(`Nome: ${arrStrings[i]} Profissão: ${arrProfissao[i]}`)

// Percorrendo string com FOR
for (let i = 0; i<arrStrings.length; i++) {
    console.log(arrStrings[i])
}

// Usando foreach
console.log('------- foreach -------')
arrStrings.forEach((nome) => {
    console.log(nome)
})

arrIntegers.forEach((num) => {
    console.log(num+2)
})

console.log('------- maps -------')
const novoArr = arrIntegers.map(item => {
    return item + 2
})
console.log(novoArr)

// criando objets 35

const pessoal = {
    nome: 'Rafel',
    idade: 23,
    altura: 1.7
}

const pessoa2 = {
    nome: 'Gabriel',
    idade: 17,
    altura: 1.80}

const pessoa3 = {
    nome: 'Manoel',
    idade: 23,
    altura: 1.7
}

const pessoas = [pessoal, pessoa2, pessoa3]
// adicioa pessoa 3 no final do array
pessoas.push(pessoa3)
console.log(pessoas)
console.log(pessoas[0].nome)

// filtrando por idade
const maiores = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(maiores)