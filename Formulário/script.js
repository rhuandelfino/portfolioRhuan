// Função de validação do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário até que a validação seja feita
  
    // Obtendo os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Selecionando o elemento de exibição de mensagem
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = ''; // Limpando mensagens anteriores
  
    // Verificação se os campos estão preenchidos
    if (!name || !email || !message) {
      formMessage.textContent = 'Por favor, preencha todos os campos.';
      formMessage.classList.add('error');
      return;
    }
  
    // Validação de formato de e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Por favor, insira um e-mail válido.';
      formMessage.classList.add('error');
      return;
    }
  
    // Se passar pela validação
    formMessage.textContent = 'Formulário enviado com sucesso!';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
  
    // Limpar os campos após envio
    document.getElementById('contact-form').reset();
  });
  