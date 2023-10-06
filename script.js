container = document.querySelector("#container")
container.setAttribute("style", "width: 28em; height: 32em")

button = " "
buttonDown = "false"
canvas = () => {
    for(let i = 0; i <= 255; i++) {
        button = document.createElement("button")
        button.setAttribute("style", "width: 2em; height: 2em;")
        button.classList.add("content")
        button.textContent = ""
        container.appendChild(button)
        button.addEventListener("mousedown", () => {
            buttonDown = "true"
            button.setAttribute("style", "background: blue;")
        })
        button.addEventListener("mouseup", () => {
            buttonDown = "false"
        })
    }
}

canvas()

