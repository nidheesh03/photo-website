function like(event){
    var parent=event.target.parentNode;
    var x=document.createElement("div");
    var image=parent.querySelector("img");
    x.className="img-div";
    x.innerHTML=`<img src="${image.src}" alt="...">`;
    var remote=document.getElementById("function-div");
    remote.appendChild(x);
}