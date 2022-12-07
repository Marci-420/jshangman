let answer = 'puzsér';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function checkIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'Nyertél! A megfejtés a kód.';
    }
  }
  
  function checkIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('startbtn').style.visibility="visible";
      document.getElementById('keyboard').innerHTML = 'Vesztettél.';
    }
}

function reset() {
    document.getElementById('startbtn').style.visibility="hidden";
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
  
    guessedWord();
    updateMistakes();
    generateButtons();
}
  
document.getElementById('maxWrong').innerHTML = maxWrong;