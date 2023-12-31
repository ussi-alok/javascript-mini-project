//convert the user value in capital letters
function convert_capital() {
  // let value = document.querySelector("#input-text").value;
  // return value.toUpperCase();

  //obtain input values through buton
  const buttons = document.querySelectorAll(".buttonItem");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      value = button.textContent;
    });
  });
  return value.toUpperCase();
}

//get computer value
function getComputerChoice() {
  let min = 1,
    max = 3;
  let computer_value = Math.floor(Math.random() * (max - min + 1) + min);
  let store = ["ROCK", "PAPER", "SCISSOR"];
  return store[computer_value - 1];
}

//compare computer value and user value then, show the result
function getShowResult(playerSelection, computerSelection) {
  let result = document.querySelector(".result");
  let computerValue = document.querySelector(".computerValue");
  if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    result.innerHTML = "PAPER";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "SCISSOR" && computerSelection === "ROCK")
  ) {
    result.innerHTML = "ROCK";
  } else if (
    (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER")
  ) {
    result.innerHTML = "SCISSOR";
  } else {
    result.innerHTML = "Match tie! Try Again";
  }
  computerValue.innerHTML = computerSelection;
}

//call the function that show the final result
function show() {
  let playerSelection = convert_capital();
  let computerSelection = getComputerChoice();

  getShowResult(playerSelection, computerSelection);
}
