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
  const outputListElement = document.getElementById("output-user-data");

  outputListElement.innerHTML = "";
  for (const key in userData) {
    const newLi = document.createElement("li");
    const outputString = key.toUpperCase() + ": " + userData[key];
    newLi.textContent = outputString;
    outputListElement.append(newLi);
  }
}

// Fourth example - while loops
const diceRollButton = document.querySelector("#statistics button");
diceRollButton.addEventListener("click", calculateDiceRolls);

function calculateDiceRolls() {
  const inputElement = document.querySelector("#statistics input");
  const targetNumber = inputElement.value;

  if (targetNumber < 1 || targetNumber > 6) {
    alert("invalid number");
    return;
  }

  let inLoop = true;
  let howManyTries = 1;

  while (inLoop) {
    let random = getRandomNumber(1, 6);
    let intRandom = Math.round(random);

    if (intRandom == Number(targetNumber)) {
      inLoop = false;
    } else {
      howManyTries++;
    }
  }
  console.log("it took " + howManyTries + " tries");

  let totalRollsElement = document.getElementById("output-total-rolls");
  let targetNumberElement = document.getElementById("output-target-number");

  totalRollsElement.textContent = howManyTries;
  targetNumberElement.textContent = targetNumber;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
