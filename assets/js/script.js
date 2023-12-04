function adicionarNaTabela() {

    // salva os valores do formulário em variáveis
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let fone = document.getElementById('fone')
    let profissao = document.getElementById('profissao')

    if (nome.value == '' || email.value == '') {
        return false
    }
    
    let tabela = document.getElementById('tabela') 
    // numero de linhas da tabela
    let tamanhoTabela = tabela.rows.length

    // insere uma linha abaixo
    let linha = tabela.insertRow(tamanhoTabela)

    let celula1 = linha.insertCell(0)
    let celula2 = linha.insertCell(1)
    let celula3 = linha.insertCell(2)
    let celula4 = linha.insertCell(3)
    let celula5 = linha.insertCell(4)
    let celula6 = linha.insertCell(5)
    
    linha.id = tamanhoTabela

    // preenche as células da linha
    celula1.innerHTML = tamanhoTabela
    celula2.innerHTML = nome.value
    celula3.innerHTML = email.value
    celula4.innerHTML = fone.value
    celula5.innerHTML = profissao.value

    // cria um botão para remover a linha atual
    let btnCodigo = "<button class = 'botao-remover' onclick='removerDaTabela(this)'>Remover</button>"
    celula6.innerHTML = btnCodigo

    // limpa os campos de inserção de dados
    nome.value = ''
    email.value = ''
    fone.value = ''
    profissao.value = ''


    // retorna false para impedir 
    return false
}

function removerDaTabela(botao) {

    //parentNode é o elemento pai de uma tag HTML
    //neste caso temos uma Tabela -> dentro temos uma Linha -> dentro temos uma célula -> dentro temos um Botão
    //Table -> rows (id) -> cells -> button
    // o pai do botão é a célula onde este está contido.
    // o pai da célula é a linha da tabela onde a célula está contida

    // toda linha tem um id
    // "    Esta é o ardivo da linha (tr)
    let id = botao.parentNode.parentNode.id
    // A partir dp elemento linha eu obtenho o elemento linha (tr)
    let linha = document.getElementById(id) // <tr> </tr>
    // A partir do elemento linha eu obtenho o elemento pai (tabela)
    let tabela = linha.parentElement
    // A partir da tabela, solicitado para remover o elemento filho: linha
    tabela.removeChild(linha)

}
