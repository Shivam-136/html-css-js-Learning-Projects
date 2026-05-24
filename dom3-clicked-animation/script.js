var btn = document.querySelector("button");
var area = document.querySelector("#playground");

var emojis = [
    "🔥",
    "✨",
    "🚀",
    "💎",
    "🌈",
    "⚡",
    "💥",
    "🪄",
    "🎉"
];

btn.addEventListener("click", () => {

    for (var i = 0; i < 15; i++) {

        setTimeout(() => {

            create();

        }, 
        i * 100);

    }

});

function create() {

    var div = document.createElement("div");

    div.classList.add("ball");

    var size = Math.random() * 120 + 50;

    var x = Math.random() * 90;

    var y = Math.random() * 85;

    var c1 = randomColor();
    var c2 = randomColor();

    div.innerHTML =
        emojis[
        Math.floor(
            Math.random() * emojis.length
        )
        ];

    div.style.left = x + "%";

    div.style.top = y + "%";

    div.style.width = size + "px";

    div.style.height = size + "px";

    div.style.background =
        `linear-gradient(135deg,${c1},${c2})`;

    div.style.boxShadow =
        `0 0 50px ${c1}`;

    area.appendChild(div);

    setTimeout(() => {

        div.remove();

    }, 3000);

}

function randomColor() {

    return `hsl(
            ${Math.random() * 360},
            100%,
            60%
            )`;

}