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

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'Kamień';
}else if(playerInput == '2'){
    playerMove = 'Papier'
}else if(playerInput == '3'){
    playerMove = 'Nożyce';
}else{
    printMessage('niepoprawny ruch. Wybierz przedział 1-3');
}

printMessage('Twój ruch to: ' + playerMove);