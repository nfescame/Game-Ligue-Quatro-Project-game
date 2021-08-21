let chipElementRed = document.getElementById('red')
let chipElementBlue = document.getElementById('blue')
class Game{
    constructor(){
        this.tiles = [];
        this.currentPlayer = 'player1'
        this.listPlayers = [chipElementRed.className,chipElementBlue.className]
        this.newChipClass = ''
        this.newChipId = ''
        this.containerForNextChip = document
    }
    // primeiro passo, iniciar
    init(){//tiles recebe 42 posições dos elementos html para formar o tabuleiro 6/7
        for(let i = 1; i <= 42; i++){
            let tile = document.querySelector("#n"+i);
            this.tiles.push(tile);
        }
        this.renderInit()
    }
    //segundo passo, dezenhar tabuleiro
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
    //terceiro passo, checar o proximo jogador
    checkPlayerCurrent(){ 
        
        if(this.currentPlayer === 'player1'){
            this.newChipClass = this.listPlayers[0];
            this.currentPlayer = 'player2'
        }else{
            this.newChipClass = this.listPlayers[1];
            this.currentPlayer = 'player1'
        }

    }
    //quarto passo, checar posição selecionada 
    checkSelectPosition(position){ //checa a posição para colocar o chip
        // containerNextChip recebe a id do tile clicado e usa para setar a posição 
        this.containerForNextChip = document.getElementById(position.id)//pega apenas o id 
    }
    //checar se a posição no tabuleiro ja tem um chip
    checkTilePosition(){
        //trabalhar aqui
    }

    createChipElement(){
    
        let newChip = document.createElement('div')
        let classes = this.newChipClass.split(' ')
        newChip.id = this.newChipId
        for(let i in classes){
            newChip.classList.add(classes[i])
            this.containerForNextChip.appendChild(newChip)
        }
    }
    
    conditionWins(){

    }
    gameOver(){

    }

}

