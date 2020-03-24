const container = document.getElementById("container");
const colors = ["#80FF63", "#E8C161", "#FF7878", "#7161E8", "#40FFC8"];
const squaresNumbers = 2200;

for (let i = 0; i < squaresNumbers; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.onmousemove = () => onElement(square);
    square.onmouseout = () => outElement(square);
    container.appendChild(square);
}

const colorRandom = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const onElement = element => {
    const color = colorRandom();
    element.style.background = color;
    element.style.boxShadow = `0px 0px 10px 1px ${color}, 10px 20px`;
};

const outElement = element => {
    element.style.background = "#333";
    element.style.boxShadow = `none`;
};
