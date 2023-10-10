i = 0

container = document.querySelector("#container")

canvas = []

for(var i;i<255; i++) {
    button = document.createElement("button")
    button.setAttribute("style", "height: 2em; width: 2em;")
    canvas.push(button)
    container.appendChild(button)
}

color = (button) => {
	button.addEventListener("mousedown", () => {
  	button.setAttribute("style", "background: blue;")
  })
}

canvas.forEach(color)
