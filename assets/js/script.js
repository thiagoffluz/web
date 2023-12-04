var ind_img = 1
var opacidade = 1
var reduzir = true
var id_mover, id_mudar, id_trocar

function trocar_imagem() {
    ind_img++;
    if(ind_img > 7) {
        ind_img = 1
    }
    const imagem = document.getElementById('imagem')
    imagem.src="https://softgraf.com/img/img" + ind_img + ".jpg"
}

function mudar_opacidade() {
    const imagem = document.getElementById('imagem')
    if(opacidade <= 0 ) {
        reduzir = false
    } else if (opacidade >= 1) {
        reduzir = true
    }
    if(reduzir) {
        opacidade -= 0.1
    } else {
        opacidade += 0.1
    }
    imagem.style.opacity = opacidade
}

function mover_imagem() {
    const imagem = document.getElementById('imagem')
    let margem_esq = parseInt(imagem.style.marginLeft) // " " -> NaN (not a number)
    let largura_tela = window.innerWidth
    let largura_img = imagem.clientWidth

    if(Number.isNaN(margem_esq)) {
        margem_esq = 50
    } else {
        margem_esq +=50
    }
    if(margem_esq > largura_tela) {
        margem_esq = -largura_img
    }

    imagem.style.marginLeft = margem_esq + 'px'
    //console.log(parseInt('200px'))
}

const auto_trocar = () => {
    id_trocar = setInterval('trocar_imagem()', 1000) // milissegundos
}

const auto_opacidade = () => {
    id_mudar = setInterval('mudar_opacidade()', 100) // milissegundos
}

const auto_mover = () => {
    id_mover = setInterval('mover_imagem()', 200) // milissegundos
}

document.addEventListener('DOMContentLoaded', () => { 
    auto_mover()
    auto_opacidade()
    auto_trocar()

    document.getElementById("btn_limpar").onclick = () => {
        clearInterval(id_mover)
        clearInterval(id_mudar)
        clearInterval(id_trocar)
    }
})