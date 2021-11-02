var game = document.getElementById("game");
var character = document.getElementById("character");
var block = document.getElementById("block");
var startButton = document.getElementById("start");
var buttonBar = document.getElementById("buttons");

var scoreT =0;
var scoreM =0;

var isStarted = false;


function increaseScore(){
    scoreT +=1;
    document.getElementById("tScore").innerText = scoreT;
}

function setFinalScore(){
    scoreM = scoreT;
    scoreT = 0;
    document.getElementById("tScore").innerText = scoreT;
    document.getElementById("mScore").innerText = scoreM;
}


function begin() {
    isStarted = true;
    startEnemy();
    startButton.remove();
    
}

function finish(){
    isStarted = false;
    endEnemy();
    buttonBar.appendChild(startButton);
    setFinalScore();
}

function startEnemy() {
    game.appendChild(block);
    block.classList.add("animateEnemyWalk");
}

function endEnemy() {
    block.classList.remove("animateEnemyWalk");
    block.remove();
}


function jump() {
    if (isStarted == true && character.classList != "animateJumpJump"){
        character.classList.add("animateJump");
    }
    setTimeout(function(){
        character.classList.remove("animateJump");
    },500);
}

var checkDead = setInterval(function(){
   var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   
   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        finish();
    }
    if(blockLeft < 0){
        endEnemy();
        increaseScore();
        startEnemy();
    }

}, 10);