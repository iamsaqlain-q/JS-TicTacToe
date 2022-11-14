const prompt = require("prompt-sync")();
console.log('*****Tic Tac Toe Game*****');

const gameBoard = [];
let userLetter = '';
let computerLetter = '';

startGame();
playerMove();
moveAtPosition();
printBoard();

function moveAtPosition(){
    const position = prompt('Where do you wanna make move?...Choose any empty position [1-9] : ');
    console.log('Position of your choice : ' + position);
    if(position > 9 || position < 1){
        console.log('Invalid Position...choose again');
        moveAtPosition();
    }
    else if(gameBoard[position] != undefined){
        console.log('Position is taken...choose again');
        moveAtPosition();
    }
    else{
        gameBoard[position] = userLetter;
    }
    
}

function playerMove(){
    const move = prompt('It`s your turn...type X or O : ');
    //console.log('Your move : ' + move);
    if(move === 'X' || 'x'){
        userLetter = 'X';
        computerLetter = 'O';
    }
    else if(move === 'O' || 'o'){
        userLetter = 'O';
        computerLetter = 'X';
    }
    else{
        console.log('Invalid Move!');
    }
}

function printBoard(){
    console.log('***Game Board***');
    console.log('---------------------------------');
    console.log('| ' + gameBoard[1] + ' | ' + gameBoard[2] + ' | ' + gameBoard[3]);
    console.log('| ' + gameBoard[4] + ' | ' + gameBoard[5] + ' | ' + gameBoard[6]);
    console.log('| ' + gameBoard[7] + ' | ' + gameBoard[8] + ' | ' + gameBoard[9]);
    console.log('---------------------------------');
}

function startGame(){
    let gameBoard = [10];
    for(let index = 0; index < 10; index++){
        gameBoard[index] = ' ';
    }
}

function toss(){
    return Math.round(Math.random() > 0.5 ? 1 : 0);
}

if(toss() === 1){
    console.log('User won toss...user will play first!');
}
else{
    console.log('Computer won toss...Computer will play first!');
}

