document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("red").addEventListener("input", color);
    document.getElementById("green").addEventListener("input", color);
    document.getElementById("blue").addEventListener("input", color);
});

function color() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var mycolor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = mycolor;
    document.getElementById('box').value = mycolor;
}