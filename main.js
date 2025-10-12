const closeThanksBtn = document.querySelector(".closeThanks");
const body = document.body;
const close = document.querySelector(".close");
const helloBlock = document.querySelector(".helloBlock");
const thankBlock = document.querySelector(".thankBlock");
const applyBtn = document.querySelector(".apply");
const inpLogIn = document.querySelector(".inpLogIn");
const errHeader = document.querySelector(".error");
const settingMenu = document.querySelector(".menuHeader");
const settingsBtn = document.querySelector(".buttonSettings");
const numberedGamesBtn = document.querySelector(".numberedGames");
const playGamesBtn = document.querySelector(".playGames");
const smartGamesBtn = document.querySelector(".smartGames");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");
const sec5 = document.querySelector(".sec5");
const sec6 = document.querySelector(".sec6");
const sec7 = document.querySelector(".sec7");
const sec8 = document.querySelector(".sec8");
const sec9 = document.querySelector(".sec9");
const sec10 = document.querySelector(".sec10");
const hello = document.querySelector(".hello");
const sunOrNight = document.querySelector(".sunOrNight");
const main = body.querySelector("main");
const lupaBtn = body.querySelector(".lupaBtn");
const enterYearSec1 = body.querySelector(".enterYear");
const solutionSec1 = body.querySelector(".uBorn");
const gessNumBtn = document.querySelector(".gessNumBtn");
const inpSec2 = document.querySelector(".inpSec2");
const congratulationsSec2 = document.querySelector(".congratulations");
const imgsGame3 = document.querySelectorAll(".imgsGame3");
const variantPcGame3 = document.querySelector(".checlCPVariant");
const pcVar1 = document.querySelector(".pcVariant1");
const pcVar2 = document.querySelector(".pcVariant2");
const pcVar3 = document.querySelector(".pcVariant3");
const userOrderRock = document.querySelector(".buttonOrderRock");
const userOrderScissors = document.querySelector(".buttonOrderScissors");
const userOrderPaper = document.querySelector(".buttonOrderPaper");
const cpWins = document.querySelector(".cpWins");
const yourWins = document.querySelector(".yourWins");
const draws = document.querySelector(".draws");

// console.log(imgsGame3);

applyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (inpLogIn.value === "") {
    errHeader.style.display = "block";
    helloBlock.insertAdjacentHTML(
      "beforeend",
      '<div class="error">ви не можете бути пустим місцем)</div>'
    );
  } else {
    helloBlock.style.display = "none";
    thankBlock.style.display = "block";
  }
});

close.addEventListener("click", (event) => {
  event.preventDefault();
  helloBlock.style.display = "none";
  body.firstElementChild.style.display = "none";
  body.classList.remove("noscroll");
});

closeThanksBtn.addEventListener("click", (event) => {
  event.preventDefault();
  body.firstElementChild.style.display = "none";
  hello.textContent = `Вітаємо, ${inpLogIn.value}`;
  body.classList.remove("noscroll");
});

settingsBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (settingMenu.style.display !== "block") {
    settingMenu.style.display = "block";
  } else {
    settingMenu.style.display = "none";
  }
});

const arraySects = [
  {
    name: sec1,
  },
  {
    name: sec2,
  },
  {
    name: sec3,
  },
  {
    name: sec4,
  },
  {
    name: sec5,
  },
  {
    name: sec6,
  },
  {
    name: sec7,
  },
  {
    name: sec8,
  },
  {
    name: sec9,
  },
  {
    name: sec10,
  },
];

const toSettingPage = (secNums, value) => {
  arraySects.forEach((section) => {
    section.name.style.display = "none";
    console.log(section.name);
  });

  secNums.forEach((typeSection) => {
    arraySects[typeSection - 1].name.style.display = value;
  });

  if (
    arraySects[secNums.at(-1) - 1].name.lastElementChild.classList[0] === "line"
  ) {
    console.log(arraySects[secNums.at(-1) - 1].name.lastElementChild.classList);

    arraySects[secNums.at(-1) - 1].name.lastElementChild.remove();
  }
};

numberedGamesBtn.addEventListener("click", (event) => {
  toSettingPage([1, 2, 4, 5, 8], "block");

  settingMenu.style.display = "none";
});

playGamesBtn.addEventListener("click", (event) => {
  toSettingPage([3, 6, 7], "block");
  settingMenu.style.display = "none";
});

smartGamesBtn.addEventListener("click", (event) => {
  toSettingPage([9, 10], "block");
  settingMenu.style.display = "none";
});

lupaBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const year = enterYearSec1.value;
  if (year % 4 === 0) {
    solutionSec1.textContent = "Ви народилися у високосний рік!";
    solutionSec1.style.color = "#039900";
  } else {
    solutionSec1.textContent = "Ви не народилися у високосний рік(";
    solutionSec1.style.color = "#ff0000";
  }
});

gessNumBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const cpNum = Math.round(Math.random() * (10 - 1) + 1);

  if (inpSec2.value > 10 || inpSec2.value < 1) {
    congratulationsSec2.textContent =
      "Ой, напевно ви ввели щось не правильно, це може бути число більше 10 або менше 1, або ж ви ввели число з крапкою";
  } else {
    if (cpNum === Number(inpSec2.value)) {
      congratulationsSec2.textContent = `Вітаю ви вгадали число (${cpNum})`;
      congratulationsSec2.style.color = "#039900";
    } else {
      congratulationsSec2.textContent = `Ви програли, компютер загадав (${cpNum})`;
      congratulationsSec2.style.color = "#ff0000";
    }
  }
});

