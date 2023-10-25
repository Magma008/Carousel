const image = document.querySelector(".img")
const frameName = document.querySelector(".name")
const language = document.querySelector(".proglan")
const details = document.querySelector(".details")
const previous = document.querySelector(".previous")
const randomize = document.querySelector(".random")
const next = document.querySelector(".next")

let currentItem = 0

window.addEventListener("DOMContentLoaded", () => {
    showData(currentItem)
})

function showData(proglan) {
    const item = validData[proglan]
    image.src = item.img
    frameName.textContent = item.name
    language.textContent = item.usage
    details.textContent = item.info
}

next.addEventListener("click", () => {
    currentItem += 1
    if (currentItem > validData.length-1) {
        currentItem = 0
    }
    showData(currentItem)
})

previous.addEventListener("click", () => {
    currentItem -= 1
    if (currentItem < 0) {
        currentItem = validData.length-1
    }
    showData(currentItem)
})

randomize.addEventListener("click", () => {
    currentItem = Math.floor(Math.random()*validData.length)
    showData(currentItem)
})