// DAO = Data Access Object = módulo, grupo de funções, classe DAO
// ORM = Object Relational Model = modelo objeto-relacional = Sequelize


/*
    Temos 2 sistemas de modularidade
        -'antigo' : CJ5 (Common Javascrpit) => module.exports = (fun1, func2) e require ('arquivo')
        -'novo' : ESM (EcmaScript Modules) => export e import
        incluir : "type":"module", dentro de package.json
*/



async function conectar() {
    // apenas retorna a conexão, se já existir
    if(global.conexao && global.conexao.state != 'disconnected')
        return global.conexao

    // cria um objeto com suporte a promise para comunicação com o banco
    //const mysql = require('mysql2/promise')
    // mysql://usuario:senha@ip_servidor:porta/nome_base_dados
    const conexao = mysql.createConnection('mysql://root:softgraf@localhost:3306/mundoverde')
    console.log('Conectou no MySQL')
    // salva conexão no objeto global
    global.conexao = conexao
    return conexao
}

// conectar()

async function buscarPorId(id) {
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos WHERE id=?'
    const [dados] = await con.query(sql, id)
    return dados
}

async function listarProdutos() {
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos'
    const [dados] = await con.query(sql)
    return dados
}

async function inserirProdutos(produto) {
    const con = await conectar()
    const sql = 'INSERT INTO Produtos (descricao, categoria, preco, quantidade, url) VALUES (?, ?, ?, ?, ?)'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url]
    const inseriu = await con.query(sql, valores)
    return inseriu[0]
}

