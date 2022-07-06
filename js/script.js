let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';

if(randomNumber == 1){
	computerMove = 'Kamień';
}else if(randomNumber == 2){
    computerMove = 'Papier';
}else{
    computerMove = 'Nożyce';
} 
printMessage("Komputer: " + "Mój ruch to " + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.');
let playerMove = 'Nieznany ruch';

if(playerInput == '1'){
    playerMove = 'Kamień';
}else if(playerInput == '2'){
    playerMove = 'Papier'
}else if(playerInput == '3'){
    playerMove = 'Nożyce';
}else{
    printMessage('Nieznany ruch. Wybierz przedział 1-3');
};
printMessage('Twój ruch to: ' + playerMove);

//Wygrana Gracza
if( computerMove == 'Kamień' && playerMove == 'Papier' || computerMove == 'Papier' && playerMove == 'Nożyce'){
    printMessage('Ty wygrywasz!');
}
//Wygrana Komputera
else if( computerMove == 'Papier' && playerMove == 'Kamień' || computerMove == 'Nożyce' && playerMove == 'Papier'){
    printMessage('Wygrywa Komputer');
}
//Remis
else if(computerMove == 'Papier' && playerMove == 'Papier' || computerMove == 'Kamień' && playerMove == 'Kamień' || computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('REMIS');
}
else if(playerInput > 3){
    printMessage('Niepoprawny ruch GRACZA. Wybierz przedział 1-3');
};