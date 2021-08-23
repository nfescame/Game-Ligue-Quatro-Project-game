class Game{
    constructor(){
        this.lin
        this.gameOver = false;
        this.winningPlay = []
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
        
        for(let i = 0; i < this.boardBackUp.length; i++){ //varre o array pai

            if(this.boardBackUp[i] === this.boardBackUp[col]){ //entra na coluna
            
                for(let j = 0 ; j < this.boardBackUp[i].length; j++){

                    if(!isNaN(this.boardBackUp[i][j])){
                        
                        this.lin = this.boardBackUp[i][j]
                        this.boardBackUp[i][j] = this.currentPlayer
                        return this.boardBackUp[col][i] 
                    }
                    
                }
                
            }
        }

        this.nextPlayer() 
     
    }
    printChip(){
        console.log(this.lin)
        const chip = document.getElementById(this.lin)
        if(this.currentPlayer === 'player1'){
            chip.classList.add('color-red')
        }else{
            chip.classList.add('color-yellow')
        }
       
    }
   
       
}

