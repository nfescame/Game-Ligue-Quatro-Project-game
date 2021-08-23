let btnResetElement = document.getElementById('reset')
const game = new Game();

document.addEventListener('click', (event) => {
    
    if(event.target.parentElement.classList.contains('container-col')){
        const colSelect = event.target.parentElement.id//pega o id da coluna clicada 
        const idCol = colSelect.substr(-1,1)//retira apenas o numero da id 
        game.fillTile(idCol)//invoca a função pasando o parametro (num da coluna selecionada)
        game.printChip()// spawn chip 
        game.winningCheck() // falta comcluir
       
    }
 
});
btnResetElement.addEventListener('click', (event) => {
    
    game.restartGame()
    game.clearBoardBackUp()
 
});


