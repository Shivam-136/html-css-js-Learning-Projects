let isPlaying = true

while (isPlaying) {
    let toGuess = Math.floor(Math.random() * + 9 )
    let attempts = Number(prompt("How many attempts"))

    guessLogic(toGuess, attempts)
    isPlaying = confirm("Wanna play again")
}

function guessLogic(target, chances) {
    while (chances != 0) {
        let input = Number(prompt("Chances You have" + chances + "\nEnter Your guess"))
        if (input != NaN) {
            if (input == target) {
                alert("Congratulation you won ")
                return;
            } else if (input > target) {
                alert("too high")
            } else if (input < target) {
                alert("too low")
            }
        } else {
            return;
        }
        chances--
    }
        alert("chances over!!\n You llooose...")
    }
