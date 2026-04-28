let hour = document.getElementById("hour")
let min = document.getElementById("min")
let second = document.getElementById("second")

function updateTime() {

    let time = new Date()

    let m = `${time.getMinutes()}`
    let s = `${time.getSeconds()}`
    let h = `${time.getHours() % 12 || 12}`

    min.textContent = m.padStart(2, '0')
    hour.textContent = h.padStart(2, '0')
    second.textContent = s.padStart(2, '0')
    
}

setInterval(updateTime, 1000);