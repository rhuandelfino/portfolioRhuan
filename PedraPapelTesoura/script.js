function playGame(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerChoice').textContent = `Você escolheu: ${playerChoice}`;
    document.getElementById('computerChoice').textContent = `Computador escolheu: ${computerChoice}`;

    const result = getResult(playerChoice, computerChoice);
    document.getElementById('resultText').textContent = `Resultado: ${result}`;
}

function getResult(player, computer) {
    if (player === computer) {
        return 'Empate!';
    }
    if (
        (player === 'pedra' && computer === 'tesoura') ||
        (player === 'papel' && computer === 'pedra') ||
        (player === 'tesoura' && computer === 'papel')
    ) {
        return 'Você venceu!';
    }
    return 'Você perdeu!';
}
