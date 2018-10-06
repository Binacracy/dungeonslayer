var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add("MainMenu", gameObj.MainMenu);
game.state.add("Game", gameObj.Game);
game.state.add("Dungeon", gameObj.Dungeon);
game.state.start("Dungeon");