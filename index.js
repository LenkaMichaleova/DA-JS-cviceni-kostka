const diceElement = document.querySelector(".dice")
let side = 1

document.addEventListener("keydown", () => {
    if (side < 6) {
        side += 1
    } else {
        side = 1
    }
    diceElement.src = `img/side${side}.svg`
})