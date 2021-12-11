function CreateSpan(id, text) {
    let Span = document.createElement("span");
    Span.id = id;
    Span.innerText = text;
    return Span;
}

function CreateBr() {
    let Br = document.createElement("br");
    return Br;
}

function CreateBtn(id, text) {
    let Btn = document.createElement("button");
    Btn.id = id;
    Btn.innerText = text;
    return Btn;
}