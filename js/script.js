let computerMove = `kamień`;
let playerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałeś ' + playerMove);

let randomNumber = Math.floor(Math.random() * 12 + 7);

printMessage(randomNumber);