// game 3

// let counterWins = 0;
// let counterLoses = 0;
// let counterDraws = 0;

// variantPcGame3.addEventListener("click", (event) => {
//   event.preventDefault();
//   const cpOrder = Math.round(Math.random() * (3 - 1) + 1);
//   if (cpOrder === 1) {
//     pcVar1.style.display = "block";
//     pcVar2.style.display = "none";
//     pcVar3.style.display = "none";
//   } else if (cpOrder === 2) {
//     pcVar1.style.display = "none";
//     pcVar2.style.display = "block";
//     pcVar3.style.display = "none";
//   } else {
//     pcVar1.style.display = "none";
//     pcVar2.style.display = "none";
//     pcVar3.style.display = "block";
//   }
// });

// userOrderRock.addEventListener('click', event => {
//   event.preventDefault();

// })

// сделать каунтеры в глобальном поле зрении, каунтеры нажатых кнопок (ножницы, камень, бумага)
// написать логику если какаято кнопка была нажата то каунтер + 1
// если кнопка была нажата то внутри слушателя событий прописать переменную с рандомным числом
//  а так же проверку что сравнивает между собой числа если число которое загадал человек равно 1 (камень)
//  то в таком случае если компьютер выбрал число 2, человек выграл победа +=1, если компьютер выбрал число
//  3 то человек проиграл проигрыш += 1 если компьютер выбрал число 1 то ничья += 1
// сделать такие дейвствия в каждом слушателе,

// создать 3 перемены выбор пк1, 3 переменные выбор пк2, в первые три перемены будут плюсаваться
//  те выборы которые делал пк в первом слушателе во вторые будет перезаписываться, а именно по
// умолчания для последних 3 перемен значение 0, и дальше в слушателе от первых перемен будем отнимать
// вторые перемены и потом вторые переменые перезаписывать на первые

let rock1 = 0;
let scissors1 = 0;
let paper1 = 0;

let rock2 = 0;
let scissors2 = 0;
let paper2 = 0;

let pcCounterListenerWins11 = 0;
let pcCounterListenerLoses12 = 0;
let pcCounterListenerDraw13 = 0;

userOrderRock.addEventListener("click", (event) => {
  event.preventDefault();

  const pcOrder = Math.round(Math.random() * (3 - 1) + 1);
  if (pcOrder === 1) {
    rock1 += 1;
    pcCounterListenerDraw13 += 1;
  } else if (pcOrder === 2) {
    scissors1 += 1;
    pcCounterListenerWins11 += 1;
  } else {
    paper1 += 1;
    pcCounterListenerLoses12 += 1;
  }

  cpWins.textContent = `Комп’ютер - ${pcCounterListenerLoses12}`;
  yourWins.textContent = `Ви - ${pcCounterListenerWins11}`;
  draws.textContent = `Нічия - ${pcCounterListenerDraw13}`;
});

userOrderScissors.addEventListener("click", (event) => {
  event.preventDefault();

  const pcOrder = Math.round(Math.random() * (3 - 1) + 1);
  if (pcOrder === 1) {
    rock1 += 1;
    pcCounterListenerLoses12 += 1;
  } else if (pcOrder === 2) {
    scissors1 += 1;
    pcCounterListenerDraw13 += 1;
  } else {
    paper1 += 1;
    pcCounterListenerWins11 += 1;
  }
  cpWins.textContent = `Комп’ютер - ${pcCounterListenerLoses12}`;
  yourWins.textContent = `Ви - ${pcCounterListenerWins11}`;
  draws.textContent = `Нічия - ${pcCounterListenerDraw13}`;
});

userOrderPaper.addEventListener("click", (event) => {
  event.preventDefault();

  const pcOrder = Math.round(Math.random() * (3 - 1) + 1);
  if (pcOrder === 1) {
    rock1 += 1;
    pcCounterListenerWins11 += 1;
  } else if (pcOrder === 2) {
    scissors1 += 1;
    pcCounterListenerLoses12 += 1;
  } else {
    paper1 += 1;
    pcCounterListenerDraw13 += 1;
  }
  cpWins.textContent = `Комп’ютер - ${pcCounterListenerLoses12}`;
  yourWins.textContent = `Ви - ${pcCounterListenerWins11}`;
  draws.textContent = `Нічия - ${pcCounterListenerDraw13}`;
});

variantPcGame3.addEventListener("click", (event) => {
  event.preventDefault();
  if (rock1 - rock2 !== 0 || scissors1 - scissors2 !== 0 || paper1 - paper2 !== 0) {
    if (rock1 - rock2 !== 0) {
    pcVar1.style.display = "block";
    pcVar2.style.display = "none";
    pcVar3.style.display = "none";
    rock2 = rock1;
  } else if (scissors1 - scissors2 !== 0) {
    pcVar1.style.display = "none";
    pcVar2.style.display = "block";
    pcVar3.style.display = "none";
    scissors2 = scissors1;
  } else {
    pcVar1.style.display = "none";
    pcVar2.style.display = "none";
    pcVar3.style.display = "block";
    paper2 = paper1
  }
  }
});
