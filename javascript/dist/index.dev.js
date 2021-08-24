"use strict";

var btnResetElement = document.getElementById('reset');
var textElement = document.getElementById('text');
var game = new Game();
document.addEventListener('click', function (event) {
  if (event.target.parentElement.classList.contains('container-col')) {
    var textWin = '';
    var colSelect = event.target.parentElement.id; //pega o id da coluna clicada 

    var idCol = colSelect.substr(-1, 1); //retira apenas o numero da id 

    if (!game.gameOver) {
      game.fillTile(idCol); //invoca a função pasando o parametro (num da coluna selecionada)

      game.printChip(); // spawn chip 

      game.checkWinCondition();
    }

    game.posWinin.map(function (pos) {
      var posTile = document.getElementById(pos.toString());
      posTile.classList.add('bg-info', 'ficha-radius');
      console.log(textWin);
      textElement.innerText = game.textWin;
    });
  }
});
btnResetElement.addEventListener('click', function (event) {});