////CharCriticalInformation////////CharCriticalInformation////
/* ----Class Instanciation---- */
let mainChar = new Character();

mainChar.reference = document.getElementById("char");
mainChar.X = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("left"));
mainChar.Y = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("top"));
mainChar.SizeH = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("height"));
mainChar.SizeW = parseInt(window.getComputedStyle(mainChar.Reference).getPropertyValue("width"));
////CharCriticalInformation////////CharCriticalInformation////
////SceneIndormations////////SceneIndormations////
let theScene = new Scene();

theScene.Reference = document.getElementById("Scene");
theScene.boundsY = parseInt(window.getComputedStyle(theScene.reference).getPropertyValue("height"));
theScene.boundsX = parseInt(window.getComputedStyle(theScene.reference).getPropertyValue("width"));
////SceneIndormations////////SceneIndormations////