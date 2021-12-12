

////Auxiliar////////Auxiliar////
/* Deletes a menu by id */
function DeleteMenu(id) {
    document.getElementById(id).remove();
}

function StartGame() {
    CreateNameAskerMenu(Container, userName);
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
    document.getElementById("CreationMenu_Line_4").innerText = "Set the Stats, "+StatPoints+" Available";
    //Sets the Strenght
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnBtn("StrMinus", "-",function(){ChangeAStat("-", "Str");}))
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnSpan("Str", " Strenght: "+Strenght+" "))
    document.getElementById("CreationMenu_Line_5").appendChild(ReturnBtn("StrPlus", "+",function(){ChangeAStat("+", "Str");}))
    //Sets the Speed
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnBtn("SpdMinus", "-",function(){ChangeAStat("-", "Spd");}))
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnSpan("Spd", " Speed: " + Speed + " "))
    document.getElementById("CreationMenu_Line_6").appendChild(ReturnBtn("SpdPlus", "+",function(){ChangeAStat("+", "Spd");}))
    //Sets the Defense
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnBtn("DefMinus", "-",function(){ChangeAStat("-", "Def");}))
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnSpan("Def", " Defense: " + Defense + " "))
    document.getElementById("CreationMenu_Line_7").appendChild(ReturnBtn("DefPlus", "+",function(){ChangeAStat("+", "Def");}))
    //Sets the Luck
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnBtn("LckMinus", "-",function(){ChangeAStat("-", "Lck");}))
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnSpan("Lck", " Luck: " + Luck + " "))
    document.getElementById("CreationMenu_Line_8").appendChild(ReturnBtn("LckPlus", "+",function(){ChangeAStat("+", "Lck");}))
    //Saves everything
    document.getElementById("CreationMenu_Line_9").appendChild(ReturnBtn("Finish", "Save and Finish", function () { SaveCharName(); DeleteMenu("CreationMenu")}));

}

/*  */

////Menus////////Menus////
////StatsHandler////////StatsHandler////
function SaveCharName(params) {
    newCharName = document.getElementById("CharInput").value;
    if(newCharName ==""){
        newCharName = "Nameless One";
    }
    CharName = newCharName;
    console.log(CharName);
}
function ChangeAStat(CType, stat) {
    switch (stat) {
        case "Str":
            if (CType == "+" && StatPoints > 0) {
                StatPoints--;
                Strenght++;
            } else if (CType == "-" && Strenght > 1) {
                StatPoints++;
                Strenght--;
            }
            document.getElementById("Str").innerText=" Strenght: " + Strenght + " "
            break;
        case "Spd":
            if (CType == "+" && StatPoints > 0) {
                StatPoints--;
                Speed++;
            } else if (CType == "-" && Speed > 1) {
                StatPoints++;
                Speed--;
            }
            document.getElementById("Spd").innerText = " Speed: " + Speed + " "
            break;
        case "Def":
            if (CType == "+" && StatPoints > 0) {
                StatPoints--;
                Defense++;
            } else if (CType == "-" && Defense > 1) {
                StatPoints++;
                Defense--;
            }
            document.getElementById("Def").innerText = " Defense: " + Defense + " "
            break;
        case "Lck":
            if (CType == "+" && StatPoints > 0) {
                StatPoints--;
                Luck++;
            } else if (CType == "-" && Luck > 1) {
                StatPoints++;
                Luck--;
            }
            document.getElementById("Lck").innerText = " Luck: " + Luck + " "
            break;    
        default:
            console.log("Error");
            break;
    }
    document.getElementById("CreationMenu_Line_4").innerText = "Set the Stats, " + StatPoints +" Available"
    console.log("G:" + StatPoints + "|Str:" + Strenght + "|Spd:" + Speed + "|Def:" + Defense + "|Lck:" + Luck)
}
////StatsHandler////////StatsHandler////