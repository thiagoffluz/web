const alerta_erro = (msg) => {
    const alerta = document.getElementById('alerta')
    alerta.hidden = false
    alerta.innerHTML = msg

}