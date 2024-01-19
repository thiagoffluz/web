
import { buscarPorId, listarProdutos, inserirProdutos, atualizarProduto, apagarProduto } from "./db.js"

    console.log('Buscando produto por id...')
    const produto = await buscarPorId(1)
    //console.log(produto)

    console.log('Listando todos os produtos...')
    const todos = await listarProdutos()
    //todos.forEach(item => {
    //    console.log(item)
    //});    

    console.log('Inserindo um produto...')
    const produtoBarra = {
        descricao: 'Barra de Cereais Vegano',
        categoria: 1,
        preco: 19.89,
        quantidade: 20,
        url: 'cereais.png'
    }
    /*const inseriu = await inserirProdutos(produtoBarra)
        if (inseriu.affectedRows == 1) {
            produtoBarra.id = inseriu.insertId
            console.log(produtoBarra)
        }
    */

    console.log('Atualizando produto...') 
    const produtoBarraAtualizar = {
        id: 7,
        descricao: 'Barra de Cereais Vegano ZZZZ',
        categoria: 1,
        preco: 99.99,
        quantidade: 99,
        url: 'cereais.png'
    }

    const atualizou = await atualizarProduto (produtoBarraAtualizar)
    console.log(atualizou.affectedRows == 1) // true ou false

    console.log('Apagando produto...')
    const apagou = await apagarProduto(1)
    console.log(apagou.affectedRows == 1)