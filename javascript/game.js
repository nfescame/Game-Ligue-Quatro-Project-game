let chipElementRed = document.getElementById('red')
let chipElementBlue = document.getElementById('blue')
let containerElement = document.getElementById('container')
class Game{
    constructor(){
        this.tiles = [];
        this.numPlayers = 2
        this.currentPlayer = 1
        this.listPlayers = [chipElementRed.className,chipElementBlue.className]
        this.newChipClass = ''
    }
    init(){//tiles recebe posiçao do tabuleiro 6/7
        for(let i = 1; i <= 42; i++){
            let tile = document.querySelector("#n"+i);
            this.tiles.push(tile);
        }
        this.renderInit()
    }
    renderInit(){//organiza posiçoes no tabuleiro 6/7
        for(let i in this.tiles){
            let tile = this.tiles[i];
            if(tile){
                tile.style.left = (i%7) * 100 + "px";
                if(i < 7){
                    tile.style.top = "0px"
                }else
                if(i < 14){
                    tile.style.top = "100px"
                }else
                if(i < 21){
                    tile.style.top = "200px"
                }else
                if(i < 28){
                    tile.style.top = "300px"
                }else
                if(i < 35){
                    tile.style.top = "400px"
                }else
                if(i < 42){
                    tile.style.top = "500px"
                }
                
            }
        }
        return 'true'
    }

    createChipElement(){

        let newChip = document.createElement('div')
        let classes = this.newChipClass.split(' ')
        for(let i in classes){
            newChip.classList.add(classes[i])
            containerElement.appendChild(newChip)
        }
    }
    
    checkPlayerCurrent(){
        
        if(this.currentPlayer === 1){
            console.log('1')
            this.newChipClass = this.listPlayers[0];
            this.currentPlayer = 2
        }else{
            console.log('2')
            this.newChipClass = this.listPlayers[1];
            this.currentPlayer = 1
        }

    }
   
    checkChosenPosition(){

    }
    checkChipPosition(){

    }
    gameOver(){

    }

}

