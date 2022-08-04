// Variables
totalWeight = 45;

//DOM Elements
const ResetButton = document.getElementById("reset-button");
const weightTotal = document.getElementById("weight-total");
const Weight55 = document.getElementById("weight-55");
const Weight45 = document.getElementById("weight-45");
const Weight35 = document.getElementById("weight-35");
const Weight25 = document.getElementById("weight-25");
const Weight15 = document.getElementById("weight-15");
const Weight10 = document.getElementById("weight-10");
const Weight5 = document.getElementById("weight-5");
const Weight2_5 = document.getElementById("weight-2.5");

// Functions

function reset() {
  totalWeight = 45;
  weightTotal.innerText = `Weight Total: ${totalWeight}`;
}

function addWeight(weight) {
  const doubleWeight = weight * 2;
  totalWeight += doubleWeight;
  weightTotal.innerText = `Weight Total: ${totalWeight}`;
}
