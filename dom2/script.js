var a = [{
    name: "csk",
    fullname: "chennai super kings",
    primarycolor: "yellow",
    secondarycolor: "blue"
},

{ name: "MI",
    fullname: "mumbai indians",
    primarycolor: "blue",
    secondarycolor: "blue"},

    { name: "rcb",
    fullname: "royal challengers bangalore",
    primarycolor: "red",
    secondarycolor: "blue"},

{   name: "RR",
    fullname: "Rajasthan Royals ",
    primarycolor: "pink",
    secondarycolor: "blue"},]


var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var h4 = document.querySelector("h4");

btn.addEventListener("click", function(){
    var random = Math.floor(Math.random() * a.length);
    h1.innerHTML = "winner is " + a[random].fullname;
    h4.innerHTML = a[random].name;
    h1.style.backgroundColor = a[random].primarycolor;
    h4.style.backgroundColor = a[random].secondarycolor;
})
