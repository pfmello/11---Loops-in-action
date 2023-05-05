// First Example: Sum numbers
const calculateSumButton = document.querySelector("#sum-btn");
calculateSumButton.addEventListener("click", calculateSum);

function calculateSum() {
  const userNumberElement = document.getElementById("user-number");
  const inputNumber = userNumberElement.value;

  let sum = 0;
  for (let i = 0; i <= inputNumber; i++) {
    sum += i;
  }

  const outputResultElement = document.querySelector("#calculated-sum");
  outputResultElement.textContent = sum;
  outputResultElement.style.display = "block";
}
