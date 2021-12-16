////Auxiliar////////Auxiliar////
/* Starts a game session(the whole program) */
function StartSession() {
    CreateNameAskerMenu(Container, userName);
}

/* Deletes a menu by id */
function DeleteMenu(id) {
    document.getElementById(id).remove();
}

/* Starts the game after creating a character */
function StartGame() {
    GenerateStartingRoom(player.name);
}

/* Function needed to set the user name*/
function RegisterNameAsker(container) {
    let div = document.getElementById("NameAsker");
    let inputName = div.children[0].children[1].value;
    div.remove();
    if (inputName == "") {
        inputName = "User";
    }
    userName = inputName;
    CreateMainMenu(container, userName);
}
/* Generates a random number */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

////Auxiliar////////Auxiliar////
////Menus////////Menus////
/* Creates a generic menu to be used as a template to other menus */
function CreateMenuOnTheFly(container, id, menuName, avalibleLines) {
    let nodeDiv = document.createElement("div");
    let nodeP = document.createElement("p");

    nodeDiv.id = id;
    nodeDiv.appendChild(nodeP);
    nodeP.innerHTML += "|---";
    nodeP.appendChild(ReturnSpan(id + "Title", menuName));
    nodeP.innerHTML += "---|";
    nodeP.appendChild(ReturnBr());
    for (let index = 0; index < avalibleLines; index++) {
        nodeP.innerHTML += "|";
        nodeP.appendChild(ReturnSpan(id + "_Line_" + (index + 1), ""));
        nodeP.appendChild(ReturnBr());
    }
    nodeP.innerHTML += "|----";
    container.appendChild(nodeDiv);
}

/* Menu where the username is asked and set */
function CreateNameAskerMenu(container, user) {
    let nodeDiv = document.createElement("div");
    let nodeP = document.createElement("p");

    nodeDiv.id = "NameAsker";
    nodeDiv.appendChild(nodeP);
    nodeP.innerHTML += "|Type Your Name";
    nodeP.appendChild(ReturnBr());
    nodeP.innerHTML += "|My name is:";
    nodeP.appendChild(ReturnInput("UserNameInput", "text", user));
    nodeP.innerHTML += " ";
    nodeP.appendChild(ReturnBtn("", "Done!", function () { RegisterNameAsker(container); }))
    container.appendChild(nodeDiv);
}

/* Creates the main menu */
function CreateMainMenu(container, user) {
    //Create the main menu
    CreateMenuOnTheFly(container, "MainMenu", "Main Menu", 4);
    //Greets the player in the 1 and 2 lines
    document.getElementById("MainMenu_Line_1").innerText
        = "Welcome " + user;
    document.getElementById("MainMenu_Line_2").innerText
        = "What would you like to do?";
    //Starts a new game
    document.getElementById("MainMenu_Line_3").appendChild
        (ReturnBtn("MainMenu_btn_Line_3", "Start a new game", function () { CreateCharCreationMenu(container); DeleteMenu("MainMenu"); }));
    //Renames the player
    document.getElementById("MainMenu_Line_4").appendChild
        (ReturnBtn("MainMenu_btn_Line_4", "Change my name", function () { CreateNameAskerMenu(container, user); DeleteMenu("MainMenu"); }));
}

/* Creates the character creation menu */
function CreateCharCreationMenu(container) {
    //create the menu
    CreateMenuOnTheFly(container, "CreationMenu", "Character Creation", 9)
    document.getElementById("CreationMenu_Line_1").innerText = "Creating a character...";
    document.getElementById("CreationMenu_Line_2").innerText = "What would your character name be?";
    document.getElementById("CreationMenu_Line_3").appendChild(ReturnInput("CharInput","text",""));
    document.getElementById("CreationMenu_Line_4").innerText = "Set the Stats, "+player.statusPoints+" Available!";
    //Sets the Strenght
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnBtn("StrMinus", "-",function(){ChangeAStat("-", "Str");}))
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnSpan("", " "));
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnBtn("StrPlus", "+",function(){ChangeAStat("+", "Str");}))
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnSpan("Str", " Strenght: "+player.strenght+" "));
    //Sets the Speed
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnBtn("SpdMinus", "-",function(){ChangeAStat("-", "Spd");}))
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnSpan("", " "));
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnBtn("SpdPlus", "+",function(){ChangeAStat("+", "Spd");}))
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnSpan("Spd", " Speed: " + player.speed + " "));
    //Sets the Defense
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnBtn("DefMinus", "-",function(){ChangeAStat("-", "Def");}))
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnSpan("", " "));
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnBtn("DefPlus", "+",function(){ChangeAStat("+", "Def");}))
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnSpan("Def", " Defense: " + player.defense + " "));
    //Sets the Luck
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnBtn("LckMinus", "-",function(){ChangeAStat("-", "Lck");}))
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnSpan("", " "));
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnBtn("LckPlus", "+",function(){ChangeAStat("+", "Lck");}))
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnSpan("Lck", " Luck: " + player.luck + " "));
    //Saves everything
    document.getElementById("CreationMenu_Line_9").appendChild(ReturnBtn("Finish", "Save and Finish", function () { SaveCharName(); StartGame(); DeleteMenu("CreationMenu")}));

}

////Menus////////Menus////
////StatsHandler////////StatsHandler////
function SaveCharName() {
    let newCharName = document.getElementById("CharInput").value;
    if(newCharName ==""){
        newCharName = "Nameless One";
    }
    player.name = newCharName;
}

function ChangeAStat(CType, stat) {
    switch (stat) {
        case "Str":
            if (CType == "+" && player.statusPoints > 0) {
                player.statusPoints--;
                player.strenght++;
            } else if (CType == "-" && player.strenght > 1) {
                player.statusPoints++;
                player.strenght--;
            }
            document.getElementById("Str").innerText=" Strenght: " + player.strenght + " "
            break;
        case "Spd":
            if (CType == "+" && player.statusPoints > 0) {
                player.statusPoints--;
                player.speed++;
            } else if (CType == "-" && player.speed > 1) {
                player.statusPoints++;
                player.speed--;
            }
            document.getElementById("Spd").innerText = " Speed: " + player.speed + " "
            break;
        case "Def":
            if (CType == "+" && player.statusPoints > 0) {
                player.statusPoints--;
                player.defense++;
            } else if (CType == "-" && player.defense > 1) {
                player.statusPoints++;
                player.defense--;
            }
            document.getElementById("Def").innerText = " Defense: " + player.defense + " "
            break;
        case "Lck":
            if (CType == "+" && player.statusPoints > 0) {
                player.statusPoints--;
                player.luck++;
            } else if (CType == "-" && player.luck > 1) {
                player.statusPoints++;
                player.luck--;
            }
            document.getElementById("Lck").innerText = " Luck: " + player.luck + " "
            break;    
        default:
            console.log("Error");
            break;
    }
    document.getElementById("CreationMenu_Line_4").innerText = "Set the Stats, " + player.statusPoints +" Available!"
}
////StatsHandler////////StatsHandler////