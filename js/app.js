// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/

const stat = {
    boredom: 0,
    hunger: 0,
    happiness: 0,
}

/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameover;

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const happinessStatEl = document.querySelector('#sleepiness-stat');

const feedBtnEl = document.querySelector('#feed');
const playBtnEl = document.querySelector('#play');
const sleepBtnEl = document.querySelector('#sleep');

const resetBtnEl = document.querySelector('#reset');

const gameMessageEl = document.querySelector('#message');

/*-------------------------------- Functions --------------------------------*/

function updateTimer() {
    let sec = 0;
    timer = setInterval(() => {
        boredomStatEl.innerHTML = '00:' + sec;
        sec++;
    }, 1000);
}

function update() {
    stat.boredom += 1;
    stat.hunger += 1;
    stat.happiness += 1;
    render();
    checkGameOver();
}

function handleClick(event) {
    if (event.target.id === 'feed') {
        stat.hunger = 0;
    } else if (event.target.id === 'play') {
        stat.boredom = 0;
    } else if (event.target.id === 'sleep') {
        stat.happiness = 0;
    }
}

function render() {
    boredomStatEl.textContent = stat.boredom;
    hungerStatEl.textContent = stat.hunger;
    happinessStatEl.textContent = stat.happiness;
}

function init() {
    gameover = false;
    timer = setInterval(update, 1000);
    render();
}
    
/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('click', handleClick);
resetBtnEl.addEventListener('click', init);

/*-------------------------------- Main Program --------------------------------*/  

init();




