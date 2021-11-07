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


