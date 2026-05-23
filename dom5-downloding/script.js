let btn = document.querySelector("#download");
let growth = document.querySelector("#growth");
let percent = document.querySelector("#percent");

btn.addEventListener("click", function () {

    let count = 0;

    let interval = setInterval(function () {

        count++;

        growth.style.width = count + "%";

        percent.innerHTML = count + "%";

        if (count === 100) {

            clearInterval(interval);

            btn.innerHTML = "Completed";

        }

    }, 50);

});