

class Game{
    constructor(){
        this.tiles = [];
    }
    init(){//tiles recebe posiçao do tabuleiro 6/7
        for(let i = 1; i <= 42; i++){
            let tile = document.querySelector("#n"+i);
            this.tiles.push(tile);
        }
        this.render()
    }
    render(){//organiza posiçoes no tabuleiro 6/7
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
    }
}


const game = new Game()

game.init()