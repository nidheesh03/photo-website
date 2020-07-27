function like(event){
    var parent=event.target.parentNode;
    var x=document.createElement("div");
    var image=parent.querySelector("img");
    x.className="img-div";
    x.innerHTML=`<img src="${image.src}" alt="..."> <br><button  onclick="dislike(event)">X
</button>`;
    var remote=document.getElementById("function-div");
    remote.appendChild(x);
}
function dislike(event){
    var x=event.target.parentNode;
    x.remove();
}