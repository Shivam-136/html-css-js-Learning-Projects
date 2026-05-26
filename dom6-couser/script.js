var img = document.querySelector("img")
var body = document.querySelector('body')
body.addEventListener("mousemove", function(dets){
    img.style.left = dets.x + "px"
    img.style.top =  dets.y  + "px"

})