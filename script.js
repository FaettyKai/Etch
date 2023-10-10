i = 0

container = document.querySelector("#container")

canvas = []

for(var i;i<255; i++) {
    button = document.createElement("button")
    button.setAttribute("style", "height: 2em; width: 2em; background: white;")
    canvas.push(button)
    container.appendChild(button)
}

color = (button) => {
	button.addEventListener("mouseover", () => {
  	button.setAttribute("style", "background: blue; height: 2em; width: 2em;")
  })
}

canvas.forEach(color)

clear = document.querySelector("#clear")
clear.addEventListener("click", clearCanvas)

function clearCanvas() {
	canvas.forEach((button) => {
  	button.setAttribute("style", "height: 2em; width: 2em; background: white;")
  })
}
