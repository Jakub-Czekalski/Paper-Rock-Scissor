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

// Choose option

const GAME = document.querySelector('.gameBoard');
const BATTLE = document.querySelector('.battleBoard')

GAME.addEventListener('click', (event) => {
    if (!event.target.closest('button')) return
    const OPTION = event.target.closest('button')
    const {type} = OPTION.dataset

    if (OPTION) {
        GAME.classList.add('disactive');
        BATTLE.classList.remove('disactive');
    }

    const SCISSORS = BATTLE.querySelector('.scissors-battle');
    const ROCK = BATTLE.querySelector('.rock-battle');
    const PAPER = BATTLE.querySelector('.paper-battle');

    if (type === 'scissors'){
        SCISSORS.classList.remove('disactive')
    };

    if (type === 'rock'){
        ROCK.classList.remove('disactive')
    };

    if (type === 'paper'){
        PAPER.classList.remove('disactive')
    };
});