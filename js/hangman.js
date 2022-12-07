let answer = 'puzsér';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function generateButtons() {
    let buttonsHTML = 'a, á, b, c, d, e, é, f, g, h, i, í, j, k, l, m, n, o, ó, ö, ő, p, q, r, s, t, u, ú, ü, ű, v, w, x, y, z'.split(', ').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function checkIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'Nyertél! A megfejtés a kód.';
    }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('startbtn').style.visibility="visible";
      document.getElementById('keyboard').innerHTML = 'Vesztettél.';
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    document.getElementById('startbtn').style.visibility="hidden";
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
  
    //guessedWord();
    //updateMistakes();
    generateButtons();
}
  
document.getElementById('maxWrong').innerHTML = maxWrong;