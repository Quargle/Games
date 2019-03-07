


function startGame(){
    reset();
    human = "X";
    computer = "0";
    first = whoGoesFirst(human, computer);
    console.log(`The ${first} will go first`);
    if (first == 'computer'){
        document.getElementById("instructions").innerHTML = "The computer got the first turn!";
        computerChoose();
    }
    else{
        document.getElementById("instructions").innerHTML = "You can go first!";
    }
}

function reset(){
    for (i=0; i<9; i++){
        board[i] = "";
        document.getElementById(`${i}`).innerHTML = "";  
        document.getElementById(`${i}`).removeEventListener('click', playerChoose);  
        document.getElementById(`${i}`).addEventListener('click', playerChoose);  
    }
}

function playerChoose(e)
{
    if (board[e.target.id] == ""){
        e.target.innerHTML = 'X';
        board[e.target.id] = 'X';
        if (checkWinner(board, 'X') == true){
            setTimeout(function(){victory('human')}, 100);
        }
        else{
            checkForSpaces();
            setTimeout(computerChoose(), 100);
            if (checkWinner(board, '0') == true){
                setTimeout(function(){victory('computer')}, 100);
            }
        }
        checkForSpaces();
    }
}

function victory(winner){
    if (winner === 'human'){
        document.getElementById("instructions").innerHTML = "Congratulations, you have won!";
    }
    else {
        document.getElementById("instructions").innerHTML = "The computer has won.";
    }
}

function checkForSpaces(){
    for (i=0; i<9; i++){
        if (board[i] == ""){return}
    }
    if (checkWinner(board, 'X') == false && checkWinner(board, '0') == false){
        document.getElementById("instructions").innerHTML = "The game ends in a draw.";
    }
}

function computerChoose(){
    // see if it can win
    console.log("try to win...");
    for (i=0; i<9; i++){
        if (board[i] != ""){continue}
        else{
            board[i] = '0';
            if (checkWinner(board, '0') == true){
                document.getElementById(`${i}`).innerHTML = '0';  
                return;              
            }
            else{
                board[i] = "";
                continue;
            }
        }
    }

    // see if it can stop player winning
    for (i=0; i<9; i++){
        console.log("Attempt to stop player winning...");
        if (board[i] != ""){continue}
        else{
            board[i] = 'X';
            if (checkWinner(board, 'X') == true){
                board[i] = '0';
                document.getElementById(`${i}`).innerHTML = '0';  
                return;              
            }
            else{
                board[i] = "";
                continue;
            }
        }
    }

    console.log("Just pick something...");
    available = [];
    for (i=0; i<9; i++){
        if (board[i] === ""){
            available.push(i);
        }
    }
    choice = available[Math.floor(Math.random() * available.length)];
    document.getElementById(`${choice}`).innerHTML = '0';  
    board[choice] = '0';
}

function whoGoesFirst(human, computer){
    rand = Math.random();
    if (rand < 0.5){return "human"}
    else {return "computer"}
}

function checkWinner(bo, le){
    // Given a board and a human's letter, this function returns True if that human has won.
    // We use bo instead of board and le instead of letter so we don't have to type as much.
    return ((bo[6] == le && bo[7] == le && bo[8] == le) || // across the top
    (bo[3] == le && bo[4] == le && bo[5] == le) || // across the middle
    (bo[0] == le && bo[1] == le && bo[2] == le) || // across the bottom
    (bo[6] == le && bo[3] == le && bo[0] == le) || // down the left side
    (bo[7] == le && bo[4] == le && bo[1] == le) || // down the middle
    (bo[8] == le && bo[5] == le && bo[2] == le) || // down the right side
    (bo[6] == le && bo[4] == le && bo[2] == le) || // diagonal
    (bo[8] == le && bo[4] == le && bo[0] == le)) // diagonal
}

var board = [,"","","","","","","",""];
document.getElementById("start").addEventListener('click', startGame);
