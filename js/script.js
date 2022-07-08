function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'Papier';
    } 
    else if(argMoveId == 2){
        return 'Kamień';
    }
    else if(argMoveId == 3){
        return 'Nożyce';
    }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage("Komputer: " + "Mój ruch to " + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: Papier, 2: Kamień, 3: Nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerInput + ' czyli: ' + playerMove);
/*
//Wygrana Gracza
if( computerMove == 'Kamień' && playerMove == 'Papier' || computerMove == 'Papier' && playerMove == 'Nożyce' || computerMove == 'Nożyce' && playerMove == 'Kamień'){
    printMessage('Ty wygrywasz!');
}
//Wygrana Komputera
else if( computerMove == 'Papier' && playerMove == 'Kamień' || computerMove == 'Nożyce' && playerMove == 'Papier' || computerMove == 'Kamień' && playerMove == 'Nożyce'){
    printMessage('Wygrywa Komputer');
}
//Remis
else if(computerMove == 'Papier' && playerMove == 'Papier' || computerMove == 'Kamień' && playerMove == 'Kamień' || computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('REMIS');
}
else if(playerInput > 3){
    printMessage('Niepoprawny ruch GRACZA. Wybierz przedział 1-3');
};
*/

function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( computerMove == 'Kamień' && playerMove == 'Papier'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
}

