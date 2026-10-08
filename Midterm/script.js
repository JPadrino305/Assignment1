"use strict";


let hero = document.getElementById("hero");
let siteNav = document.querySelector(".site-nav");
let navName = document.getElementById("navName");

let aboutSection = document.getElementById("about");
let aboutPhoto = document.getElementById("aboutPhoto");
let aboutTitle = document.getElementById("aboutTitle");
let aboutText = document.getElementById("aboutText");

let imageButtons = document.querySelectorAll(".image-button");
let imageDialog = document.getElementById("imageDialog");
let enlargedImage = document.getElementById("enlargedImage");
let enlargedImageButton =
  document.getElementById("enlargedImageButton");
let closeImageButton =
  document.getElementById("closeImageButton");


function updateNavName() {
  let heroBottom = hero.getBoundingClientRect().bottom;
  let navHeight = siteNav.offsetHeight;

  if (heroBottom <= navHeight) {
    navName.classList.remove("is-hidden");
  } else {
    navName.classList.add("is-hidden");
  }
}

window.addEventListener("scroll", updateNavName);
window.addEventListener("resize", updateNavName);

updateNavName();


aboutPhoto.classList.add("reveal-start");
aboutText.classList.add("reveal-start");

let titleText = aboutTitle.textContent;
let titleLetters = [];

aboutTitle.textContent = "";

for (let i = 0; i < titleText.length; i++) {
  let letter = document.createElement("span");

  letter.textContent = titleText[i];
  letter.classList.add("title-letter");
  letter.setAttribute("aria-hidden", "true");

  if (titleText[i] === " ") {
    letter.textContent = "\u00A0";
  }

  letter.style.transitionDelay = i * 60 + "ms";

  aboutTitle.appendChild(letter);
  titleLetters.push(letter);
}

aboutTitle.setAttribute("aria-label", titleText);


let aboutRevealed = false;

function revealAbout() {
  let sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight * 0.8 && !aboutRevealed) {
    aboutPhoto.classList.add("is-visible");
    aboutText.classList.add("is-visible");

    for (let i = 0; i < titleLetters.length; i++) {
      titleLetters[i].classList.add("is-visible");
    }

    aboutRevealed = true;
  }
}

window.addEventListener("scroll", revealAbout);
window.addEventListener("resize", revealAbout);

revealAbout();


for (let i = 0; i < imageButtons.length; i++) {

  imageButtons[i].addEventListener("click", function() {
    let selectedImage = imageButtons[i].querySelector("img");

    enlargedImage.src = selectedImage.src;
    enlargedImage.alt = selectedImage.alt;

    imageDialog.showModal();
    document.body.classList.add("image-open");
  });

}


closeImageButton.addEventListener("click", function() {
  imageDialog.close();
});



enlargedImageButton.addEventListener("click", function() {
  imageDialog.close();
});


imageDialog.addEventListener("close", function() {
  document.body.classList.remove("image-open");
});

/* Feature 4: Negative-color cursor */

let customCursor = document.getElementById("customCursor");

document.addEventListener("mousemove", function(event) {
  customCursor.style.left = event.clientX + "px";
  customCursor.style.top = event.clientY + "px";

  document.body.classList.add("custom-cursor-active");
});

document.documentElement.addEventListener("mouseleave", function() {
  document.body.classList.remove("custom-cursor-active");
});


let sectionHeadings = document.querySelectorAll(".section-heading");

let headingObserver = new IntersectionObserver(function(entries) {

  for (let i = 0; i < entries.length; i++) {

    if (entries[i].isIntersecting) {
      entries[i].target.classList.add("is-visible");
    } else {
      entries[i].target.classList.remove("is-visible");
    }

  }

}, {
  threshold: 0
});

for (let i = 0; i < sectionHeadings.length; i++) {
  sectionHeadings[i].classList.add("fade-ready");
  headingObserver.observe(sectionHeadings[i]);
}