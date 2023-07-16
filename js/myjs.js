function addElement(img){
    let div=document.createElement("div")
    div.className="popUp"
    document.body.prepend(div)
    div.style.backgroundImage="url("+img+")"
    div.onclick=remove;
}
function remove(){
    let element=event.currentTarget;
    element.remove()

}
