let userName = prompt('Qual o teu nome, maluco?');

//let userName = "Santiago";

let finalImage = document.getElementById("TheImage");
let finalText = document.getElementById("TheText");
let greeter = document.getElementById("TheGreeter");

let deletBlock = document.getElementById("TheDelete");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function setWonGreeterText() {
    greeter.innerText = "Parabens "+userName+"! você ganhou...dessa vez! A proxima vez que você jogar, eu lhe garando que ira conhecer o real significado de nigga kiss";
}

function setDefeatGreeterText() {
    greeter.innerText = "HAHAHA, sinta o poder do nigga kiss entando em você, "+userName+", sinta ele te penetrar e controlar o seu sangue...o guiando ate o seu mangalho e lhe dando uma ereção"
}

function winGame() {
    setWonGreeterText();
    finalText.innerText = "Nada...Você Ganhou";
    finalImage.src = "/assets/img/door.png";
    deletBlock.remove();
}

function loseGame(){
    setDefeatGreeterText();
    finalImage.src = "/assets/img/kiss.png";
    finalText.innerText = "Nigga Kissing!";
    deletBlock.remove();
}

function doorGame() {
    let r = getRandomInt(1,3)
    switch (r) {
        case 1:
            winGame();
            break;
        case 2:
            winGame();
            break;
        case 3:
            loseGame();
            break;
    }
}

if (userName == '')     
    userName = 'Meu Xapa';
else if(userName == null)
    userName = 'Meu Xapa';

for (let index = 0; index <= 1; index++) {
    document.getElementsByName("NamePlace")[index].innerText = userName;
}


//Deletar o delete later, mudar a imagem, mostrar texto final
