

forms.addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (email.includes('@') && email.includes('.')) {
        alert("Mensagem enviada com sucesso!");

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});