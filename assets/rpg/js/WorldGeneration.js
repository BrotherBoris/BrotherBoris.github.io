//Generates a room Template
function GenerateRoomTemplate(template) {
    let enemyCount =0;
    let linePointer=3;
    if(template.isSafeZone != true){
        //Spawn enemies
        enemyCount = getRandomInt(1,3)+1;
    }

    //Spawn exits
    let exitCount = getRandomInt(template.minExits, (template.minExits+3));


    CreateMenuOnTheFly(Container, template.biome + "Cave", template.caveName, (4+exitCount+enemyCount));
    document.getElementById(template.biome + "Cave_Line_1").innerText = player.name + " enters the cave, it is...";
    document.getElementById(template.biome + "Cave_Line_2").innerText = template.description;
    if (template.isSafeZone != true) {
        //Alert about enemies
        document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "...There are threats in this cave!";
        linePointer++;
        //PlaceHolder, will create a function tha numbers the amaount of a enemie
        for (let index = 0; index < enemyCount-1; index++) {
            document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "It's a "+crab.name+"!";
            linePointer++
        }
    }
    document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "What will you do?";
    linePointer++;
    document.getElementById(template.biome + "Cave_Line_"+linePointer).innerText = "'Scavange'";
    linePointer++;
    for (let index = 0; index < exitCount; index++) {
        console.log("created a exit");
        document.getElementById(template.biome + "Cave_Line_" + linePointer).appendChild(ReturnBtn("exit"+(index+1),"Exit through hole number "+(index+1), function(){console.log("huh")}));
        linePointer++;
    }
}

let rockyRoom = new Cave("Rocky cave", "Battle", "Rocky", false, 2, "A Rocky cave with rought surfaces, red sand falls from the ceiling...");


//Generates the starting room
function GenerateStartingRoom(charN) {
    CreateMenuOnTheFly(Container, "StartingRoom", "Strange Cave", 6);
    document.getElementById("StartingRoom_Line_1").innerText = charN + " Wakes up in a strange cave...";
    document.getElementById("StartingRoom_Line_2").innerText = "There is only one exit...";
    document.getElementById("StartingRoom_Line_3").innerText = "Whom you will not be able to return from.";
    document.getElementById("StartingRoom_Line_4").innerText = "What will you do?";
    document.getElementById("StartingRoom_Line_5").appendChild(ReturnBtn("Scv","Scavange",function(){}));
    document.getElementById("StartingRoom_Line_6").appendChild(ReturnBtn("Exit", "Go throught the exit", function () { GenerateRoomTemplate(moistRoom); DeleteMenu("StartingRoom")}));
}

//Generates a Treasure room


//Generates a store room


//Generates a fighting room


