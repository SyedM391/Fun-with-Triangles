const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle () {
const sumOfAngles = calculateSumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));
if (sumOfAngles === 180){
    outputEl.innerText = "Yay, The angles form a traingle"
}else{
    outputEl.innerText = "Oh No! The angles dont form a traingle"
}
}

isTriangleBtn.addEventListener("click",isTriangle);