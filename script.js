function getComputerChoice() {
    let computerValue = Math.floor(Math.random() * 3);

    if (computerValue === 0) {
        return 'камень';
    } else if (computerValue === 1) {
        return 'ножницы';
    } else {
        return 'бумага';
    }
};

function getHumanChoice() {
    while (true) {
        let humanValue = prompt('Введите Камень, Ножницы или Бумага').toLowerCase();
        
        if ((humanValue === 'камень') || (humanValue === 'ножницы') || (humanValue === 'бумага')) {
            return humanValue;
        } else {
            alert('Неверный ввод. Введите Камень, Ножницы или Бумага');
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compiterChoice) {
    if (humanChoice === compiterChoice) {
        return console.log(`Ничья! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    } else if (humanChoice === 'камень' && compiterChoice === 'ножницы') {
        humanScore += 1;
        return console.log(`Победа! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    } else if (humanChoice === 'ножницы' && compiterChoice === 'бумага') {
        humanScore += 1;
        return console.log(`Победа! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    } else if (humanChoice === 'бумага' && compiterChoice === 'камень') {
        humanScore += 1;
        return console.log(`Победа! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    } else {
        computerScore += 1;
        return console.log(`Поражение! Человек: "${humanChoice}" | Компьютер: "${compiterChoice}"`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Раунд #${i + 1}`);
        playRound(humanSelection, computerSelection);
    }

    console.log('ИТОГ ИГРЫ:');

    if (humanScore > computerScore) {
        console.log(`ПОБЕДА! Человек - ${humanScore} : ${computerScore} - Компьютер`);
    } else if (humanScore < computerScore) {
        console.log(`ПОРАЖЕНИЕ! Человек - ${humanScore} : ${computerScore} - Компьютер`);
    } else {
        console.log(`НИЧЬЯ! Человек - ${humanScore} : ${computerScore} - Компьютер`);
    }

}

playGame();