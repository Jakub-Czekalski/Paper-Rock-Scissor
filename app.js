const RULESBUTTON = document.querySelector('.rules button');
const RULESPOPUP = document.querySelector('.rules_popup');

RULESBUTTON.addEventListener('click', () => {
    RULESPOPUP.classList.remove('disactive');
});

const CLOSEPOPUP = (event) => {
    const CLOSE = RULESPOPUP.querySelector('.rules_popup div button');

    if (event.target === RULESPOPUP || CLOSE) {
        RULESPOPUP.classList.add('disactive')
    }
};

