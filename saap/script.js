
    const snakeLength = 20;   // snake body size
    const snake = [];

    for (let i = 0; i < snakeLength; i++) {
        const div = document.createElement("div");
        div.className = "snake-part";
        document.body.appendChild(div);
        snake.push({ x: 0, y: 0, el: div });
    }

    document.addEventListener("mousemove", (e) => {
        snake[0].x = e.clientX;
        snake[0].y = e.clientY;
    });

    function animate() {
        for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x += (snake[i - 1].x - snake[i].x) * 0.3;
        snake[i].y += (snake[i - 1].y - snake[i].y) * 0.3;
        }

        snake.forEach(part => {
        part.el.style.transform =
            `translate(${part.x}px, ${part.y}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();

