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

const body = document.querySelector('body')
const gameOne = document.querySelector('.gameBoard_one');
const gameTwo = document.querySelector('.gameBoard_two')
const BATTLE = document.querySelector('.battleBoard')

let gameType = body.dataset.gameType;

const gameLogic = (event) => {
    if (!event.target.closest('button')) return
    const OPTION = event.target.closest('button')
    const {
        type
    } = OPTION.dataset;

    if (OPTION) {
        if (gameType === 'one') {
            gameOne.classList.add('disactive');
        } else if (gameType === 'two') {
            gameTwo.classList.add('disactive')
        }
        BATTLE.classList.remove('disactive');
    }

    const scissors = BATTLE.querySelector('.scissors-battle');
    const rock = BATTLE.querySelector('.rock-battle');
    const paper = BATTLE.querySelector('.paper-battle');
    const lizard = BATTLE.querySelector('.lizard-battle');
    const spock = BATTLE.querySelector('.spock-battle');

    if (type === 'scissors') {
        scissors.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };

    if (type === 'rock') {
        rock.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };

    if (type === 'paper') {
        paper.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };

    if (type === 'lizard') {
        lizard.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };

    if (type === 'spock') {
        spock.classList.remove('disactive');
        BATTLE.dataset.yourPick = type;
    };


    const hausePickScissors = BATTLE.querySelector('.box_two .scissors-battle');
    const hausePickRock = BATTLE.querySelector('.box_two .rock-battle');
    const hausePickPaper = BATTLE.querySelector('.box_two .paper-battle');
    const hausePickLizard = BATTLE.querySelector('.box_two .lizard-battle');
    const hausePickSpock = BATTLE.querySelector('.box_two .spock-battle')

    if (gameType === 'one') {
        const gameOneOptions = [
            'rock',
            'paper',
            'scissors'
        ];

        let option = gameOneOptions[Math.floor(Math.random() * gameOneOptions.length)];

        if (option === 'rock') {
            hausePickRock.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'rock';
        };
        if (option === 'scissors') {
            hausePickScissors.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'scissors';
        };
        if (option === 'paper') {
            hausePickPaper.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'paper';
        };
    } else if (gameType === 'two'){
        const gameTwoOptions = [
            'rock',
            'paper',
            'scissors',
            'lizard',
            'spock'
        ];

        let optionTwo = gameTwoOptions[Math.floor(Math.random() * gameTwoOptions.length)];

        if (optionTwo === 'rock') {
            hausePickRock.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'rock';
        };
        if (optionTwo === 'scissors') {
            hausePickScissors.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'scissors';
        };
        if (optionTwo === 'paper') {
            hausePickPaper.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'paper';
        };
        if (optionTwo === 'lizard') {
            hausePickLizard.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'lizard';
        };
        if (optionTwo === 'spock') {
            hausePickSpock.classList.remove('disactive');
            BATTLE.dataset.hausePick = 'spock';
        };
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
            if (hausePick === 'scissors' || hausePick === 'lizard') {
                win.classList.remove('disactive');
                winner();
            } else if (hausePick === 'paper' || hausePick === 'spock') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === 'paper') {
            showResult
            if (hausePick === 'rock' || hausePick === 'spock') {
                win.classList.remove('disactive')
                winner();
            } else if (hausePick === 'scissors' || hausePick === 'lizard') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === 'scissors') {
            showResult
            if (hausePick === 'paper' || hausePick === 'lizard') {
                win.classList.remove('disactive')
                winner();
            } else if (hausePick === 'rock' || hausePick === 'spock') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === 'lizard') {
            showResult
            if (hausePick === 'spock' || hausePick === 'paper') {
                win.classList.remove('disactive')
                winner();
            } else if (hausePick === 'rock' || hausePick === 'scissors') {
                lose.classList.remove('disactive');
                loser();
            }
        };

        if (yourPick === 'spock') {
            showResult
            if (hausePick === 'scissors' || hausePick === 'rock') {
                win.classList.remove('disactive')
                winner();
            } else if (hausePick === 'lizard' || hausePick === 'paper') {
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
            if (gameType === 'one') {
                gameOne.classList.remove('disactive');
            } else if (gameType === 'two') {
                gameTwo.classList.remove('disactive');
            };
        });
    };

    restartGame();
};

gameOne.addEventListener('click', gameLogic);
gameTwo.addEventListener('click', gameLogic);

// Rules Button
const RULESBUTTON = document.querySelector('.rules button');
const RULESPOPUP = document.querySelector('.rules_popup');

RULESBUTTON.addEventListener('click', () => {
    RULESPOPUP.classList.remove('disactive');
    if (gameType === 'two') {
        RULESPOPUP.querySelector('.rules_img').src = "/images/image-rules-bonus.svg";
    }
});


RULESPOPUP.addEventListener('click', (event) => {
    const CLOSE = RULESPOPUP.querySelector('.rules_popup-screen div button');

    if (event.target === CLOSE) {
        RULESPOPUP.classList.add('disactive')
    } else if (event.target.contains(RULESPOPUP)) {
        RULESPOPUP.classList.add('disactive')
    }
});