// DAO = Data Access Object = módulo, grupo de funções, classe DAO
// ORM = Object Relational Model = modelo objeto-relacional = Sequelize

import mysql from 'mysql2/promise'

export async function conectar() {
    // apenas retorna a conexão, se já existir
    if(global.conexao && global.conexao.state != 'disconnected')
        return global.conexao

    // cria um objeto com suporte a promise para comunicação com o banco
    // mysql://usuario:senha@ip_servidor:porta/nome_base_dados
    const conexao = mysql.createConnection('mysql://root:softgraf@localhost:3306/mundoverde')
    console.log('Conectou no MySQL')
    // salva conexão no objeto global
    global.conexao = conexao
    return conexao
}

// conectar()

export async function buscarPorId(id) {
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos WHERE id=?'
    const [dados] = await con.query(sql, id)
    return dados
}

export async function listarProdutos() {
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos'
    const [dados] = await con.query(sql)
    return dados
}

export async function inserirProdutos(produto) {
    const con = await conectar()
    const sql = 'INSERT INTO Produtos (descricao, categoria, preco, quantidade, url) VALUES (?, ?, ?, ?, ?)'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url]
    const inseriu = await con.query(sql, valores)
    return inseriu[0]
}

export async function atualizarProduto(produto) {
    const con = await conectar()
    const sql = 'UPDATE Produtos SET descricao=?, categoria=?, preco=?, quantidade=?, url=? WHERE id=?'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url, produto.id]
    const retorno = await con.query(sql, valores)
    return retorno[0]
}

export async function apagarProduto(id) {
    const con = await conectar()
    const sql = 'DELETE FROM Produtos WHERE id=?'
    const retorno = await con.query(sql, id)
    return retorno[0]
} 

//export = {buscarPorId, listarProdutos, inserirProdutos}