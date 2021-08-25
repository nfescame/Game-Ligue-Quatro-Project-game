"use strict";

// botões
var btnResetElement = document.getElementById('reset');
var btnPlayElement = document.getElementById('play'); // texto  para mostrar vencedor 

var textElement = document.getElementById('text'); //elemento de audio

var aladdinSoundElement = document.getElementById('aladdin'); // icone de audio, on e off

var OnOffSoundElement = document.getElementById('audioOnOff');
var scoreLabelP1Element = document.getElementById('scoreLabelP1');
var scoreLabelP2Element = document.getElementById('scoreLabelP2');
var audioOn = false;
var game = new Game();
btnPlayElement.addEventListener('click', function (event) {
  aladdinSoundElement.play();
  OnOffSoundElement.addEventListener('click', function (event) {
    if (audioOn) {
      OnOffSoundElement.setAttribute('src', '/img/mic.svg');
      aladdinSoundElement.play();
    } else {
      OnOffSoundElement.setAttribute('src', '/img/mic-off.svg');
      aladdinSoundElement.pause();
    }

    audioOn = !audioOn;
  });
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
        console.log(game.points);
      });
    }
  });
  btnResetElement.addEventListener('click', function (event) {
    window.location.reload();
  });
});