
const button = document.getElementById("names-btn")
const listContainer = document.getElementById("listsOfNames")

const button = document.getElementById("names-btn")
button.addEventListener("click", enterInput())

const enterInput = function (input) {
    const input = document.getElementById("names")
    newList = document.createElement("li")
    newList.innerHTML = input.value
    console.log(newList)

}