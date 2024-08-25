//setting game
let GameName = "Guess Game";
document.title = GameName;
document.querySelector("h1").innerHTML = GameName;
document.querySelector(
  "footer"
).innerHTML = `${GameName} created by yahya zakaria`;
//setting game option
let wordtoguess = "";
const words = [
  "create",
  "update",
  "delete",
  "master",
  "branch",
  "mainly",
  "yehia",
  "youssef",
  "negm",
  "mahmoud",
  "elzero",
  "school",
  "mashle",
  "naruto",
    "hunter",
 "dororo",
 "england",
    "italy",
    "franse",
    "japan",
    "canada",
    "germany",
    "ukrain",
    "slovkia",
   "yemen",
   "Syria",
   "Palestine",
   "chiena",
   "Egypt",
   "Bahrain",
   "Qatar",
   "yamen",
   "mohamed",
   "tasnem",
   "maher",
   "nabil",
   "youssef",
   "zakarya",
   "kareem",
   "Anas",
   "htmx",
   ".net",
   "white space",
   "react",
   "mysql",
   "python",
   "sql",
   "monjo DB",
   "html",
   "php",
   "java",
   "angular",
   "kotlin",
   "flutter",
   "blech",
   "gehad"
];
wordtoguess = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(wordtoguess);
let numberoftries = 6;
let numberofletters = wordtoguess.length;
let letters = document.querySelector(".letters span")
letters.innerHTML = wordtoguess.length
// let numberofletters = 6;
let currenttry = 1;
let numberofhints = 2;
if (wordtoguess.length < 6) {
  numberofhints = 1;
  console.log("yehia");
}
//hints setting
document.querySelector(".hint span").innerHTML = numberofhints;
const gethintbutton = document.querySelector(".hint");
gethintbutton.addEventListener("click", function () {
  if (numberofhints > 0) {
    numberofhints--;
    document.querySelector(".hint span").innerHTML = numberofhints;
  }
  if (numberofhints === 0) {
    gethintbutton.classList.add("disabled2");
  }
  const enabeldinputs = document.querySelectorAll("input:not([disabled])");

  const emptybeldinputs2 = Array.from(enabeldinputs).filter(
    (input) => input.value === ""
  );
  console.log(emptybeldinputs2);
  if (emptybeldinputs2.length > 0) {
    const reandomindex = Math.floor(Math.random() * emptybeldinputs2.length);
    const randominput = emptybeldinputs2[reandomindex];
    const indextofill = Array.from(enabeldinputs).indexOf(randominput);
    if (indextofill !== -1) {
      randominput.value = wordtoguess[indextofill].toUpperCase();
    }
  }
});

// word list
// let wordtoguess = ""
// const words = ["create","update","delete","master","branch",'mainly',"yehia","negm","elzero",'school']
// wordtoguess =words[Math.floor(Math.random() * words.length)].toLowerCase()
// console.log(wordtoguess)
let massagearea = document.querySelector(".massage");
function gemnrateinput() {
  let inputscontainer = document.querySelector(".inputs");
  for (let i = 1; i <= numberoftries; i++) {
    let trydiv = document.createElement("div");
    trydiv.classList.add(`try-${i}`);
    trydiv.innerHTML = `<span> try ${i}</span>`;

    if (i !== 1) {
      trydiv.classList.add("disabled");
    }
    for (let j = 1; j <= numberofletters; j++) {
      const input = document.createElement("input");
      input.type = Text;
      input.id = `guess-${i}-letter-${j}`;
      input.setAttribute("maxlength", "1");
      trydiv.appendChild(input);
    }
    inputscontainer.appendChild(trydiv);
  }
  console.log(inputscontainer.children[0].children[1]);
  inputscontainer.children[0].children[1].focus();
  const inputsdisabelddiv = document.querySelectorAll(".disabled input");
  inputsdisabelddiv.forEach((input) => {
    input.disabled = true;
  });
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      input.value = input.value.toUpperCase();
      const nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });
  });
}

const guessbutton = document.querySelector(".check");
guessbutton.addEventListener("click", function () {
  let sucessguess = true;

  for (let j = 1; j <= numberofletters; j++) {
    const inputfield = document.querySelector(
      `#guess-${currenttry}-letter-${j}`
    );
    const letter = inputfield.value.toLowerCase();
    console.log(wordtoguess);
    console.log(letter);
    const actualletter = wordtoguess[j - 1];
    console.log(actualletter);
    //game logic
    if (letter === actualletter) {
      inputfield.classList.add("in-place");
    } else if (wordtoguess.includes(letter) && letter !== "") {
      inputfield.classList.add("not-in-place");
      sucessguess = false;
    } else {
      inputfield.classList.add("wrong");
      sucessguess = false;
    }
  }
  //checj user win or lose
  if (sucessguess === true) {
    // console.log("you win")
    massagearea.innerHTML = `you win the word is <span>${wordtoguess}</span> `;
    if (numberofhints === 2) {
      massagearea.innerHTML = `<p>Congratulations, you didn't use hints</p> `;
    }
    if(wordtoguess == "youssef"||wordtoguess == "negm"||wordtoguess == "mahmoud") {
      massagearea.innerHTML = `<p>fuck you</p> `;
    }
    let alltries = document.querySelectorAll(".inputs > div");
    alltries.forEach((trydiv) => {
      // trydiv.classList.add("disabled")
    });
    guessbutton.classList.add("disabled2");
    gethintbutton.classList.add("disabled2");
  } else {
    console.log("you lose");
    document.querySelector(`.try-${currenttry}`).classList.add("disabled");
    const currenttryinputs = document.querySelectorAll(
      `.try-${currenttry} input`
    );
    currenttryinputs.forEach((input) => {
      // input.classList.add("disabled")
      input.disabled = true;
    });
    currenttry++;

    const nexttryinput = document.querySelectorAll(`.try-${currenttry} input`);
    nexttryinput.forEach((input) => {
      input.disabled = false;
    });
    let el = document.querySelector(`.try-${currenttry}`);
    if (el) {
      document.querySelector(`.try-${currenttry}`).classList.remove("disabled");
      el.children[1].focus();
    } else {
      guessbutton.classList.add("disabled2");
      gethintbutton.classList.add("disabled2");
      massagearea.innerHTML = `you lose the word is <span>${wordtoguess}</span>`;
    }
  }
});
function handlebackspace() {
  if (event.key === "Backspace") {
    const inputs = document.querySelectorAll("input:not([disabled])");
    const currentindex = Array.from(inputs).indexOf(document.activeElement);
    if (currentindex > 0) {
      const currentinput = inputs[currentindex];
      const previnput = inputs[currentindex - 1];
      currentinput.value = ""
      previnput.value = ""
      previnput.focus()
    }
  }
}
document.addEventListener("keydown", handlebackspace);
window.onload = function () {
  gemnrateinput();
};
