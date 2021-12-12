function ReturnSpan(id, text) {
    let Span = document.createElement("span");
    Span.id = id;
    Span.innerText = text;
    return Span;
}

function ReturnBr() {
    let Br = document.createElement("br");
    return Br;
}

function ReturnBtn(id, text, func) {
    let Btn = document.createElement("button");
    Btn.id = id;
    Btn.innerText = text;
    Btn.onclick = function(){func();};
    return Btn;
}

function ReturnInput(id, type , value){
    let Input = document.createElement("input");
    Input.id = id;
    Input.type = type;
    Input.setAttribute("value", value);
    return Input;
}