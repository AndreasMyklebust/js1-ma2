// question 1

const myFunctionExpression = function() {
   console.log("Andreas Myklebust");
};

// question 2

const firstBtn = document.querySelector(".btn");

firstBtn.addEventListener("click", function() {
   console.log("I was clicked");
});

// question 3

const firstNameInput = document.querySelector("#firstName");

firstNameInput.addEventListener("keydown", function() {
   console.log(event.key);
});

// question 4

const addHover = document.querySelector("button");

addHover.addEventListener("mouseover", function() {
   addHover.classList.add("hover");
});

// question 5

const removeHover = document.querySelector("[data-animal='dog']");

removeHover.addEventListener("mouseout", function() {
   removeHover.classList.remove("hover");
});

// question 6

const animalListItem = document.querySelectorAll("li");

for (let i = 0; i < animalListItem.length; i++) {
   animalListItem[i].addEventListener("mouseover", function() {
      console.dir(event.target.dataset.animal);
   });
}

// question 7

const animal = "cow";

switch (animal) {
   case "cat":
      console.log("Meow");
      break;
   case "cow":
      console.log("Moo");
      break;
   case "bird":
      console.log("Tweet");
      break;
   default:
      console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheeps) {
   console.log(sheeps);
});

// question 9

function logHello() {
   console.log("hello");

   if (counter === 5) {
      clearInterval(helloInterval);
   }
   counter++;
}
let counter = 0;

const helloInterval = setInterval(logHello, 500);

// question 10

const container = document.querySelector(".container");

setTimeout(function() {
   container.innerHTML = "Text updated";
}, 2000);
