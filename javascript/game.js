let chipDecorationElement = document.getElementById('dec')

class Game{
    constructor(){
        this.posWinin = []
        this.lin
        this.gameOver = false;
        this.currentPlayer = ''
        this.board = [
        [5,4,3,2,1,0],
        [11,10,9,8,7,6],
        [17,16,15,14,13,12],
        [23,22,21,20,19,18],
        [29,28,27,26,25,24],
        [35,34,33,32,31,30],
        [41,40,39,38,37,36]
      ];
        this.boardBackUp = [
        [5,4,3,2,1,0],
        [11,10,9,8,7,6],
        [17,16,15,14,13,12],
        [23,22,21,20,19,18],
        [29,28,27,26,25,24],
        [35,34,33,32,31,30],
        [41,40,39,38,37,36]
       ];
    }

    nextPlayer(){
        if(this.currentPlayer === 'player1'){
            this.currentPlayer = 'player2'
            return 'player2'
        }else{
            this.currentPlayer = 'player1'
            return 'player1'
        }
        
    }

    fillTile(col){
        this.nextPlayer()
        
        for(let i = 0; i < this.board.length; i++){ //varre o array pai

            if(this.board[i] === this.board[col]){ //entra na coluna
            
                for(let j = 0 ; j < this.board[i].length; j++){

                    if(!isNaN(this.board[i][j])){
                        
                        this.lin = this.board[i][j]
                        this.board[i][j] = this.currentPlayer
                        return this.board[col][i] 
                    }
                    
                }
                
            }
        }

        this.nextPlayer() 
    }
    
    printChip(){
        
        const chip = document.getElementById(this.lin)
        if(this.currentPlayer === 'player1'){
            chip.classList.add('color-red')
            chipDecorationElement.classList.remove('color-red')
            chipDecorationElement.classList.add('color-yellow')
        }else{
            chip.classList.add('color-yellow')
            chipDecorationElement.classList.remove('color-yellow')
            chipDecorationElement.classList.add('color-red')
        }
        

    }
    checkWinCondition() {
        const victoryCondition = [
            // vertical inferior
            [[0,0],[0,1],[0,2],[0,3]],
            [[1,0],[1,1],[1,2],[1,3]],
            [[2,0],[2,1],[2,2],[2,3]],
            [[3,0],[3,1],[3,2],[3,3]],
            [[4,0],[4,1],[4,2],[4,3]],
            [[5,0],[5,1],[5,2],[5,3]],
            [[6,0],[6,1],[6,2],[6,3]],

            // vertical meio
            [[0,1],[0,2],[0,3],[0,4]],
            [[1,1],[1,2],[1,3],[1,4]],
            [[2,1],[2,2],[2,3],[2,4]],
            [[3,1],[3,2],[3,3],[3,4]],
            [[4,1],[4,2],[4,3],[4,4]],
            [[5,1],[5,2],[5,3],[5,4]],
            [[6,1],[6,2],[6,3],[6,4]],

            //vertical superior 
            [[0,2],[0,3],[0,4],[0,5]],
            [[1,2],[1,3],[1,4],[1,5]],
            [[2,2],[2,3],[2,4],[2,5]],
            [[3,2],[3,3],[3,4],[3,5]],
            [[4,2],[4,3],[4,4],[4,5]],
            [[5,2],[5,3],[5,4],[5,5]],
            [[6,2],[6,3],[6,4],[6,5]],

            //horizontal linha 1 
            [[0,0],[1,0],[2,0],[3,0]],
            [[1,0],[2,0],[3,0],[4,0]],
            [[2,0],[3,0],[4,0],[5,0]],
            [[3,0],[4,0],[5,0],[6,0]],
            [[4,0],[5,0],[6,0],[7,0]],

            // horizontal linha 2
            [[0,1],[1,1],[2,1],[3,1]],
            [[1,1],[2,1],[3,1],[4,1]],
            [[2,1],[3,1],[4,1],[5,1]],
            [[3,1],[4,1],[5,1],[6,1]],
            [[4,1],[5,1],[6,1],[7,1]],

            //horizontal linha 3
            [[0,2],[1,2],[2,2],[3,2]],
            [[1,2],[2,2],[3,2],[4,2]],
            [[2,2],[3,2],[4,2],[5,2]],
            [[3,2],[4,2],[5,2],[6,2]],
            [[4,2],[5,2],[6,2],[7,2]],

             //horizontal linha 4
            [[0,3],[1,3],[2,3],[3,3]],
            [[1,3],[2,3],[3,3],[4,3]],
            [[2,3],[3,3],[4,3],[5,3]],
            [[3,3],[4,3],[5,3],[6,3]],
            [[4,3],[5,3],[6,3],[7,3]],

            //horizontal linha 5
            [[0,4],[1,4],[2,4],[3,4]],
            [[1,4],[2,4],[3,4],[4,4]],
            [[2,4],[3,4],[4,4],[5,4]],
            [[3,4],[4,4],[5,4],[6,4]],
            [[4,4],[5,4],[6,4],[7,4]],

            //horizontal linha 6
            [[0,5],[1,5],[2,5],[3,5]],
            [[1,5],[2,5],[3,5],[4,5]],
            [[2,5],[3,5],[4,5],[5,5]],
            [[3,5],[4,5],[5,5],[6,5]],
            [[4,5],[5,5],[6,5],[7,5]],
    
            
        ]
        
        for(let i = 0; i < victoryCondition.length; i++){

          const coord1 = victoryCondition[i][0]
          const coord2 = victoryCondition[i][1]
          const coord3 = victoryCondition[i][2]
          const coord4 = victoryCondition[i][3]

         
          
          if (this.board[coord1[0]][coord1[1]] === this.board[coord2[0]][coord2[1]] &&
            this.board[coord2[0]][coord2[1]] === this.board[coord3[0]][coord3[1]] &&
            this.board[coord3[0]][coord3[1]] === this.board[coord4[0]][coord4[1]]){

                console.log(`Vitoria do ${this.currentPlayer}`)
                this.gameOver = true

            this.posWinin = [this.boardBackUp[coord1[0]][coord1[1]], this.boardBackUp[coord2[0]][coord2[1]],this.boardBackUp[coord3[0]][coord3[1]],this.boardBackUp[coord4[0]][coord4[1]]]
          }
        }
      }
      
}

