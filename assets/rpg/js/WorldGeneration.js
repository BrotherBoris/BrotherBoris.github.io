//Generates a room Template
function GenerateRoomTemplate(template) {
    let linePointer=6;
    if(template.isSafeZone != true){
        //Spawn enemies
        
    }
    //Spawn exits
    let exitCount = getRandomInt(template.minExits, (template.minExits+2));
    //Create the menu base
    CreateMenuOnTheFly(Container, template.biome + "Cave", template.caveName, (7+exitCount));
    //Set the player condition
    document.getElementById(template.biome + "Cave_Line_1").innerText = "HP:"+player.health+
        " |Hunger:"+player.hunger+"/100"+" |Gold:"+player.gold;
    //Set the player stats
    document.getElementById(template.biome + "Cave_Line_2").innerText = "Xp:"+player.xp +"/100"+"|Str:"+
        player.strenght+"|Spd:"+player.speed+"|Def:"+player.defense+"|Lck:"+player.luck;
    document.getElementById(template.biome + "Cave_Line_3").innerText = "-----------------|";

    document.getElementById(template.biome + "Cave_Line_4").innerText = player.name + " enters the cave, it is...";
    document.getElementById(template.biome + "Cave_Line_5").innerText = template.description;

    document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "What will you do?";
    linePointer++;
    //Scavange
    document.getElementById(template.biome + "Cave_Line_" + linePointer)
    .appendChild(ReturnBtn("Scv", "Scavange", function () {Scavange(template,player)}));
    linePointer++;

    for (let index = 0; index < exitCount; index++) {
        let hungercost = getRandomInt(4,10)
        console.log("created a exit");
        document.getElementById(template.biome + "Cave_Line_" + linePointer).appendChild
            (ReturnBtn("Exit" + (index + 1), "Exit through hole number " + (index + 1) + " (" + hungercost+" Hunger)",
                function () { DeleteMenu(template.biome + "Cave"); Navigate(player, template.biome, hungercost);}));
        linePointer++;
    }
}
//Generates the starting room
function GenerateStartingRoom(charN) {
    CreateMenuOnTheFly(Container, "StartingRoom", "Strange Cave", 8);
    document.getElementById("StartingRoom_Line_1").innerText = charN + " Wakes up in a strange cave...";
    document.getElementById("StartingRoom_Line_2").innerText = "There is only one exit...";
    document.getElementById("StartingRoom_Line_3").innerText = "Whom you will not be able to return from.";
    document.getElementById("StartingRoom_Line_4").innerText = "Every cave you go throught will drain from your hunger.";
    document.getElementById("StartingRoom_Line_5").innerText = "Some actions will drain it too, until you fall limp and life-less.";
    document.getElementById("StartingRoom_Line_6").innerText = "How many caves you can go throught before dying in this nighmare?...";
    document.getElementById("StartingRoom_Line_7").innerText = "Is there a end to this?.......";
    document.getElementById("StartingRoom_Line_8").appendChild(ReturnBtn("Exit", "Go throught the exit", function () { GenerateRoomTemplate(moistRoom); DeleteMenu("StartingRoom")}));
}
//Navigate function
function Navigate(protagonist, lastBiome, hungercost) {
    let choosenCave;
    if (protagonist.hunger < 1) {
        GameOverScreen();
    } else if ((protagonist.hunger - hungercost) < 1) {
        GameOverScreen();
    }else{
        protagonist.hunger -= hungercost;
        do {
            choosenCave = getRandomInt(0, (caveIndex.length - 1));
            if (caveIndex[choosenCave].biome == lastBiome) {
            }
        } while (caveIndex[choosenCave].biome == lastBiome);
        GenerateRoomTemplate(caveIndex[choosenCave]);
    }
}

function GameOverScreen() {
    
    CreateMenuOnTheFly(Container, "Endgame", "Game Over", 8);
    document.getElementById("Endgame_Line_1").innerText = player.name + " stumbles and falls face first...";
    document.getElementById("Endgame_Line_2").innerText = "Weak and malnourished...";
    document.getElementById("Endgame_Line_3").innerText = "Soon bodily functions stops and through dry lips a last breath is exhaled";
    document.getElementById("Endgame_Line_4").innerText = "Another body to the pile, among the darkness, merciless and godless...";
    document.getElementById("Endgame_Line_5").innerText = "A corpse that even the flies dosen't want to feast upon...";
    document.getElementById("Endgame_Line_6").innerText = player.name+" survived survivalCount caves...";
    document.getElementById("Endgame_Line_7").innerText = "..."+player.name+" accumulated a total of coinsTotalCount coins.";
    document.getElementById("Endgame_Line_8").innerText = "...this is the end of " + player.name+"...";
}

//Generates a Treasure room


//Generates a store room


//Generates a fighting room
/* Updates the cave to be a fight */
function UpdateToFight(template) {
    

}
function updateTheFight(templater) {
    
}

////Utility////////Utility////
function Scavange(cave, protagonist) {
//Food check
    let foodCount, foodScav, satiation;

    if (cave.foodCount == "high") {
        foodCount = getRandomInt(7,10);
        foodScav = "Hight";
    } else if (cave.foodCount == "mid"){
        foodCount = getRandomInt(3,5);
        foodScav = "mid";
    } else if (cave.foodCount == "low") {
        foodCount = getRandomInt(1, 2);
        foodScav = "low";
    }else{
        foodScav = "none";
        foodCount = 0;
    }
    if (foodScav != "none") {
        if (protagonist.hunger == 100) {
            satiation = "Full"
        } else if ((protagonist.hunger + foodCount) >= 100 ){
            satiation = "Satiated"
            protagonist.hunger = 100;
        }else {
            satiation = "Eaten"
            protagonist.hunger += foodCount;
        }
        console.log("you are "+satiation);
    }
    console.log(foodScav+" "+foodCount);
}

function SpawnEnemies(count) {
    
}


////Utility////////Utility////


/*
function GenerateRoomTemplate(template) {
    let enemyCount =0;
    let linePointer=3;
    if(template.isSafeZone != true){
        //Spawn enemies
        enemyCount = getRandomInt(1,3)+1;
    }
    //Spawn exits
    let exitCount = getRandomInt(template.minExits, (template.minExits+2));

    CreateMenuOnTheFly(Container, template.biome + "Cave", template.caveName, (3+exitCount+enemyCount));
    document.getElementById(template.biome + "Cave_Line_1").innerText = player.name + " enters the cave, it is...";
    document.getElementById(template.biome + "Cave_Line_2").innerText = template.description;
    if (template.isSafeZone != true) {
        //Alert about enemies
        document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "...There are threats in this cave!";
        linePointer++;
        //PlaceHolder, will create a function tha numbers the amaount of a enemie
        for (let index = 0; index < enemyCount-1; index++) {
            console.log("Created a enemie");
            document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "It's a "+crab.name+"!";
            linePointer++
        }
    }
    document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "What will you do?";
    linePointer++;
    for (let index = 0; index < exitCount; index++) {
        console.log("created a exit");
        document.getElementById(template.biome + "Cave_Line_" + linePointer)
            .appendChild(ReturnBtn("Exit" + (index + 1), "Exit through hole number " + (index + 1), function () { DeleteMenu(template.biome + "Cave"); SetExits(template.biome);}));
        linePointer++;
    }
}
*/