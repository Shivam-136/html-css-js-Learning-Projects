    const themes = [
    {
        name: "NATURE MODE",
        class: "cyberpunk"
    },
    {
        name: "SPACE MODE",
        class: "space"
    },
    {
        name: "RETRO MODE",
        class: "retro"
    }
    ]

    let index = 0

        const btn = document.getElementById("themeBtn")
        const title = document.getElementById("title")

        btn.addEventListener("click", function () {
    document.body.classList.remove(themes[index].class)

    index = index + 1
    if (index === themes.length) {
        index = 0
    }
    document.body.classList.add(themes[index].class)
    title.innerText = themes[index].name
        })
        var theme = localStorage.getItem('theme') || 'light'


