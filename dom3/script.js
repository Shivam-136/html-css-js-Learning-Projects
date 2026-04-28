var btn = document.querySelector("button");
var playground = document.querySelector("#playground");

btn.addEventListener("click", function() {
    var div = document.createElement("div");
    var node = document.createTextNode("shivam");
    var rendom = Math.floor(Math.random() *90);
    var rendom1 = Math.floor(Math.random() *90);

    div.appendChild(node);
    div.style.position = "absolute";
    div.style.left = rendom + "%";
    div.style.top = rendom1 + "%";
    playground.appendChild(div);
    
    
});