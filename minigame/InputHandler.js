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
////PlayerWalking////////PlayerWalking////
/* ----Moviment Check---- */
function checkAxis(position, signal, charSize, sceneSize) {
    if (signal == "-=" && position != 0)
        return true;
    else if (signal == "+=" && position != (charSize + sceneSize - 20))
        return true;
    else
        return false;
}
/* ----Walk functions--------Walk functions---- */
function walkUp() {
    mainChar.Y = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("top"));
    if (checkAxis(mainChar.Y, "-=") == true) {
        mainChar.Y -= mainChar.SizeH;

        //DELETE LATER - display the cords on screen       
        Display();

        mainChar.Reference.style.top = mainChar.Y + "px";
    }
}
function walkDown() {
    mainChar.Y = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("top"));
    if (checkAxis(mainChar.Y, "+=", mainChar.SizeH, theScene.BoundsY) == true) {
        mainChar.Y += mainChar.SizeH;

        //DELETE LATER - display the cords on screen
        Display();

        mainChar.Reference.style.top = mainChar.Y + "px";
    }
}
function walkLeft() {
    mainChar.X = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("left"));;
    if (checkAxis(mainChar.X, "-=") == true) {
        mainChar.X -= mainChar.SizeW;

        //DELETE LATER - display the cords on screen
        Display();

        mainChar.Reference.style.left = mainChar.X + "px";
    }
}
function walkRight() {
    mainChar.X = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("left"));;
    if (checkAxis(mainChar.X, "+=", mainChar.SizeW, theScene.BoundsX) == true) {
        mainChar.X += mainChar.SizeW;

        //DELETE LATER - display the cords on screen
        Display();

        mainChar.Reference.style.left = mainChar.X + "px";
    }
}
////PlayerWalking////////PlayerWalking////