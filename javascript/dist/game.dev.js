"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// elemento decorativo 
var chipDecorationElement = document.getElementById('dec'); // elemento sonoro de vitoria

var winningSoundElement = document.getElementById('wininngSound'); //elementos de texto para score 

var scoreLabelP1Element = document.getElementById('scoreP1'); //player 1

var scoreLabelP2Element = document.getElementById('scoreP2'); //player 2

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.fullTiles = false;
    this.points = 10; //valor de pontos para cada vitoria

    this.posWinin = []; // guarda as posições vencedoras de uma partida 

    this.allPos = []; // guarda todas as posições jogadas durante uma partida 

    this.textWin = ''; // recebe o texto com o player vencedor 

    this.lin; // guarda a jogada atual pra alteração das classes das fichas 

    this.gameOver = false; //inicia o jogo como game over falso 

    this.currentPlayer = ''; //guarda o player atual 
    // tabuleiro que recebe todas as alteração para conferencia 

    this.board = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35], [36, 37, 38, 39, 40, 41]]; //tabuleiro que guarda as informações originais para conferencia 

    this.boardBackUp = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35], [36, 37, 38, 39, 40, 41]];
  } //verifica qual é o player atual 


  _createClass(Game, [{
    key: "nextPlayer",
    value: function nextPlayer() {
      if (this.currentPlayer === 'Player1') {
        this.currentPlayer = 'Player2'; //troca o player atual 

        return 'Player2';
      } else {
        this.currentPlayer = 'Player1'; //troca o player atual

        return 'Player1';
      }
    } //recebe a coluna que foi clicada e altera a posição do tabuleiro para player atual 

  }, {
    key: "fillTile",
    value: function fillTile(col) {
      this.nextPlayer();

      for (var i = 0; i < this.board.length; i++) {
        //varre o array pai
        if (this.board[i] === this.board[col]) {
          //entra na coluna
          for (var j = 0; j < this.board[i].length; j++) {
            //varre a coluna 
            if (!isNaN(this.board[i][j])) {
              //verifica se não é uma string (player1 ou player2)
              this.lin = this.board[i][j]; //lin recebe a posição da ultima jogada 

              this.allPos.push(this.board[i][j]); // allPos guarda as posições de cada jogada  

              this.board[i][j] = this.currentPlayer; //bord recebe o player atual na posição encontrada

              return this.board[col][i]; //retorna o valor
            }
          }
        }
      }

      this.nextPlayer(); // busca o proximo jogador 
    } //preenche as classes para alterar as cores (vermelho ou amarelo) nos tiles clicados 

  }, {
    key: "printChip",
    value: function printChip() {
      var chip = document.getElementById(this.lin); // identifica qual elemento deve ser alterado 

      if (this.currentPlayer === 'Player1') {
        //verifica qual jogador fez a jogada 
        chip.classList.add('color-red'); // adiciona a classe para vermelho(player 1)

        chipDecorationElement.classList.remove('color-red'); // remove a classe vermelha do elemento decoratico

        chipDecorationElement.classList.add('color-yellow'); //adiciona a classe amarelo do proximo jogador
      } else {
        chip.classList.add('color-yellow');
        chipDecorationElement.classList.remove('color-yellow');
        chipDecorationElement.classList.add('color-red');
      }
    } //checa se houve algum vencedor a cada jogada 

  }, {
    key: "checkWinCondition",
    value: function checkWinCondition(point) {
      // arrays que armazenam todas as condição de vitoria 
      var victoryCondition = [// vertical inferior
      [[0, 0], [0, 1], [0, 2], [0, 3]], [[1, 0], [1, 1], [1, 2], [1, 3]], [[2, 0], [2, 1], [2, 2], [2, 3]], [[3, 0], [3, 1], [3, 2], [3, 3]], [[4, 0], [4, 1], [4, 2], [4, 3]], [[5, 0], [5, 1], [5, 2], [5, 3]], [[6, 0], [6, 1], [6, 2], [6, 3]], // vertical meio
      [[0, 1], [0, 2], [0, 3], [0, 4]], [[1, 1], [1, 2], [1, 3], [1, 4]], [[2, 1], [2, 2], [2, 3], [2, 4]], [[3, 1], [3, 2], [3, 3], [3, 4]], [[4, 1], [4, 2], [4, 3], [4, 4]], [[5, 1], [5, 2], [5, 3], [5, 4]], [[6, 1], [6, 2], [6, 3], [6, 4]], //vertical superior 
      [[0, 2], [0, 3], [0, 4], [0, 5]], [[1, 2], [1, 3], [1, 4], [1, 5]], [[2, 2], [2, 3], [2, 4], [2, 5]], [[3, 2], [3, 3], [3, 4], [3, 5]], [[4, 2], [4, 3], [4, 4], [4, 5]], [[5, 2], [5, 3], [5, 4], [5, 5]], [[6, 2], [6, 3], [6, 4], [6, 5]], //horizontal linha 1 
      [[0, 0], [1, 0], [2, 0], [3, 0]], [[1, 0], [2, 0], [3, 0], [4, 0]], [[2, 0], [3, 0], [4, 0], [5, 0]], [[3, 0], [4, 0], [5, 0], [6, 0]], // horizontal linha 2
      [[0, 1], [1, 1], [2, 1], [3, 1]], [[1, 1], [2, 1], [3, 1], [4, 1]], [[2, 1], [3, 1], [4, 1], [5, 1]], [[3, 1], [4, 1], [5, 1], [6, 1]], //horizontal linha 3
      [[0, 2], [1, 2], [2, 2], [3, 2]], [[1, 2], [2, 2], [3, 2], [4, 2]], [[2, 2], [3, 2], [4, 2], [5, 2]], [[3, 2], [4, 2], [5, 2], [6, 2]], //horizontal linha 4
      [[0, 3], [1, 3], [2, 3], [3, 3]], [[1, 3], [2, 3], [3, 3], [4, 3]], [[2, 3], [3, 3], [4, 3], [5, 3]], [[3, 3], [4, 3], [5, 3], [6, 3]], //horizontal linha 5
      [[0, 4], [1, 4], [2, 4], [3, 4]], [[1, 4], [2, 4], [3, 4], [4, 4]], [[2, 4], [3, 4], [4, 4], [5, 4]], [[3, 4], [4, 4], [5, 4], [6, 4]], //horizontal linha 6
      [[0, 5], [1, 5], [2, 5], [3, 5]], [[1, 5], [2, 5], [3, 5], [4, 5]], [[2, 5], [3, 5], [4, 5], [5, 5]], [[3, 5], [4, 5], [5, 5], [6, 5]], //diagonal esquerda 1 
      [[6, 0], [5, 1], [4, 2], [3, 3]], [[6, 1], [5, 2], [4, 3], [3, 4]], [[6, 2], [5, 3], [4, 4], [3, 5]], [[6, 3], [5, 4], [4, 5], [3, 6]], //diagonal esquerda 2
      [[5, 0], [4, 1], [3, 2], [2, 3]], [[5, 1], [4, 2], [3, 3], [2, 4]], [[5, 2], [4, 3], [3, 4], [2, 5]], [[5, 3], [4, 4], [3, 5], [2, 6]], //diagonal esquerda 3
      [[4, 0], [3, 1], [2, 2], [1, 3]], [[4, 1], [3, 2], [2, 3], [1, 4]], [[4, 2], [3, 3], [2, 4], [1, 5]], [[4, 3], [3, 4], [2, 5], [1, 6]], //diagonal esquerda 4
      [[3, 0], [2, 1], [1, 2], [0, 3]], [[3, 1], [2, 2], [1, 3], [0, 4]], [[3, 2], [2, 3], [1, 4], [0, 5]], [[3, 3], [2, 4], [1, 5], [0, 6]], //diagonal direita 1 
      [[0, 0], [1, 1], [2, 2], [3, 3]], [[0, 1], [1, 2], [2, 3], [3, 4]], [[0, 2], [1, 3], [2, 4], [3, 5]], [[0, 3], [1, 4], [2, 5], [3, 6]], //diagonal direita 2 
      [[1, 0], [2, 1], [3, 2], [4, 3]], [[1, 1], [2, 2], [3, 3], [4, 4]], [[1, 2], [2, 3], [3, 4], [4, 5]], [[1, 3], [2, 4], [3, 5], [4, 6]], //diagonal direita 2 
      [[2, 0], [3, 1], [4, 2], [5, 3]], [[2, 1], [3, 2], [4, 3], [5, 4]], [[2, 2], [3, 3], [4, 4], [5, 5]], [[2, 3], [3, 4], [4, 5], [5, 6]], //diagonal direita 2 
      [[3, 0], [4, 1], [5, 2], [6, 3]], [[3, 1], [4, 2], [5, 3], [6, 4]], [[3, 2], [4, 3], [5, 4], [6, 5]], [[3, 3], [4, 4], [5, 5], [6, 6]]];

      for (var i = 0; i < victoryCondition.length; i++) {
        // vare as condições de vitoria a cada interação 
        var coord1 = victoryCondition[i][0];
        var coord2 = victoryCondition[i][1];
        var coord3 = victoryCondition[i][2];
        var coord4 = victoryCondition[i][3]; // compara se algum player esta sequencial em 4 (comparando um com o outro)

        if (this.board[coord1[0]][coord1[1]] === this.board[coord2[0]][coord2[1]] && this.board[coord2[0]][coord2[1]] === this.board[coord3[0]][coord3[1]] && this.board[coord3[0]][coord3[1]] === this.board[coord4[0]][coord4[1]]) {
          this.textWin = "".concat(this.currentPlayer, " Win."); //textWin recebe texto com o vencedor 
          // posWin recebe as posições vencedoras 

          this.posWinin = [this.boardBackUp[coord1[0]][coord1[1]], this.boardBackUp[coord2[0]][coord2[1]], this.boardBackUp[coord3[0]][coord3[1]], this.boardBackUp[coord4[0]][coord4[1]]];
          this.gameOver = true; // altera o game over para verdadeiro 
        }
      } //verifica se game over é verdadeiro 


      if (this.gameOver) {
        //identifica os elementos que recebem os scores
        var scoreP1 = parseInt(scoreLabelP1Element.innerText);
        var scoreP2 = parseInt(scoreLabelP2Element.innerText);

        if (this.currentPlayer === 'Player1') {
          // verifica que ganhou (quem fez a ultima jogada antes do game over )
          scoreP1 += this.points;
          chipDecorationElement.classList.remove('color-yellow');
          chipDecorationElement.classList.add('color-red', 'ficha-radius');
          scoreLabelP1Element.innerText = scoreP1;
        } else {
          scoreP2 += this.points;
          chipDecorationElement.classList.remove('color-red');
          chipDecorationElement.classList.add('color-yellow', 'ficha-radius');
          scoreLabelP2Element.innerText = scoreP2;
        }

        winningSoundElement.play();
        this.newTile();
      }
    }
  }, {
    key: "newTile",
    value: function newTile() {
      var _this = this;

      setTimeout(function () {
        for (var i = 0; i < _this.allPos.length; i++) {
          var chip = document.getElementById(_this.allPos[i].toString());
          chip.classList.remove('color-red', 'color-yellow');
          chip.classList.remove('ficha-radius', 'bg-info');
        }

        for (var _i = 0; _i < _this.board.length; _i++) {
          for (var j = 0; j < _this.board[_i].length; j++) {
            if (isNaN(_this.board[_i][j])) {
              var posClear = _this.boardBackUp[_i][j];
              _this.board[_i][j] = posClear;
            }
          }
        }

        _this.gameOver = false;
        _this.posWinin = [];
      }, 1000);
    }
  }]);

  return Game;
}();