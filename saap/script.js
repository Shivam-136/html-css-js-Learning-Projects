// script.js

const snakeLength = 30;

const snake = [];

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

/* Create Snake */

for(let i = 0; i < snakeLength; i++){

    const div = document.createElement("div");

    div.classList.add("snake");

    document.body.appendChild(div);

    snake.push({
        x: mouseX,
        y: mouseY,
        el: div
    });

    // Tail Size Small

    const size = 20 - i * 0.5;

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    div.style.opacity = 1 - i / snakeLength;
}

/* Cursor Position */

window.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;
});

/* Animation */

function animate(){

    // Head directly follows cursor

    snake[0].x = mouseX;
    snake[0].y = mouseY;

    // Tail follow previous part

    for(let i = 1; i < snake.length; i++){

        snake[i].x +=
        (snake[i - 1].x - snake[i].x) * 0.35;

        snake[i].y +=
        (snake[i - 1].y - snake[i].y) * 0.35;
    }

    // Apply Position

    snake.forEach((part, index)=>{

        const hue =
        (Date.now() * 0.1 + index * 12) % 360;

        part.el.style.background =
        `hsl(${hue},100%,60%)`;

        part.el.style.boxShadow = `
        0 0 10px hsl(${hue},100%,60%),
        0 0 20px hsl(${hue},100%,60%),
        0 0 40px hsl(${hue},100%,60%)
        `;

        part.el.style.left = `${part.x}px`;
        part.el.style.top = `${part.y}px`;
    });

    requestAnimationFrame(animate);
}

animate();