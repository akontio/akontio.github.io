if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = [ "𝔸", "𝔸𝕂", "𝔸𝕂𝕆", "𝔸𝕂𝕆ℕ", "𝔸𝕂𝕆ℕ𝕋", "𝔸𝕂𝕆ℕ𝕋𝕀", "𝔸𝕂𝕆ℕ𝕋𝕀𝕆", "_" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
