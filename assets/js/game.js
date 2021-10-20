let statsPoints = 10;
let strenght = 1;
let speed = 1;
let defense = 1;
let luck = 1;

////IncreaseStats////////IncreaseStats////str|spd|def|lck|Str|Spd|Def|Lck
function increaseStr() {
    if (statsPoints > 0){
        strenght += 1;
        statsPoints -= 1;
        updateStatsText();
    }
}
function increaseSpd() {
    if (statsPoints > 0){
        speed += 1;
        statsPoints -= 1;
        updateStatsText();
    }
}
function increaseDef() {
    if (statsPoints > 0){
        defense += 1;
        statsPoints -= 1;
        updateStatsText();
    }
}
function increaseLck() {
    if (statsPoints > 0){
        luck += 1;
        statsPoints -= 1;
        updateStatsText();
    }
}
////IncreaseStats////////IncreaseStats////
////DecreaseStats////////DecreaseStats////str|spd|def|lck|Str|Spd|Def|Lck
function decreaseStr() {
        if (strenght > 1){
        strenght -= 1;
        statsPoints += 1;
        updateStatsText();
    }
    console.log(statsPoints ,strenght, speed, defense, luck)
}
function decreaseSpd() {
        if (speed > 1){
        speed -= 1;
        statsPoints += 1;
        updateStatsText();
    }
    console.log(statsPoints ,strenght, speed, defense, luck)
}
function decreaseDef() {
        if (defense > 1){
        defense -= 1;
        statsPoints += 1;
        updateStatsText();
    }
    console.log(statsPoints ,strenght, speed, defense, luck)
}
function decreaseLck() {
        if (luck > 1){
        luck -= 1;
        statsPoints += 1;
        updateStatsText();
    }
    console.log(statsPoints ,strenght, speed, defense, luck)
}
////DecreaseStats////////DecreaseStats////


function updateStatsText() {
    document.getElementById('pts').innerText = statsPoints;
    document.getElementById('str').innerText = strenght;
    document.getElementById('spd').innerText = speed;
    document.getElementById('def').innerText = defense;
    document.getElementById('lck').innerText = luck;
}

function deleteMe() {
    for (let index = 0; index < 2; index++) {    
       console.log("texto "+ index);
       document.getElementsByName('DeleteButton')[0].remove();
    }
}

