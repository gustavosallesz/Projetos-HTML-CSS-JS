const numerocorreto = 7;

function adivinhar() {
    let numerodigitado = document.getElementById('input_numero').value;

    if (numerodigitado === "") {
        window.alert("Digite um número válido");
    } else if (numerodigitado == numerocorreto) {
        exibirMensagem("Você acertou!");
        exibirImagem("./img/correto.jpeg");
    } else if (numerodigitado < numerocorreto) {
        exibirMensagem("O número é maior");
        exibirImagem("./img/errado.jpg");
    } else {
        exibirMensagem("O número é menor");
        exibirImagem("./img/errado.jpg");
    }
}

function exibirMensagem(mensagem) {
    let mensagemElement = document.getElementById("p_mensagem");
    mensagemElement.textContent = mensagem;
    mensagemElement.className = ""; 
    mensagemElement.classList.add("mensagem");
}

function exibirImagem(caminho) {
    let imagemElement = document.getElementById("imagem");
    imagemElement.src = caminho;
    imagemElement.style.display = "block";
}
