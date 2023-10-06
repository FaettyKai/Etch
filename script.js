container = document.querySelector("#container")
container.setAttribute("style", "width: 28em; height: 32em")

button = " "
canvas = () => {
    for(let i = 0; i <= 255; i++) {
        button = document.createElement("button")
        button.setAttribute("style", "width: 2em; height: 2em;")
        button.classList.add("content")
        button.textContent = ""
        container.appendChild(button)
    }
    color()
}

canvas()

color = () => {
        button.addEventListener("mousedown", () => {
            button.setAttribute("style", "background: blue; width: 2em; height: 2em;")
        })
} 

/*
const container = document.querySelector("#container");

        function createButton() {
            const button = document.createElement("button");
            button.classList.add("content");

            button.addEventListener("mousedown", () => {
                button.style.background = "blue";
            });

            return button;
        }

        function createCanvas() {
            for (let i = 0; i < 256; i++) {
                const button = createButton();
                container.appendChild(button);
            }
        }

        createCanvas();
*/