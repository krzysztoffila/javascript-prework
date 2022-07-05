let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage(randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
	computerMove = 'Kamień';
}
else if(randomNumber == 2){
    computerMove = 'Papier';
}
else{
    computerMove = 'Nozyce';
} 
printMessage("Komputer: " + "Mój ruch to " + computerMove);
