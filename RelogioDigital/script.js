function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Adicionar zero à esquerda para números menores que 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Exibir o relógio no formato HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Chamada inicial para exibir o relógio assim que a página carrega
updateClock();
