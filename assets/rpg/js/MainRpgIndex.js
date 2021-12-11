let Container = document.getElementById("Main-Container");
let ChildPointer = Container.childElementCount;

let field = document.getElementById("1");
let input = document.getElementById("askName");

let userName = "";

function NameStarter() {
    let div = document.getElementById("NameAsker");
    let inputName = div.children[0].children[1].value;
    div.remove();
    if(inputName == ""){
        inputName = "Nameless_one";
    }
    userName = inputName;
    CreateMainMenu(userName);
    
}

function CreateMainMenu(user){
    CreateMenuOnTheFly("MainMenu", "Main Menu", 4);
    document.getElementById("MainMenu_Line_1").innerText
        = "Welcome "+ user;
    document.getElementById("MainMenu_Line_2").innerText
        = "What would you like to do?";
    document.getElementById("MainMenu_Line_3").appendChild(CreateBtn("MainMenu_Line_3", "Start a new game"));
    document.getElementById("MainMenu_Line_4").appendChild(CreateBtn("MainMenu_Line_3", "Change my name"));
}

//creates a generic menu on the fly
function CreateMenuOnTheFly(id, menuName, avalibleLines) {
    var nodeDiv = document.createElement("div");
    var nodeP = document.createElement("p");

    nodeDiv.id = id;
    nodeDiv.appendChild(nodeP);
    nodeP.innerHTML += "|---";
    nodeP.appendChild(CreateSpan(id + "Title", menuName));
    nodeP.innerHTML += "---|";
    nodeP.appendChild(CreateBr());
    for (let index = 0; index < avalibleLines; index++) {
        nodeP.innerHTML += "|";
        nodeP.appendChild(CreateSpan(id+"_Line_"+(index+1), ""));
        nodeP.appendChild(CreateBr());
    }
    nodeP.innerHTML += "|----";
    Container.appendChild(nodeDiv);  
}

function CreateMenu() {
    Container.appendChild(genericMenu);
}

function Change() {
    field.innerHTML += input.children[0].value;
    input.remove();
}

function AskAName(bank, input) {
    bank.innerHTML += input.children[0].value;
    input.remove();
}

/* function Change() {
    var v = document.getElementById("askName");
    var p = document.getElementById("1");
    p.innerHTML += v.value;
    console.log("a")

    input.value
} */
