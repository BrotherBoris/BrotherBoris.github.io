////CharCriticalInformation////////CharCriticalInformation////
/* ----Class Instanciation---- */
let mainChar = new Character();

mainChar.reference = document.getElementById("char");
mainChar.X = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("left"));
mainChar.Y = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("top"));
mainChar.SizeH = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("height"));
mainChar.SizeW = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("width"));

/* ----Must be replaced---- */
let char = document.getElementById("char");

let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));

let charSizeH = parseInt(window.getComputedStyle(char).getPropertyValue("height"));
let charSizeW = parseInt(window.getComputedStyle(char).getPropertyValue("width"));

////CharCriticalInformation////////CharCriticalInformation////
////SceneIndormations////////SceneIndormations////
let scene = document.getElementById("Scene");
let boundariesD = parseInt(window.getComputedStyle(scene).getPropertyValue("height"));
let boundarieR = parseInt(window.getComputedStyle(scene).getPropertyValue("width"));
////SceneIndormations////////SceneIndormations////
////DispalyTexts////////DispalyTexts////
let charDisplayT = document.getElementById("charDisplayT");
let charDisplayL = document.getElementById("charDisplayL");

charDisplayT.innerText = charValT;
charDisplayL.innerText = charValL;
////DispalyTexts////////DispalyTexts////
////Walking////////Walking////
/* ----Moviment Check---- */
function checkAxis(position, signal, charSize, sceneSize){
    if (signal == "-=" && position != 0)
        return true;
    else if(signal == "+=" && position != (charSize + sceneSize - 20))
        return true;
    else
        return false;
}

/* ----Moviment Check---- */
function walkUp() {
    mainChar.Y = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("top"));
    if(checkAxis(mainChar.Y, "-=") == true){
        mainChar.Y -= mainChar.SizeH;
    
        //DELETE LATER - display the cords on screen       
        charDisplayT.innerText = mainChar.Y;

        mainChar.Reference.style.top = mainChar.Y + "px";   
    }
}
function walkDown(){
    mainChar.Y = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("top"));
    if(checkAxis(mainChar.Y, "+=", mainChar.SizeH, boundariesD) == true){
        mainChar.Y += mainChar.SizeH;
        
        //DELETE LATER - display the cords on screen
        charDisplayT.innerText = mainChar.Y;

        mainChar.Reference.style.top = mainChar.Y+"px";
    }
}

function walkLeft() {
    mainChar.X = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("left"));;
    if (checkAxis(mainChar.X, "-=") == true) {
        mainChar.X -= mainChar.SizeW;
        
        //DELETE LATER - display the cords on screen
        charDisplayL.innerText = mainChar.X;

        mainChar.Reference.style.left = mainChar.X + "px";
    }
}
function walkRight() {
    mainChar.X = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("left"));;
    if (checkAxis(mainChar.X, "+=", mainChar.SizeW, boundarieR) == true) {
        mainChar.X += mainChar.SizeW;
        
        //DELETE LATER - display the cords on screen
        charDisplayL.innerText = mainChar.X;

        mainChar.Reference.style.left = mainChar.X + "px";
    }
}
////Walking////////Walking////
////KeyChecker////////KeyChecker////

document.onkeydown = checkArrowKey;

function checkArrowKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        walkUp();
    }
    else if (e.keyCode == '40') {
        walkDown();
    }
    else if (e.keyCode == '37') {
        walkLeft();
    }
    else if (e.keyCode == '39') {
        walkRight();
    }
}
////KeyChecker////////KeyChecker////