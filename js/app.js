/*--------------------- Constants ---------------------*/
const choice = ['rock', 'paper', 'scissors'];


/*------------------- Variables --------------------*/
let msg;
let playerChoice;
let computerChoice;


/*------------ Cached Element References -------------*/
const rockEle = document.querySelector('#rock');
const paperEle = document.querySelector('#paper');
const scissorEle = document.querySelector("#scissors");



/*----------------- Functions -----------------*/

const getComputerChoice = () => {
  // generate random number 0 To 2 becuase we use array
  const randomIndex = Math.floor(Math.random() * choice.length); 
  // select the item from the array
  return choice[randomIndex];
};


// initialize game state
const play = () => {
  computerChoice =  getComputerChoice();
  console.log(computerChoice);




  // after updating state, render to html
  // render();
};

play();

// updates our UI/html directly
const render = () => {

};

/*--------------- Event Listeners ----------------*/