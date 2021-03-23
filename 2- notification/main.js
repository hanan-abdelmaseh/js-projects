var btn = document.getElementById("btn");
var container = document.getElementById("container");
btn.addEventListener("click", function() {
    create();
})

function create() {
    var notes = document.createElement('div');
    container.appendChild(notes);
    notes.textContent = "you have new notification !!"
    notes.classList.add("notes");
    setTimeout(() => {
        notes.remove()
    }, 3000)
}