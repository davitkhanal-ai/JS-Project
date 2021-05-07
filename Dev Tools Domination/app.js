const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.innerText = "This text now has been changed to Green";
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
  p.style.cursor = "pointer";
}

// Regular
console.log("hello");

// Interpolated
console.log(`hello i am string 🧿`);

// Styled
console.log("%c i am some great text", "font-size:50px; background:red;");

// warning!
console.warn("ohnooooo its just warning");

// Error :|
console.error("ohnooooo its just error");

// Info
console.info("crocs eat 3-4 poeople");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "thats wrong dude");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} dog years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("davit");
console.count("davit");
console.count("davit");
