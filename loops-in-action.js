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

//Second example: for-of loops
const highlightLinksButton = document.querySelector("#highlight-links button");
highlightLinksButton.addEventListener("click", highlightAllAnchorElements);

function highlightAllAnchorElements() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchor of anchorElements) {
    anchor.classList.add("highlight");
  }
}

//Third Example for-in

const userData = {
  firstName: "Bigode",
  lastName: "Bafonso",
  age: 29,
  sex: "gay",
  job: "vagabundo",
};

const displayUserDataButton = document.querySelector("#user-data button");
displayUserDataButton.addEventListener("click", displayUserData);

function displayUserData() {
  const outputListElement = document.querySelector("#user-data ul");
  console.log(outputListElement);

  for (const key in userData) {
    const newLi = document.createElement("li");
    newLi.textContent = key + ": " + userData[key];
    outputListElement.append(newLi);
  }
}
