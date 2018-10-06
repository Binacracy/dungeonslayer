gameObj.Dungeon = function(){};

var enemyButton;
var skillBtn1, skillBtn2, skillBtn3, skillBtn4, skillBtn5, test, attackBtn;

var hero = {
    hp: 100,
    mana: 100,
    attack: 1,
    def: 1,
    acc: 1,
    res: 1,
    skillQueue: []
};

var enemy = {
    hp: 100,
    mana: 100,
    attack: 10,
    def: 1,
    acc: 1,
    res: 1,
    skillQueue: []
};

var heroSkills = {
    "FireSword": ["FireSword", 10],
    "Drain": ["Drain", 10],
    "Freeze": ["Freeze", 10],
    "IceSword": ["IceSword", 10],
    "FireArrow": ["FireArrow", 10]
};

var enemySkills = {
    "0": ["Tackle", 5],
    "1": ["Poison Claw", 5],
    "2": ["Leathal Sting", 10],
    "3": ["Scratch", 10]
};

gameObj.Dungeon.prototype = {
    preload: function(){
        game.load.image('hero', 'assets/sprites/02_Heroine.png');
        game.load.image('dune_crawler', 'assets/sprites/dune_crawler.png');
        game.load.image('green_slime', 'assets/sprites/green_slime.png');
        
        //Loading skills
        game.load.image('FireSword', 'assets/sprites/01_FireSword.png');
        game.load.image('Drain', 'assets/sprites/01_Drain.png');
        game.load.image('Freeze', 'assets/sprites/01_Freeze.png');
        game.load.image('IceSword', 'assets/sprites/01_IceSword.png');
        game.load.image('FireArrow', 'assets/sprites/01_FireArrow.png');
    },
    create: function (){
        console.log("Inside dungeon");
        game.stage.backgroundColor = "#182d3b";
        game.add.image(200, 300, "hero");
        
        enemyButton = game.add.button(600, 100, "dune_crawler", attackEnemy, this);
        skillBtn1 = game.add.button(200, 400, "FireSword", addSkillToQueue, this);
        skillBtn2 = game.add.button(250, 400, "Drain", addSkillToQueue, this);
        skillBtn3 = game.add.button(300, 400, "Freeze", addSkillToQueue, this);
        skillBtn4 = game.add.button(350, 400, "IceSword", addSkillToQueue, this);
        skillBtn5 = game.add.button(400, 400, "FireArrow", addSkillToQueue, this);
        
        attackBtn = game.add.button(600, 475, "haha", attack, this);
        test = game.time.events.add(Phaser.Timer.SECOND * 10, console.log("hihihi"), this);
        //skillBtn1.onInputDown.add(addSkill(skillBtn1.key));
    },
    update: function (){
        
    }
};

function attackEnemy(){
    if (hero.hp <= 0){
        changeState("Game");
    }
    else{
        enemy.hp -= hero.attack;
        hero.hp -= enemy.attack;
        console.log("Hero HP: " + hero.hp);
        console.log("Enemy HP: " + enemy.hp);
    }
};

function addSkillToQueue(btn){
    if (hero.skillQueue.length >= 5){
        attack();
    }
    else{
        //let heroSkills = searchSkill(btn);
        var rndNum = Math.floor(Math.random() * Object.keys(enemySkills).length);
        console.log(rndNum);
        hero.skillQueue.push(heroSkills[btn.key]);
        enemy.skillQueue.push(enemySkills[rndNum]);
        console.log(hero.skillQueue);
        console.log(enemy.skillQueue);
    }
    
};

/*function searchSkill(id){
    let skillPos = heroSkills.find(pos => pos.name === id.key);
    return skillPos;
};*/

function attack(){
    if (hero.skillQueue.length < 5){
        console.log("Please select your skills");
    }
    else{
        for (var i = 0; i<hero.skillQueue.length; i++){
            enemy.hp -= hero.skillQueue[i][1];
            hero.hp -= enemy.skillQueue[i][1];
            console.log("Hero used " + hero.skillQueue[i][0] + " dealing " + hero.skillQueue[i][1] + " damage");
            console.log("Enemy used " + enemy.skillQueue[i][0] + " dealing " + enemy.skillQueue[i][1] + " damage");
            console.log(hero.hp);
            console.log(enemy.hp);
        }
        hero.skillQueue.length = 0;
        enemy.skillQueue.length = 0;
    }
}