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

////CreateButtons////////CreateButtons////
    /* Basic Button */
    /*  function CreateBtn(id, text, func) {
        let Btn = document.createElement("button");
        Btn.id = id;
        Btn.innerText = text;
        Btn.setAttribute("onClick", func+"();");

        return Btn;
    } */
    /* Button W/ 1 parameter */
    /* function CreateBtn(id, text, func, args1) {
        let Btn = document.createElement("button");
        Btn.id = id;
        Btn.innerText = text;
        Btn.setAttribute("onClick", func+"('"+args1+"');");

        return Btn;
    } */
    /* Button W/ 2 parameters */
    /* function CreateBtn(id, text, func, args1, args2) {
        let Btn = document.createElement("button");
        Btn.id = id;
        Btn.innerText = text;
        Btn.setAttribute("onClick", func+"('"+args1+"','"+args2+"');");

        return Btn;
    } */

    /* Button W/ 3 parameters */
    /* function CreateBtn(id, text, func, args1, args2, args3) {
        let Btn = document.createElement("button");
        Btn.id = id;
        Btn.innerText = text;
        Btn.setAttribute("onClick", func+"('"+args1+"','"+args2+"','"+args3+"');");

        return Btn;
    } */
/* Multi */
function CreateBtn(id, text, func, args1, args2, args3) {
    let Btn = document.createElement("button");
    Btn.id = id;
    Btn.innerText = text;
    if (args1 == "undefined" && args2 && "undefined" && args3 == "undefined"){
        Btn.setAttribute("onClick", func + "();");
    }else{
        Btn.setAttribute("onClick", func + "('" + args1 + "','" + args2 + "','" + args3 + "');");
    }
    return Btn;
}

////CreateButtons////////CreateButtons////