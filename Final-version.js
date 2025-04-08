let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')); 
if (!score)
{ score = { wins: 0, losses:0, ties:0,}; }

updateScoreElement();

function resetScore(){
  score = { wins: 0, losses:0, ties:0,}; localStorage.removeItem('score'); alert('Your score has reset.'); updateScoreElement()
}

function pickComputerMove(){
let randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1/3) {
 computerMove = 'Rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3) {
 computerMove = 'Paper';
}
else if (randomNumber >= 2/3 && randomNumber < 1) {
 computerMove = 'Scissors';
}
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {playGame('Rock');}
  else if (event.key === 'p') {playGame('Paper');}
  else if (event.key === 's') {playGame('Scissors');}
});

function playGame(playerMove){
  pickComputerMove ();

if (playerMove === 'Rock')
{if (computerMove === 'Rock') {result = 'Tie.';}
else if (computerMove === 'Paper') {result = 'You Lose.';}
else if (computerMove === 'Scissors') {result = 'You Win.';}
}

else if (playerMove==='Paper'){
if (computerMove === 'Rock') {result = 'You Win.';}
else if (computerMove === 'Paper') {result = 'Tie.';}
else if (computerMove === 'Scissors') {result = 'You Lose.';}
}

else if (playerMove==='Scissors'){
if (computerMove === 'Rock') {result = 'You Lose.';}
else if (computerMove === 'Paper') {result = 'You Win.';}
else if (computerMove === 'Scissors') {result = 'Tie.';}
}

if (result === 'Tie.') {score.ties = score.ties + 1}
else if (result === 'You Lose.') {score.losses = score.losses + 1}
else if (result === 'You Win.') {score.wins = score.wins + 1}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML = `${result}`;
document.querySelector('.js-moves').innerHTML = `You :
  <img class="move-icon" src="images/${playerMove}-emoji.png">
  <img class="move-icon" src="images/${computerMove}-emoji.png">
  : computer`;
}
function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}