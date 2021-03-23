var nav = document.getElementById("nav");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    nav.classList.toggle('active');
    btn.classList.toggle('active')
})