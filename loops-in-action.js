// First Ecample: Sum numbers
let userInput = document.getElementById("user-number");

let calculateSumButton = document.querySelector("#sum-btn");
calculateSumButton.addEventListener("click", sumButtonClick);

function sumButtonClick() {
  let inputNumber = userInput.value;
  console.log("usuario digitou" + inputNumber);

  let paragraphCalculatedSum = document.querySelector("#calculated-sum");
  paragraphCalculatedSum.textContent = calculateSum(Number(inputNumber));
  paragraphCalculatedSum.style.display = "block";
}

function calculateSum(value) {
  let sum = 0;
  for (let i = value; i > 0; i--) {
    sum += i;
  }

  return sum;
}
