inputA = document.getElementById("colour-right");
inputB = document.getElementById("colour-left");

function changeBackground() {

    colourA = document.getElementById("colour-right").value;
    colourB = document.getElementById("colour-left").value;

    let gradientVal = "linear-gradient(to left, "
    gradientVal += colourA
    gradientVal += ", "
    gradientVal += colourB
    gradientVal += ")"
    gradientVal;

    document.getElementById("css").innerHTML = gradientVal;

    document.getElementById("body").style.background = gradientVal;
}