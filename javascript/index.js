let btnResetElement = document.getElementById('reset');
let textElement = document.getElementById('text');
let aladdinSoundElement = document.getElementById('aladdin');
let OnOffSoundElement = document.getElementById('audioOnOff');
let audioOn = true;

const game = new Game();


OnOffSoundElement.addEventListener('click', (event) =>{
    if (audioOn){
        OnOffSoundElement.setAttribute('src', '/img/mic.svg');
        aladdinSoundElement.play();
    }else{
        OnOffSoundElement.setAttribute('src', '/img/mic-off.svg');
        aladdinSoundElement.pause();
    }
    audioOn = !audioOn
    
})

document.addEventListener('click', (event) => {
    
    if(event.target.parentElement.classList.contains('container-col')){
        let textWin = ''
        const colSelect = event.target.parentElement.id//pega o id da coluna clicada 
        const idCol = colSelect.substr(-1,1)//retira apenas o numero da id 

        if(!game.gameOver){
            game.fillTile(idCol)//invoca a função pasando o parametro (num da coluna selecionada)
            game.printChip()// spawn chip 
            game.checkWinCondition()
        }
        
        game.posWinin.map((pos) => {
            const posTile = document.getElementById(pos.toString());
            posTile.classList.add('bg-info','ficha-radius')
            console.log(textWin)
            textElement.innerText = game.textWin
        })
    }
});


btnResetElement.addEventListener('click', (event) => {

    window.location.reload()
    
});



