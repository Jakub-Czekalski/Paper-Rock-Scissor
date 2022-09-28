const RULESBUTTON = document.querySelector('.rules button');
const RULESPOPUP = document.querySelector('.rules_popup');

RULESBUTTON.addEventListener('click', () => {
    RULESPOPUP.classList.remove('disactive');
});

const CLOSEPOPUP = (event) => {
    const CLOSE = RULESPOPUP.querySelector('.rules_popup-screen div button');

    if (event.target === CLOSE) {
        RULESPOPUP.classList.add('disactive')
    } else if (event.target.contains(RULESPOPUP)) {
        RULESPOPUP.classList.add('disactive')
    }
};

RULESPOPUP.addEventListener('click', CLOSEPOPUP);