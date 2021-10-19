let statsPoints = 0;
let strenght = 1;
let speed = 1;
let defense = 1;
let luck = 1;


function increaseStat() {
    strenght += 1;
    console.log(statsPoints ,strenght, speed, defense, luck)
    updateStatsText();
}

function updateStatsText() {
    document.getElementById('str').innerText = strenght;
}

function deleteMe() {
    for (let index = 0; index < 2; index++) {    
       console.log("texto "+ index);
       document.getElementsByName('DeleteButton')[0].remove();
      
    }
}