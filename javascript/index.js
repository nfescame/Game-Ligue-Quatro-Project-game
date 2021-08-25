// botões
let btnResetElement = document.getElementById('reset');
let btnPlayElement = document.getElementById('play');
// texto  para mostrar vencedor 
let textElement = document.getElementById('text');
//elemento de audio
let aladdinSoundElement = document.getElementById('aladdin');
// icone de audio, on e off
let OnOffSoundElement = document.getElementById('audioOnOff');

let scoreLabelP1Element = document.getElementById('scoreLabelP1')
let scoreLabelP2Element = document.getElementById('scoreLabelP2')

let audioOn = false;

const game = new Game();

btnPlayElement.addEventListener('click', (event) =>{
    aladdinSoundElement.play();

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
                console.log(game.points)
            })
        }
    });
    
    
    btnResetElement.addEventListener('click', (event) => {
    
        window.location.reload()
        
    });

})






