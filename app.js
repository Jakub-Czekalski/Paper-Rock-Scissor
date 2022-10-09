const playerWinsLSKey = 'playersWins';
const AIWinsLSKey = 'AIWins';

let state = {
    playerWins: Number(localStorage.getItem(playerWinsLSKey)) || 0,
    AIWins: Number(localStorage.getItem(AIWinsLSKey)) || 0,
};

const renderScore = () => {
    const pointsElement = document.querySelector('.points');

    pointsElement.innerText = state.playerWins - state.AIWins;
};

const init = () => {
    renderScore();
};

init();



// Choose option

const GAME = document.querySelector('.gameBoard');
const BATTLE = document.querySelector('.battleBoard')

GAME.addEventListener('click', (event) => {
    if (!event.target.closest('button')) return
    const OPTION = event.target.closest('button')
    const {
        type
    } = OPTION.dataset

    if (OPTION) {
        GAME.classList.add('disactive');
        BATTLE.classList.remove('disactive');
    }

    const SCISSORS = BATTLE.querySelector('.scissors-battle');
    const ROCK = BATTLE.querySelector('.rock-battle');
    const PAPER = BATTLE.querySelector('.paper-battle');

    if (type === 'scissors') {
        SCISSORS.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };

    if (type === 'rock') {
        ROCK.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };

    if (type === 'paper') {
        PAPER.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };


    const HOUSEPICK = BATTLE.querySelector('.hause-picked');
    const housePickScissors = BATTLE.querySelector('.box_two .scissors-battle');
    const housePickRock = BATTLE.querySelector('.box_two .rock-battle');
    const housePickPaper = BATTLE.querySelector('.box_two .paper-battle');

    const myArray = [
        'rock',
        'paper',
        'scissors'
    ];

    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    if (randomItem === 'rock') {
        housePickRock.classList.remove('disactive');
        BATTLE.dataset.hausePick = 'rock';
    };
    if (randomItem === 'scissors') {
        housePickScissors.classList.remove('disactive');
        BATTLE.dataset.hausePick = 'scissors';
    };
    if (randomItem === 'paper') {
        housePickPaper.classList.remove('disactive');
        BATTLE.dataset.hausePick = 'paper';
    };

    const {
        yourPick
    } = BATTLE.dataset;
    const {
        hausePick
    } = BATTLE.dataset;
    const result = BATTLE.querySelector('.result');
    const win = result.querySelector('.win');
    const lose = result.querySelector('.lose');
    const draw = result.querySelector('.draw');
    const showResult = result.classList.remove('disactive');
    const winner = () => {
        localStorage.setItem(playerWinsLSKey, state.playerWins + 1);
        state = {
            ...state,
            playerWins: state.playerWins + 1,
        };
    };
    const loser = () => {
        localStorage.setItem(AIWinsLSKey, state.AIWins + 1);
        state = {
            ...state,
            AIWins: state.AIWins + 1,
        };
    };


    const fight = () => {
        if (yourPick === 'rock') {
            showResult
            if (hausePick === 'scissors') {
                win.classList.remove('disactive');
                winner();
            } else if (hausePick === 'paper') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === 'paper') {
            showResult
            if (hausePick === 'rock') {
                win.classList.remove('disactive')
                winner();
            } else if (hausePick === 'scissors') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === 'scissors') {
            showResult
            if (hausePick === 'rock') {
                win.classList.remove('disactive')
                winner();
            } else if (hausePick === 'paper') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === hausePick) {
            showResult
            draw.classList.remove('disactive');
        };

        renderScore();
    };
    fight();

    const restartGame = () => {
        const playAgain = BATTLE.querySelector('.result button');

        playAgain.addEventListener('click', () => {
            BATTLE.querySelectorAll('div.border').forEach((div) => {
                div.classList.add('disactive');
            });
            BATTLE.querySelectorAll('.result span').forEach((span) => {
                span.classList.add('disactive');
            });
            BATTLE.classList.add('disactive');
            result.classList.add('disactive');
            GAME.classList.remove('disactive');
        });
    };

    restartGame();
});

// Rules Button
const RULESBUTTON = document.querySelector('.rules button');
const RULESPOPUP = document.querySelector('.rules_popup');

RULESBUTTON.addEventListener('click', () => {
    RULESPOPUP.classList.remove('disactive');
});


RULESPOPUP.addEventListener('click', (event) => {
    const CLOSE = RULESPOPUP.querySelector('.rules_popup-screen div button');

    if (event.target === CLOSE) {
        RULESPOPUP.classList.add('disactive')
    } else if (event.target.contains(RULESPOPUP)) {
        RULESPOPUP.classList.add('disactive')
    }
});