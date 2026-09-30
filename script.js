"use strict";

let openOrderButton = document.getElementById("openOrderButton");
let pickupForm = document.getElementById("pickupForm");
let coffeeChoice = document.getElementById("coffeeChoice");
let coffeeDescription = document.getElementById("coffeeDescription");
let orderMessage = document.getElementById("orderMessage");
let customerName = document.getElementById("customerName");
let pickupTime = document.getElementById("pickupTime");

/* Listener 1: Opens the pickup order form */
openOrderButton.addEventListener("click", function() {
  pickupForm.style.display = "block";
  openOrderButton.style.display = "none";
});

/* Listener 2: Changes coffee description */
coffeeChoice.addEventListener("change", function() {
  if (coffeeChoice.value === "Panama Geisha") {
    coffeeDescription.innerText = "Panama Geisha: peach, jasmine, and honey.";
  }

  if (coffeeChoice.value === "Colombia Pink Bourbon") {
    coffeeDescription.innerText = "Colombia Pink Bourbon: guava, cacao nib, and rose.";
  }

  if (coffeeChoice.value === "Ethiopia Heirloom") {
    coffeeDescription.innerText = "Ethiopia Heirloom: wild strawberry, tropical fruit, and jasmine.";
  }
});

/* Listener 3: Shows pickup confirmation */
pickupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  orderMessage.innerText =
    "Thank you, " + customerName.value + "! Your " +
    coffeeChoice.value + " will be ready at " +
    pickupTime.value + ".";

  orderMessage.style.color = "#f8f8f8";
  orderMessage.style.display = "block";
});