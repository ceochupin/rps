function getComputerChoice() {
    let computerValue = Math.floor(Math.random() * 3);
    if (computerValue === 0) return 'камень';
    if (computerValue === 1) return 'ножницы';
    return 'бумага';
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => playGame(button)));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compiterChoice) {
    if (humanChoice === compiterChoice) {
        console.log(`Ничья! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    } else if (
        (humanChoice === 'камень' && compiterChoice === 'ножницы') ||
        (humanChoice === 'ножницы' && compiterChoice === 'бумага')||
        (humanChoice === 'бумага' && compiterChoice === 'камень')
    ) {
        humanScore += 1;
        console.log(`Победа! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    } else {
        computerScore += 1;
    console.log(`Поражение! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    }
}

function playGame(button) {
    const humanSelection = button.id;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    console.log(`Текущий счет: Человек - ${humanScore} : ${computerScore} - Компьютер`);

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            console.log(`ПОБЕДА! Человек - ${humanScore} : ${computerScore} - Компьютер`);
        } else {
            console.log(`ПОРАЖЕНИЕ! Человек - ${humanScore} : ${computerScore} - Компьютер`);
        }
        humanScore = 0;
        computerScore = 0;
    }

}