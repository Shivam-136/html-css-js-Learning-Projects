var btn = document.getElementById("btn");;
var innerbox = document.getElementById("innerbox");
var h2 = document.querySelector("h2");
var count = 0;
btn.addEventListener("click", function(e){
    
    if(e.target.tagName === "BUTTON"){
        var color = e.target.textContent;
        if(color === "Rendom"){
            var letters = "0123456789ABCDEF";
            var randColor = "#";
            for(var i = 0; i < 6; i++){
                randColor += letters[Math.floor(Math.random() * 16)];
            }
            innerbox.style.backgroundColor = randColor;
        } else {
            innerbox.style.backgroundColor = color;
        }
    }
    btnClick();
});

function btnClick(){
    count++;
    h2.textContent = "Button clicked " + count + " times";
    }
