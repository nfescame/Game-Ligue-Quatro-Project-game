"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.posWinin = [];
    this.lin;
    this.gameOver = false;
    this.currentPlayer = '';
    this.board = [[5, 4, 3, 2, 1, 0], [11, 10, 9, 8, 7, 6], [17, 16, 15, 14, 13, 12], [23, 22, 21, 20, 19, 18], [29, 28, 27, 26, 25, 24], [35, 34, 33, 32, 31, 30], [41, 40, 39, 38, 37, 36]];
    this.boardBackUp = [[5, 4, 3, 2, 1, 0], [11, 10, 9, 8, 7, 6], [17, 16, 15, 14, 13, 12], [23, 22, 21, 20, 19, 18], [29, 28, 27, 26, 25, 24], [35, 34, 33, 32, 31, 30], [41, 40, 39, 38, 37, 36]];
  }

  _createClass(Game, [{
    key: "nextPlayer",
    value: function nextPlayer() {
      if (this.currentPlayer === 'player1') {
        this.currentPlayer = 'player2';
        return 'player2';
      } else {
        this.currentPlayer = 'player1';
        return 'player1';
      }
    }
  }, {
    key: "fillTile",
    value: function fillTile(col) {
      this.nextPlayer();

      for (var i = 0; i < this.board.length; i++) {
        //varre o array pai
        if (this.board[i] === this.board[col]) {
          //entra na coluna
          for (var j = 0; j < this.board[i].length; j++) {
            if (!isNaN(this.board[i][j])) {
              this.lin = this.board[i][j];
              this.board[i][j] = this.currentPlayer;
              return this.board[col][i];
            }
          }
        }
      }

      this.nextPlayer();
    }
  }, {
    key: "printChip",
    value: function printChip() {
      var chip = document.getElementById(this.lin);

      if (this.currentPlayer === 'player1') {
        chip.classList.add('color-red');
      } else {
        chip.classList.add('color-yellow');
      }
    }
  }, {
    key: "checkWinCondition",
    value: function checkWinCondition() {
      var victoryCondition = [[[0, 0], [0, 1], [0, 2], [0, 3]], [[1, 0], [1, 1], [1, 2], [1, 3]], [[2, 0], [2, 1], [2, 2], [2, 3]], [[3, 0], [3, 1], [3, 2], [3, 3]], [[4, 0], [4, 1], [4, 2], [4, 3]], [[5, 0], [5, 1], [5, 2], [5, 3]], [[6, 0], [6, 1], [6, 2], [6, 3]], // vertical inferior
      [[0, 1], [0, 2], [0, 3], [0, 4]], [[1, 1], [1, 2], [1, 3], [1, 4]], [[2, 1], [2, 2], [2, 3], [2, 4]], [[3, 1], [3, 2], [3, 3], [3, 4]], [[4, 1], [4, 2], [4, 3], [4, 4]], [[5, 1], [5, 2], [5, 3], [5, 4]], [[6, 1], [6, 2], [6, 3], [6, 4]], //vertical meio 
      [[0, 2], [0, 3], [0, 4], [0, 5]], [[1, 2], [1, 3], [1, 4], [1, 5]], [[2, 2], [2, 3], [2, 4], [2, 5]], [[3, 2], [3, 3], [3, 4], [3, 5]], [[4, 2], [4, 3], [4, 4], [4, 5]], [[5, 2], [5, 3], [5, 4], [5, 5]], [[6, 2], [6, 3], [6, 4], [6, 5]]];

      for (var i = 0; i < victoryCondition.length; i++) {
        var coord1 = victoryCondition[i][0];
        var coord2 = victoryCondition[i][1];
        var coord3 = victoryCondition[i][2];
        var coord4 = victoryCondition[i][3];

        if (this.board[coord1[0]][coord1[1]] === this.board[coord2[0]][coord2[1]] && this.board[coord2[0]][coord2[1]] === this.board[coord3[0]][coord3[1]] && this.board[coord3[0]][coord3[1]] === this.board[coord4[0]][coord4[1]]) {
          console.log("Vitoria do ".concat(this.currentPlayer));
          this.gameOver = true;
          this.posWinin = [this.boardBackUp[coord1[0]][coord1[1]], this.boardBackUp[coord2[0]][coord2[1]], this.boardBackUp[coord3[0]][coord3[1]], this.boardBackUp[coord4[0]][coord4[1]]];
        }
      }
    }
  }]);

  return Game;
}();