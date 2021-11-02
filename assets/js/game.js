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
}
function decreaseSpd() {
        if (speed > 1){
        speed -= 1;
        statsPoints += 1;
        updateStatsText();
    }
}
function decreaseDef() {
        if (defense > 1){
        defense -= 1;
        statsPoints += 1;
        updateStatsText();
    }
}
function decreaseLck() {
        if (luck > 1){
        luck -= 1;
        statsPoints += 1;
        updateStatsText();
    }
}
////DecreaseStats////////DecreaseStats////
////Functions////////Functions////
function updateStatsText() {
    document.getElementById('pts').innerText = statsPoints;
    document.getElementById('str').innerText = strenght;
    document.getElementById('spd').innerText = speed;
    document.getElementById('def').innerText = defense;
    document.getElementById('lck').innerText = luck;
}
////Functions////////Functions////
////Loaders////////Loaders////
let objectStatsBox = document.getElementById("MainStatsBox");

/* StatsBox that should be called when there is availeble points to spend */
function loadStatsBox() {
   let element = document.getElementById("MainPlace");
   element.appendChild(objectStatsBox);
   updateStatsText();
}

////Loaders////////Loaders////
////Deleters////////Deleters////
function deleteStatsBox() {
    objectStatsBox.remove();
}
////Deleters////////Deleters////
////Initializaztion////////Initializaztion////

////Initializaztion////////Initializaztion////

/*
function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById(""); 
  document.body.insertBefore(newDiv, currentDiv); 
}
///////////////////////////////////////////
<html>
<body>
<div id="new">
<p id="p1">Tutorix</p>
<p id="p2">Tutorialspoint</p>
</div>
<script>
   var tag = document.createElement("p");
   var text = document.createTextNode("Tutorix is the best e-learning platform");
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);
</script>
</body>
</html>
*/