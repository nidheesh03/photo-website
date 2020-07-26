function like(event){
    var parent=event.target.parentNode;
    var x=document.createElement("div");
    x.className="img-div";
    x.innerHTML=`<img src="${img.src}" alt="...">`
    var y=document.getElementsByClassName("function-div");
    y.appendChild(x);
}