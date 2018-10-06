var gameObj = {};
gameObj.MainMenu = function(){};

var startButton;
var loadButton;

gameObj.MainMenu.prototype = {
    preload: function(){
        game.load.spritesheet('button', 'assets/spritesheet/Buttons.png', 150, 70);
    },
    create: function(){
        startButton = game.add.button(game.world.centerX - 70, 300, 'button', startGame, this);
        loadButton = game.add.button(game.world.centerX - 70, 380, 'button', loadGame, this, null, 1);
    },
    update: function(){
    
    }
}

function changeState(gameState){
    game.state.start(gameState);
}

function startGame(){
    changeState("Game");
}

function loadGame(){
    console.log("Loading game");
    //changeState("Game");
}