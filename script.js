// numero aleatorio
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 10; // Número de tentativas
let isGameOver = false;

// Elementos HTML
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const messageDisplay = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

// Função para verificar o palpite do jogador
function checkGuess() {
    if (isGameOver) {
        return;
    }

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Por favor, insira um número válido entre 1 e 100.", "red");
    } else if (guess === randomNumber) {
        setMessage(`Parabéns! Você acertou o número ${randomNumber}!`, "green");
        isGameOver = true;
    } else {
        attempts--;
        attemptsDisplay.textContent = attempts;
        const hint = guess < randomNumber ? "maior" : "menor";
        setMessage(`Tente novamente. O número é ${hint} que ${guess}.`, "black");

        if (attempts === 0) {
            setMessage(`Fim de jogo. O número correto era ${randomNumber}.`, "red");
            isGameOver = true;
        }
    }

    guessInput.value = "";
}

// Função para definir a mensagem e a cor do texto
function setMessage(text, color) {
    messageDisplay.textContent = text;
    messageDisplay.style.color = color;
}

// Adicionar evento de clique ao botão "Verificar"
checkButton.addEventListener("click", checkGuess);
