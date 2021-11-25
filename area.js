const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-button");
const outputEl = document.querySelector("#output");

function calculateSumOfArea(a, b) {
    const sumOfArea = (a*b)/2
    return sumOfArea
}

function calculateArea() {
  const sumOfArea = calculateSumOfArea(Number(sides[0].value),Number(sides[1].value))
  console.log(sumOfArea);
  outputEl.innerText = "The Area of the Triangle is" + " " + sumOfArea + " " + "cm²";
}

areaBtn.addEventListener("click", calculateArea);