function submitForm() {
    // Simula o envio do formulário (pode ser substituído por uma chamada AJAX real)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você pode adicionar validações adicionais antes de prosseguir para a próxima página
    if (username && password) {
        // Redireciona para a próxima página ou realiza a ação desejada
        alert('Login realizado com sucesso! Redirecionando...');
         window.location.href= "index_menu.html" 
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function clearForm() {
    // Limpa os campos de usuário e senha
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
