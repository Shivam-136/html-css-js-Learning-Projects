let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");

let tickSound = document.getElementById("tick-sound");

function updateClock() {

    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // DIGITAL CLOCK

    let zone = h >= 12 ? "PM" : "AM";

    let digitalHour = h % 12 || 12;

    hour.textContent =
        String(digitalHour).padStart(2, "0");

    min.textContent =
        String(m).padStart(2, "0");

    sec.textContent =
        String(s).padStart(2, "0");

    ampm.textContent = zone;

    // ANALOG CLOCK

    let hourRotation =
        30 * h + m / 2;

    let minuteRotation =
        6 * m;

    let secondRotation =
        6 * s;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourRotation}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteRotation}deg)`;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondRotation}deg)`;

    // SOUND

    tickSound.currentTime = 0;

    tickSound.play();
}

updateClock();

setInterval(updateClock, 1000);

/* CREATE CLOCK TICKS */

let clock = document.querySelector(".clock");

for (let i = 1; i <= 60; i++) {

    let tick =
        document.createElement("div");

    tick.classList.add("tick");

    tick.style.transform =
        `translateX(-50%) rotate(${i * 6}deg)`;

    if (i % 5 === 0) {

        tick.style.height = "28px";

        tick.style.background = "red";
    }

    clock.appendChild(tick);
}