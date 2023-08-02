function convert_capital(){
    let value = document.querySelector("#input-text").value;
    return value.toUpperCase();
}

function getComputerChoice(){
    let min =1, max =3;
    let computer_value =Math.floor(Math.random() * (max - min +1) + min);
    let store = ["ROCK","PAPER","SCISSOR"];
    return store[computer_value - 1];
}

function show(){
    let result = document.querySelector(".result");
    let playerSelection = convert_capital();
    let computerSelection = getComputerChoice();

    
}