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
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const targetNumber = targetNumberInputElement.value;

  const diceRollsListElement = document.getElementById("dice-rolls");
  diceRollsListElement.innerHTML = "";

  if (targetNumber < 1 || targetNumber > 6) {
    alert("invalid number");
    return;
  }

  let howManyTries = diceRollLoop(targetNumber, diceRollsListElement);

  const totalRollsElement = document.getElementById("output-total-rolls");
  const targetNumberElement = document.getElementById("output-target-number");

  totalRollsElement.textContent = howManyTries;
  targetNumberElement.textContent = targetNumber;
}

function diceRollLoop(targetNumber, list) {
  let rolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!rolledTargetNumber) {
    const random = getRandomNumber(1, 6);
    let randomNumber = Math.round(random);

    numberOfRolls++;
    const newRollListElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + " => " + randomNumber;
    newRollListElement.textContent = outputText;
    list.append(newRollListElement);

    rolledTargetNumber = randomNumber == +targetNumber;
  }

  return numberOfRolls;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
