

/* function fizzBuzz(entry) {
    if (typeof entry !== 'number')
        return 'Não é um numero';
    if (entry % 3 === 0 && entry % 5 === 0)
        return 'fizzBuzz';
    if (entry % 3 === 0)
        return 'fizz';
    if (entry % 5 === 0)
        return 'Buzz';
    return entry;} */


//let pergunta = prompt("numert");
//let resultado = fizzBuzz(3);
//prompt(resultado);

/* let idade = prompt('qual a sua idade?')
if (idade < 18) {
    alert('menor de idade');
} */

/* let p1 = document.getElementsByTagName('p')[1];
p1.textContent = prompt('Write Something, Nigga')
document.getElementsByTagName('p') = p1; */


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   

document.getElementById("Box").style.background = (0,0,0);

