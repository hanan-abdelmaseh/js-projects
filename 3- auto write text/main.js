var text = "am a front end developer";
var content = document.getElementById("content");
var index = 0;

function writeText() {
    content.textContent = text.slice(0, index);
    index++;
    if (index > text.length - 1) {
        index = 0;
    }
}


setInterval(writeText, 200);