var imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
var index = 0;

function run() {
    index++;
    if (index > img.length - 1) {
        index = 0;
    }
    imgs.style.transform = `translateX(${-index *600}px)`

};
setInterval(run, 3000);