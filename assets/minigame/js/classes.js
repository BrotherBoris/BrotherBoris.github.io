////Character////////Character////
class Character {
    constructor(){
        this.reference;
        this.x;
        this.y;
        this.sizeH;
        this.sizeW;
    }
    ////getters////////getters////
    set Reference(ref){
        this.reference = ref;
    }
    set X(pos){
        this.x = pos;
    }
    set Y(pos){
        this.y = pos;
    }
    set SizeH(size){
        this.sizeH = size;
    }
    set SizeW(size){
        this.sizeW = size;
    }
    ////getters////////getters////
    ////setters////////setters////
    get Reference() {
       return this.reference;
    }
    get X() {
       return this.x;
    }
    get Y() {
       return this.y;
    }
    get SizeH() {
       return this.sizeH;
    }
    get SizeW() {
       return this.sizeW;
    }
    ////setters////////setters///
}
////Character////////Character////
////Scene////////Scene////
class Scene{
    constructor(){
        this.reference;
        this.boundsX;
        this.boundsY;
    }
    ////getters////////getters////
    set Reference(ref){
        this.reference = ref;
    }
    set BoundsX(x){
        this.boundsX = x;
    }
    set BoundsY(y){
        this.boundsY = y;
    }    
    ////getters////////getters////
    ////setters////////setters////
    get Reference(){
        return this.reference;
    }    
    get BoundsX(){
        return this.boundsX;    
    }    
    get BoundsY(){
        return this.boundsY;
    }    
    ////setters////////setters////
}
////Scene////////Scene////

//função construtora -> tambem cria objetos - inicia com letra maiuscula

function Pessoa(nome, sobrenome) {

    const ID = 12345;//é um atributo do obj que não vai pode ser chamado tipo um Private do Java

    this.nome = nome;//pode ser acessado de fora
    this.sobrenome = sobrenome;
    this.metodo = () => {//metodo dentro da função construtora
        console.log('metodo');
    }
}

//new cria um novo obj e faz o this apontar para ele - logo como a função acima, as construtoras não precisam retornar
const p1 = new Pessoa('joão', 'antonio');//funções construtoras tem que necessariamente usar o new
console.log(p1.metodo());