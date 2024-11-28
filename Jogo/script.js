// Variáveis globais
let randomNumber = Math.floor(Math.random() * 50) + 1; // Gera número aleatório entre 1 e 100
let attemptsLeft = 10; // Total de tentativas
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts-left");

// Função para verificar o palpite do usuário
document.getElementById("check-button").addEventListener("click", () => {
  const userGuess = Number(document.getElementById("guess-input").value); // Obtém o palpite do usuário

  // Verifica se o número está dentro do intervalo válido
  if (userGuess < 1 || userGuess > 50 || isNaN(userGuess)) {
    feedback.textContent = "Por favor, insira um número entre 1 e 50.";
    feedback.style.color = "red";
    return;
  }

  // Verifica se o palpite está correto
  if (userGuess === randomNumber) {
    feedback.textContent = "Parabéns! Você acertou o número 🎉.";
    feedback.style.color = "green";
    attemptsDisplay.textContent = "--";
    document.getElementById("check-button").disabled = true; // Desativa o botão
  } else {
    attemptsLeft--;
    attemptsDisplay.textContent = attemptsLeft;

    if (attemptsLeft === 0) {
      feedback.textContent = `Você perdeu! O número era ${randomNumber}.`;
      feedback.style.color = "red";
      document.getElementById("check-button").disabled = true; // Desativa o botão
    } else {
      feedback.textContent = userGuess < randomNumber
        ? "O número é maior!"
        : "O número é menor!";
      feedback.style.color = "orange";
    }
  }
});

// Reiniciar o jogo (opcional)
function restartGame() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  attemptsLeft = 10;
  feedback.textContent = "";
  attemptsDisplay.textContent = attemptsLeft;
  document.getElementById("check-button").disabled = false;
  document.getElementById("guess-input").value = "";
}
