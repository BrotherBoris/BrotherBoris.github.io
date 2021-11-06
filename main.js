////CharCriticalInformation////////CharCriticalInformation////
let char = document.getElementById("char");

let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));;

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
function checkX(cSize, charValL, boundarieR, signal){
    if (signal == "-=" && charValT != 0)
        return true;
    else if (signal == "+=" && charValT != (cSize + sceneSize - 20))
        return true;
    else
        return false;
}

function checkZ(charValT, signal, cSize, sceneSize){
    if (signal == "-=" && charValT != 0)
        return true;
    else if(signal == "+=" && charValT != (cSize + sceneSize - 20))
        return true;
    else
        return false;
}

/* ----Moviment Check---- */
function walkUp() {
    let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    if(checkZ(charValT, "-=") == true){
        charValT -= charSizeH;

        charDisplayT.innerText = charValT;

        char.style.top = charValT + "px";   
    }
}
function walkDown(){
    let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    if(checkZ(charValT, "+=", charSizeH, boundariesD) == true){
        charValT += charSizeH;

        charDisplayT.innerText = charValT;

        char.style.top = charValT+"px";
    }
}

function walkLeft() {
    let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));;
    if (checkZ(charValL, "-=") == true) {
        charValL -= charSizeW;

        charDisplayL.innerText = charValL;

        char.style.left = charValL + "px";
    }
}
function walkRight() {
    let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));;
    if (checkZ(charValL, "+=", charSizeW, boundarieR) == true) {
        charValL += charSizeW;

        charDisplayL.innerText = charValL;

        char.style.left = charValL + "px";
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