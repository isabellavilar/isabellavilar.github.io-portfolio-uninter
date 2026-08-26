const forms = document.querySelector('form'); // Seleciona o forms do html - contato
forms.addEventListener('submit', function(event) {
    event.preventDefault(); // Não recarregar sozinho

//Pegar o que foi digitado dentro dos campos
    let nome = document.getElementById('nome').value; 
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    //Alerta pra ver se funcionou o envio da mensagem e o email
    if (email.includes('@') && email.includes('.')) {
        alert("Mensagem enviada com sucesso!");

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});