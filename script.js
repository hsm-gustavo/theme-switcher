const element = document.body
const checkbox = document.querySelector("input[name=theme]")
function switchColor() {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            element.style.animation = "toDark 0.1s"
            element.style.backgroundColor = "#292c35"
        } else {
            element.style.animation = "toLight 0.1s"
            element.style.backgroundColor = "#ffffff"
        }
    })
}

switchColor()
