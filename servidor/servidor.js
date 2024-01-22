import { buscarPorId, listarProdutos, inserirProdutos, atualizarProduto, apagarProduto, listarPorCategoria } from "./db.js"
import express from 'express'
import bodyParser from 'body-parser'

const PORTA = 3000
// cria um servidor de http
const server = express()

server.use(express.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    next()
})

// http://localhost:3000/
// http://192.168.25.28:3000/pessoa?nome==Thiago
// req = request = requisição
// res = response = resposta
server.get('/', async(req, res) => {
    res.status(200).send('<h1>Página Inicial zz</h1>')
    console.log(req)
})

// retorna todos os produtos do banco de dados
// GET: http://localhost:3000/produtos
server.get('/produtos', async(req, res) => {
    const produtos = await listarProdutos() 
    res.status(200).json(produtos)
    console.log('Chamou /produtos/categoria')
}) 

// lista produtos por categoria: categoria 0, 1 ou 2
// GET: http://localhost:3000/produtos/categoria/0 
server.get('/produtos/categoria/:categoria', async(req, res) => {
    // extrai da url o número da categoria: 0, 1, 2
    const {categoria} = req.params
    const produtos = await listarPorCategoria(categoria)
    res.status(200).json(produtos)
})


// apaga um produto por id
// DELETE: http://localhost:3000/produtos/1
server.delete('/produtos/:id', async(req, res) => {
    const {id} = req.params
    const retorno = await apagarProduto(id)
    return res.status(200).json({'retorno' : retorno.affectedRows == 1})
})

// salva um produto
// POST: http://localhost:3000/produtos
server.post('/produtos', async(req, res) => {
    // recebe os dados enviados por cadastrar.js
    const produto = req.body
    // salva os dados no banco
    const retorno = await inserirProdutos(produto)
    // devolve uma resposta = true or false
    return res.status(200).json({'retorno': retorno.affectedRows == 1})
})

// retorna um produto por id
// GET: http://localhost:3000/produtos/1
server.get('/produtos/:id', async(req, res) => {
    const {id} = req.params
    const produto = await buscarPorId(id) 
    res.status(200).json(produto)
})

// atualiza um produto
// PUT: http://localhost:3000/produtos
server.put('/produtos', async(req, res) => {
    const produto = req.body
    const retorno = await atualizarProduto(produto)
    res.status(200).json({'retorno' : retorno.affectedRows == 1})
})


// inicia a execução do servidor
server.listen(PORTA, () => {
    console.log(`Servidor executando na porta ${PORTA}`)
})