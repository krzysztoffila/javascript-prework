function playGame(playerInput){
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: papier, 2: kamień, 3: nożyce.');
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'Kamień';
        } 
        else if(argMoveId == 2){
            return 'Papier';
        }
        else if(argMoveId == 3){
            return 'Nożyce';
        }
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if( argComputerMove == 'Kamień' && argPlayerMove == 'Papier' || argComputerMove =='Papier' && argPlayerMove =='Nożyce' || argComputerMove =='Nożyce' && argPlayerMove =='Kamień'){
        printMessage('Ty wygrywasz!');
        }
        else if ( argComputerMove == 'Kamień' && argPlayerMove =='Nożyce' || argComputerMove =='Papier' && argPlayerMove =='Kamień' || argComputerMove =='Nożyce' && argPlayerMove =='Papier'){
        printMessage('Ja wygrywam!');
        }
        else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
        }
        else if (argPlayerMove =='nieznany ruch'){
        printMessage('Fail');
        }
    }displayResult(playerMove, computerMove);

    console.log('moves: '+ computerMove + ' ' + playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});