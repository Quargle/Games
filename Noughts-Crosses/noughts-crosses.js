


function startGame(){
    reset();
    human = "X";
    computer = "0";
    }

function reset(){
    for (i=1; i<10; i++) {
        document.getElementById(`${i}`).innerHTML = "";
        document.getElementById(`${i}`).addEventListener('click', playerChoose);
        board[i] = "";
    }
}

function playerChoose(e)
{
    e.target.innerHTML = 'X';
    board[e.target.id] = 'X';
    console.log(board);
    if (checkWinner(board, 'X') == true){
        setTimeout(function(){victory('human')}, 100);
    }
    else{
        setTimeout(computerChoose(), 100)
        if (checkWinner(board, '0') == true){
            setTimeout(function(){victory('computer')}, 100);
        }
    }
}

function victory(winner){
    if (winner === 'human'){alert("Congratulations, you have won!")}
    else {alert("The computer has won.")}
}

function computerChoose(){
    for (i=1; i<10; i++){
        if (board[i] === ""){
            board[i] = '0';
            document.getElementById(`${i}`).innerHTML = '0';    
            return;
        }
    }
}
/*
function whoGoesFirst(a, b){
    rand = Math.random();
    if (rand < 0.5){return a}
    else {return b}
}

function playGame(board, human, computer, turn){
    gameIsPlaying = true;
    do{
        if (turn === "human"){
            turn = setTimeout(humanTurn(board, human), 100);
        }
        console.log(`Turn: ${turn}`);

        if (turn == "computer"){
            move = getComputerMove(board);
            makeMove(board, computer, move);
            console.log(board);
            if (checkWinner(board, computer) == true){
                console.log("The computer has won.");
                gameIsPlaying = false;
            }
            else {turn = "human"};
            console.log("End of computer turn");
        }
    } while  (gameIsPlaying == true);
}

function humanTurn(){
    console.log("human turn");
    move = getHumanMove();
    makeMove(board, human, move);
    console.log(board);
    if (checkWinner(board, human) == true){
        console.log("Hooray! You won!");
        gameIsPlaying = false;
    }
    else {return "computer"};
}

function getHumanMove(){
    return(prompt("Pick your move (1-9)."));
}

function getComputerMove(board, computer, human){
    for (i=1; i<10; i++){
        if (board[i] === ""){return i}
    }
}

function makeMove(board, player, move){
    board[move] = player;
    document.getElementById(`${move}`).innerHTML = player;
    console.log(board);
    window.setTimeout(function(){updateBoard(move, player)}, 500);
}

function updateBoard(move, player){
    console.log("waiting");
}
*/

function checkWinner(bo, le){
    // Given a board and a human's letter, this function returns True if that human has won.
    // We use bo instead of board and le instead of letter so we don't have to type as much.
    return ((bo[7] == le && bo[8] == le && bo[9] == le) || // across the top
    (bo[4] == le && bo[5] == le && bo[6] == le) || // across the middle
    (bo[1] == le && bo[2] == le && bo[3] == le) || // across the bottom
    (bo[7] == le && bo[4] == le && bo[1] == le) || // down the left side
    (bo[8] == le && bo[5] == le && bo[2] == le) || // down the middle
    (bo[9] == le && bo[6] == le && bo[3] == le) || // down the right side
    (bo[7] == le && bo[5] == le && bo[3] == le) || // diagonal
    (bo[9] == le && bo[5] == le && bo[1] == le)) // diagonal
}

var board = ["blank","","","","","","","","",""];
document.getElementById("start").addEventListener('click', startGame);
