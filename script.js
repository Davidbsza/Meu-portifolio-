// script.js
const form = document.getElementById('form-contato');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita que a página recarregue
    alert('Mensagem enviada com sucesso!');
    form.reset(); // limpa os campos
});
