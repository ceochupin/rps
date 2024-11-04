function getComputerChoice() {
  const choices = ['rock', 'scissors', 'paper'];
  return choices[Math.floor(Math.random() * 3)];
}

const buttons = document.querySelectorAll('.game__button');
const resetButton = document.querySelector('.game__button-reset');
const userScoreElement = document.querySelector('#userScore');
const computerScoreElement = document.querySelector('#computer-score');
const userChoiceElement = document.querySelector('.game__content-choice--user-choice');
const computerChoiceElement = document.querySelector('.game__content-choice--computer-choice');
const roundResultElement = document.querySelector('.game__result');

let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', () => playGame(button.id)));
resetButton.addEventListener('click', resetGame);

function playRound(humanChoice, computerChoice) {
  const choices = {
    rock: '✊',
    scissors: '✌️',
    paper: '✋',
  };

  userChoiceElement.textContent = choices[humanChoice];
  computerChoiceElement.textContent = choices[computerChoice];

  if (humanChoice === computerChoice) {
    return 'Ничья!';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++;
    return 'Вы выиграли!';
  } else {
    computerScore++;
    return 'Компьютер выиграл!';
  }
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  userScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  roundResultElement.textContent = result;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      roundResultElement.textContent = 'ПОБЕДА! Вы выиграли игру!';
    } else {
      roundResultElement.textContent = 'ПОРАЖЕНИЕ! Компьютер выиграл игру!';
    }
    buttons.forEach(button => (button.disabled = true));
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  userScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
  userChoiceElement.textContent = '❓';
  computerChoiceElement.textContent = '❓';
  roundResultElement.textContent = 'Игра не начата';
  buttons.forEach(button => (button.disabled = false));
}
