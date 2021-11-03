////CharCriticalInformation////////CharCriticalInformation////
let char = document.getElementById("char");

let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));;
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
function checkY(objectPos, signal){
    if(objectPos >= 0 && signal != "-=")
        return true;
    else
        return false;


        //checkar se pode andar negativamente quando esta na posição 0 e quanto esta no limite do mapa - (tamanho_proprio)
}

function checkZ(){}

/* ----Moviment Check---- */
function walkUp() {
    let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));

    charValT -= 20;

    charDisplayT.innerText = charValT;

    char.style.top = charValT + "px";
}
function walkDown(){
    let charValT = parseInt(window.getComputedStyle(char).getPropertyValue("top"));

    charValT += 20;

    charDisplayT.innerText = charValT;

    char.style.top = charValT+"px";
}

function walkLeft() {
    let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));;

    charValL -= 20;

    charDisplayL.innerText = charValL;

    char.style.left = charValL + "px";
}
function walkRight() {
    let charValL = parseInt(window.getComputedStyle(char).getPropertyValue("left"));;

    charValL += 20;

    charDisplayL.innerText = charValL;

    char.style.left = charValL + "px";
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