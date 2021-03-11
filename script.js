`use strict`

let eightMessage = ["Yes", "Definetly", "Absolutely", "Maybe", "I dont think so", "Ask again", "No", "Definetly Not", "Absolutely Not!", "I am sure of it", "I dont know", "Im not sure", "Dont do that", "Go for it", "Try again"];
let choice = 0;
let choiceP = "";

shake.addEventListener("click", function () {
    document.getElementById("result").style.backgroundColor = 'blue';

    choice = Math.ceil(Math.random() * 14);
    Number(choice);

    choiceP = eightMessage[choice];
    shakeResult.textContent = choiceP;

});

undo.addEventListener("click", function () {
    document.getElementById("result").style.backgroundColor = 'black';

    shakeResult.textContent = "";
});