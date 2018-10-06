gameObj.Game = function(){};

var button;

gameObj.Game.prototype = {
    preload: function(){
        game.load.spritesheet('button', 'assets/spritesheet/Buttons.png', 150, 70);
    },
    create: function (){
        game.stage.backgroundColor = "#182d3b";
        button = game.add.button(game.world.centerX - 70, 250, 'button', enterDungeon, this, null, 2);
    },
    update: function (){
        
    }
};

function enterDungeon(){
    changeState("Dungeon");
}