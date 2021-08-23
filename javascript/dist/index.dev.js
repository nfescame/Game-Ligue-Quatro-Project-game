"use strict";

var btnResetElement = document.getElementById('reset');
var game = new Game();
document.addEventListener('click', function (event) {
  if (event.target.parentElement.classList.contains('container-col')) {
    var colSelect = event.target.parentElement.id; //pega o id da coluna clicada 

    var idCol = colSelect.substr(-1, 1); //retira apenas o numero da id 

    game.fillTile(idCol); //invoca a função pasando o parametro (num da coluna selecionada)

    game.printChip(); // spawn chip 

    game.winningCheck(); // falta comcluir
  }
});
btnResetElement.addEventListener('click', function (event) {
  game.restartGame();
  game.clearBoardBackUp();
});