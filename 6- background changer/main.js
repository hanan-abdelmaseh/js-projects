var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    document.body.style.background = changeBg();
});


function changeBg() {
    /* hsl hue 0: 360 degree of color 
           //Saturation is a percentage value; 
             0% means a shade of gray and 100% is the full color.
           //Lightness is also a percentage; 
           0% is black, 100% is white. 
    */
    return ` hsl(${Math.floor(Math.random()*360)},100%, 50%)`
}