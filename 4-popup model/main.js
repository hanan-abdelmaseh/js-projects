var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.getElementById("container");
open.addEventListener("click", function() {
    container.classList.add("active");
});
close.addEventListener("click", function() {
    container.classList.remove("active");
})