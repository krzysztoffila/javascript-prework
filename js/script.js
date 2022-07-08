function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'papier';
    } 
    else if(argMoveId == 2){
        return 'kamień';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: papier, 2: kamień, 3: nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);
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
else if(argComputerMove == argPlayerMove){
    printMessage('REMIS');
}
else if(playerInput > 3){
    printMessage('Niepoprawny ruch GRACZA. Wybierz przedział 1-3');
};
*/

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    }
    else if ( argComputerMove == 'kamień' && argPlayerMove =='nożyce'){
    printMessage('Ja wygrywam!');
    }
    else if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
    }
    else if (argPlayerMove =='nieznany ruch'){
    printMessage('Fail');
    }
    else if (argComputerMove =='papier' && argPlayerMove =='nożyce'){
    printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove =='papier' && argPlayerMove =='kamień'){
    printMessage('Ja wygrywam');
    }
    else if (argComputerMove =='nożyce' && argPlayerMove =='kamień'){
    printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove =='nożyce' && argPlayerMove =='papier'){
    printMessage('Ja wygrywam!');
    }
return displayResult(computerMove, playerMove);
}


