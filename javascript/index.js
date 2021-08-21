
const game = new Game();

document.addEventListener('click', (event) => {
    if(game.renderInit()){
        game.checkPlayerCurrent()
        game.checkSelectPosition(event.target)
        game.checkTilePosition()
        game.createChipElement()
    }
    
});

game.init();
