let computerMove = `kamień`;
let playerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałeś ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage(randomNumber);

if(randomNumber == 1){
	printMessage('Kamień');
}
if(randomNumber == 2){
    printMessage('Papier');
}
if(randomNumber == 3){
    printMessage('Nozyce');
} 
