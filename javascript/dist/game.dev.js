"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.lin;
    this.gameOver = false;
    this.winningPlay = [];
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

      for (var i = 0; i < this.boardBackUp.length; i++) {
        //varre o array pai
        if (this.boardBackUp[i] === this.boardBackUp[col]) {
          //entra na coluna
          for (var j = 0; j < this.boardBackUp[i].length; j++) {
            if (!isNaN(this.boardBackUp[i][j])) {
              this.lin = this.boardBackUp[i][j];
              this.boardBackUp[i][j] = this.currentPlayer;
              return this.boardBackUp[col][i];
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
    key: "winningCheck",
    value: function winningCheck() {
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.board[i].length; j++) {
          if (this.boardBackUp[i][j] === 'player1') {//console.log(this.boardBackUp[i][j],i,j)
          }

          if (this.boardBackUp[i][j] === 'player2') {//console.log(this.boardBackUp[i][j],i,j)
          }
        }
      }
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.boardBackUp[j].length; j++) {
          var linReset = this.board[i][j];
          var chipClear = document.getElementById(linReset);
          chipClear.classList.remove('color-red');
          chipClear.classList.remove('color-yellow');
        }
      }
    }
  }, {
    key: "clearBoardBackUp",
    value: function clearBoardBackUp() {
      this.boardBackUp = this.board;
      console.log(this.boardBackUp);
      console.log(this.board);
    }
  }]);

  return Game;
}();