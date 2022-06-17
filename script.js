/*
* file: script.js
* date: 6/17/2022
* description: Two-player tic-tac-toe game using plain javascript.
*              Each player takes a turn selecting a spot, then their selection
*              is stored inside the states array and checked after each turn.
*              If the game is over, notify the user.
*/

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const winDisp = document.getElementById("winner")
const notice = document.getElementById("notice")
const reset = document.getElementById("reset")

var states = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
}

// randomly select first player
let rand = Math.floor(Math.random() * 2);
var current = rand;
var count = 9; // count down to zero
let gameOver = false;
if (rand) {
    notice.innerHTML = "Player O goes first";
} else {
    notice.innerHTML = "Player X goes first";
}

function notifyPlayerTurn() {
    if (current) {
        notice.innerHTML = "Player O's turn";
    } else {
        notice.innerHTML = "Player X's turn";
    }
}

function notifyWinner(plr) {
    gameOver = true;
    if (plr == "Draw") {
        winDisp.innerHTML = "Draw";
        notice.innerHTML = "Game over";
    } else {
        winDisp.innerHTML = plr + " is the winner!";
        notice.innerHTML = "Game over";
    }
}

function setBtnDisabledState(val) {
    one.disabled = val;
    two.disabled = val;
    three.disabled = val;
    four.disabled = val;
    five.disabled = val;
    six.disabled = val;
    seven.disabled = val;
    eight.disabled = val;
    nine.disabled = val;
}

function checkIfGameIsOver() {
    if (states[1] == 'X' && states[2] == 'X' && states[3] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[1] == 'X' && states[4] == 'X' && states[7] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[4] == 'X' && states[5] == 'X' && states[6] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[7] == 'X' && states[8] == 'X' && states[9] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[3] == 'X' && states[6] == 'X' && states[9] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[1] == 'X' && states[5] == 'X' && states[9] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[7] == 'X' && states[5] == 'X' && states[3] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[2] == 'X' && states[5] == 'X' && states[8] == 'X') {
        notifyWinner("X");
        setBtnDisabledState(true);
    } else if (states[1] == 'O' && states[2] == 'O' && states[3] == 'O') {
        //check for O
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[1] == 'O' && states[4] == 'O' && states[7] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[4] == 'O' && states[5] == 'O' && states[6] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[7] == 'O' && states[8] == 'O' && states[9] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[3] == 'O' && states[6] == 'O' && states[9] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[1] == 'O' && states[5] == 'O' && states[9] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[7] == 'O' && states[5] == 'O' && states[3] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else if (states[2] == 'O' && states[5] == 'O' && states[8] == 'O') {
        notifyWinner("O");
        setBtnDisabledState(true);
    } else {
        // check for draw
        if (count == 0) {
            notifyWinner("Draw");
        }
    }
}

one.onclick = function() {
    one.value = (current) ? "O" : "X";
    states[1] = (current) ? "O" : "X";
    current = 1 - current;
    count--;
    one.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

two.onclick = function() {
    two.value = (current) ? "O" : "X";
    states[2] = (current) ? "O" : "X";
    current = 1 - current;
    count--;
    two.disabled = true;
    checkIfGameIsOver()
    if(!gameOver) notifyPlayerTurn();
}

three.onclick = function() {
    three.value = (current) ? "O" : "X";
    states[3] = (current) ? "O" : "X";
    current = 1 - current;
    count--;
    three.disabled = true;
    checkIfGameIsOver()
    if(!gameOver) notifyPlayerTurn();
}

four.onclick = function() {
    four.value = (current) ? "O" : "X";
    states[4] = (current) ? "O" : "X";
    count--;
    current = 1 - current;
    four.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

five.onclick = function() {
    five.value = (current) ? "O" : "X";
    states[5] = (current) ? "O" : "X";
    count--;
    current = 1 - current;
    five.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

six.onclick = function() {
    six.value = (current) ? "O" : "X";
    states[6] = (current) ? "O" : "X";
    count--;
    current = 1 - current;
    six.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

seven.onclick = function() {
    seven.value = (current) ? "O" : "X";
    states[7] = (current) ? "O" : "X";
    count--;
    current = 1 - current;
    seven.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

eight.onclick = function() {
    eight.value = (current) ? "O" : "X";
    states[8] = (current) ? "O" : "X";
    count--;
    current = 1 - current;
    eight.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

nine.onclick = function() {
    nine.value = (current) ? "O" : "X";
    states[9] = (current) ? "O" : "X";
    count--;
    current = 1 - current;
    nine.disabled = true;
    checkIfGameIsOver();
    if(!gameOver) notifyPlayerTurn();
}

reset.onclick = function() {
    for (x in states) {
        states[x] = "";
    }
    setBtnDisabledState(false)

    one.value = "  ";
    two.value = "  ";
    three.value = "  ";
    four.value = "  ";
    five.value = "  ";
    six.value = "  ";
    seven.value = "  ";
    eight.value = "  ";
    nine.value = "  ";

    gameOver = false;
    count = 9;
    current = Math.floor(Math.random() * 2)
    if (current) {
        notice.innerHTML = "Player O goes first";
    } else {
        notice.innerHTML = "Player X goes first";
    }

    winDisp.innerHTML = "";
}
