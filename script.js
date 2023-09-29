container = document.querySelector("#container")
container.setAttribute("style", "width: 28em; height: 32em")

canvas = () => {
    for(let i = 0; i <= 255; i++) {
        button = document.createElement("button")
        button.setAttribute("style", "width: 2em; height: 2em;")
        container.appendChild(button)

    }
}
canvas()

