
const game = new Game();

document.addEventListener('click', (event) => {
    if(game.renderInit()){
        game.checkPlayerCurrent()
        game.createChipElement()
    }
    
});

game.init();
