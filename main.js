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
const indexCulc = document.querySelector(".indexCulc");
const inputFirstNum = document.querySelector(".enterNumCulc1");
const inputSecondNum = document.querySelector(".enterNumCulc2");
const formCulc = document.querySelector(".gameCulc");
const equalBtn = document.querySelector(".equal");
const result = document.querySelector(".result");
const plusBtn = document.querySelector(".plus");
const uToBtn = document.querySelector(".upTo");
const minusBtn = document.querySelector(".minus");
const slashBtn = document.querySelector(".slash");
const container = document.querySelector(".container");
const moonType = document.querySelector(".moonType");
const divBlur = document.querySelector(".blur");
const footer = document.querySelector("footer");
const landDino = document.querySelector(".bodyCircle");
const rightFootDino = document.querySelector(".rightFoot");
const leftFootDino = document.querySelector(".leftFoot");
const cactuses = document.querySelectorAll(".imgsCactus");
const toOverflowDiv = document.querySelector(".toOverflow");
const dinoBody = document.querySelector(".dinoWithoutLegs");
const toPlayAgainDiv = document.querySelector(".toPlayAgain");
const ulosedText = document.querySelector(".ulosed");
const playagainBtn = document.querySelector(".playagain");
const footballPeech = document.querySelector(".peech");
const footballBall = document.querySelector(".ball");
const inpRegistration = document.querySelector(".inpEmail");
const subscribe = document.querySelector(".subscribe");

subscribe.addEventListener("click", (event) => {
  event.preventDefault();

  const userEmail = inpRegistration.value;

  if (userEmail.includes("@") && userEmail.includes(".")) {
    alert(`your email: ${userEmail}`);
  }
});

const coordinatesPeech = footballPeech.getBoundingClientRect();

footballPeech.addEventListener("click", (event) => {
  const coordinatesPeechinside = footballPeech.getBoundingClientRect();
  const clienty = event.y;
  let topReal = clienty - coordinatesPeechinside.top;
  footballBall.style.top = `${topReal}px`;

  const clientOnx = event.clientX;
  const widthOfSite = window.innerWidth;
  const widthSiteWithoutPeech = widthOfSite - footballPeech.clientWidth;
  const widthSiteWithoutPeechDel2 = widthSiteWithoutPeech / 2;
  const bodyWidthWithoutRightSide =
    footballPeech.clientWidth + widthSiteWithoutPeechDel2;

  if (
    widthSiteWithoutPeechDel2 < clientOnx &&
    clientOnx < bodyWidthWithoutRightSide
  ) {
    const left = clientOnx - widthSiteWithoutPeechDel2;
    footballBall.style.left = `${left}px`;
  }
});

let positionDino;

const loseTop = (value, stateDinoPositionY) => {
  setTimeout(() => {

    if (dinoBody.y > stateDinoPositionY - 50) {

      dinoBody.style.animationName = "none";
      rightFootDino.style.animationName = "none";
      leftFootDino.style.animationName = "none";
      landDino.style.animationName = "none";
      toPlayAgainDiv.style.display = "block";
      ulosedText.style.display = "block";
      playagainBtn.style.display = "block";
      value.classList.add("theEnd");
    }
  }, 821);
};

let cactusGlobal = true;

function none(value, stateDinoPositionY) {
  setTimeout(() => {
    if (dinoBody.y === stateDinoPositionY - 15) {

      dinoBody.style.animationName = "none";
      rightFootDino.style.animationName = "none";
      leftFootDino.style.animationName = "none";
      landDino.style.animationName = "none";
      toPlayAgainDiv.style.display = "block";
      ulosedText.style.display = "block";
      playagainBtn.style.display = "block";
      value.classList.add("theEnd");
    }
  }, 800);
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();

    if (toPlayAgainDiv.style.display !== "block") {
      cactuses.forEach((cactus) => {
        cactus.style.display = "none";
      });
      cactuses.forEach((cactus) => {
        cactus.style.display = "none";
      });
      setTimeout(() => {
      }, 200);

      const timeDelay = Math.round(Math.random() * (2000 - 300) + 1);
      const whichCactus = Math.round(Math.random() * (4 - 0) + 1);

      landDino.style.animationName = "circleExample";
      rightFootDino.style.display = "none";
      leftFootDino.style.display = "none";

      dinoBody.setAttribute("src", "images/dino/dinoWithLegs.png");
      dinoBody.style.animationName = "jumpBody";

      setTimeout(() => {
        dinoBody.setAttribute("src", "images/dino/dinoWithoutLegs.png");
        dinoBody.style.animationName = "none";
        rightFootDino.style.animationName = "rightStep";
        leftFootDino.style.animationName = "leftStep";
        rightFootDino.style.display = "block";
        leftFootDino.style.display = "block";
      }, 400);

      cactuses.forEach((cactus) => {
        cactus.style.display = "none";
      });

      setTimeout(() => {
        cactuses[whichCactus - 1].style.display = "block";
        cactusGlobal = cactuses[whichCactus - 1];
        none(cactuses[whichCactus - 1], cactuses[whichCactus - 1].y);
        loseTop(cactuses[whichCactus - 1], cactuses[whichCactus - 1].y);
      }, timeDelay);
    }
  }
});

playagainBtn.addEventListener("click", (event) => {
  event.preventDefault();
  toPlayAgainDiv.style.display = "none";
  playagainBtn.style.display = "none";
  ulosedText.style.display = "none";
  cactuses.forEach((cactus) => {
    cactus.classList.remove("theEnd");
  });
});

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
  divBlur.style.display = "none";
  body.classList.remove("noscroll");
});

closeThanksBtn.addEventListener("click", (event) => {
  event.preventDefault();
  divBlur.style.display = "none";
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
  });

  secNums.forEach((typeSection) => {
    arraySects[typeSection - 1].name.style.display = value;
  });

  if (
    arraySects[secNums.at(-1) - 1].name.lastElementChild.classList[0] === "line"
  ) {

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
  if (
    rock1 - rock2 !== 0 ||
    scissors1 - scissors2 !== 0 ||
    paper1 - paper2 !== 0
  ) {
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
      paper2 = paper1;
    }
  }
});

let plus = false;
let minus = false;
let up = false;
let slash = false;

plusBtn.addEventListener("click", (event) => {
  event.preventDefault();
  plus = true;
  minus = false;
  up = false;
  slash = false;

  plusBtn.style.opacity = "1";
  uToBtn.style.opacity = "0.25";
  minusBtn.style.opacity = "0.25";
  slashBtn.style.opacity = "0.25";
});

uToBtn.addEventListener("click", (event) => {
  event.preventDefault();
  plus = false;
  minus = false;
  up = true;
  slash = false;

  plusBtn.style.opacity = "0.25";
  uToBtn.style.opacity = "1";
  minusBtn.style.opacity = "0.25";
  slashBtn.style.opacity = "0.25";
});

minusBtn.addEventListener("click", (event) => {
  event.preventDefault();
  plus = false;
  minus = true;
  up = false;
  slash = false;

  plusBtn.style.opacity = "0.25";
  uToBtn.style.opacity = "0.25";
  minusBtn.style.opacity = "1";
  slashBtn.style.opacity = "0.25";
});

slashBtn.addEventListener("click", (event) => {
  event.preventDefault();
  plus = false;
  minus = false;
  up = false;
  slash = true;

  plusBtn.style.opacity = "0.25";
  uToBtn.style.opacity = "0.25";
  minusBtn.style.opacity = "0.25";
  slashBtn.style.opacity = "1";
});

equalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const firstNum = inputFirstNum.value;
  const secondNum = inputSecondNum.value;
  if (plus) {
    result.textContent = Number(firstNum) + Number(secondNum);
    inputFirstNum.style.backgroundColor = "#D7D7D7";
    inputSecondNum.style.backgroundColor = "#D7D7D7";
    result.style.color = "black";
  } else if (minus) {
    result.textContent = Number(firstNum) - Number(secondNum);
    inputFirstNum.style.backgroundColor = "#D7D7D7";
    inputSecondNum.style.backgroundColor = "#D7D7D7";
  } else if (up) {
    result.textContent = Number(firstNum) * Number(secondNum);
    inputFirstNum.style.backgroundColor = "#D7D7D7";
    inputSecondNum.style.backgroundColor = "#D7D7D7";
  } else if (slash) {
    if (Number(secondNum) !== 0) {
      result.textContent = Number(firstNum) / Number(secondNum);
      inputFirstNum.style.backgroundColor = "#D7D7D7";
      inputSecondNum.style.backgroundColor = "#D7D7D7";
    } else {
      inputSecondNum.style.backgroundColor = "red";
      result.textContent = `ділення на нуль!`;
    }
  }

  plus = false;
  minus = false;
  up = false;
  slash = false;

  plusBtn.style.opacity = "1";
  uToBtn.style.opacity = "1";
  minusBtn.style.opacity = "1";
  slashBtn.style.opacity = "1";
});

const galarySlider = document.querySelector(".galarySlider");
const leftBtnSlider = document.querySelector(".leftBtn");
const rightBtnSlider = document.querySelector(".rightBtn");
const lis = galarySlider.children;
const totalPhotos = galarySlider.childElementCount;
const liPhotosAllSlider = document.querySelectorAll(".liphotoAll");

const buttonAll = document.querySelectorAll(".navPhoto");

galarySlider.firstElementChild.style.display = "block";

const funcSlider = (index, value) => {
  let count = 0;
  liPhotosAllSlider.forEach((liImg) => {
    liImg.style.display = "none";
    count += 1;
  });
  liPhotosAllSlider[index].style.display = value;
};
let counterForward = 0;
rightBtnSlider.addEventListener("click", (event) => {
  event.preventDefault();
  counterForward += 1;
  if (counterForward === liPhotosAllSlider.length) {
    counterForward = 0;
    buttonAll[counterForward].classList.add("orderedPhoto");
    buttonAll[liPhotosAllSlider.length - 1].classList.remove("orderedPhoto");
  }
  if (counterForward > 0 && counterForward < liPhotosAllSlider.length) {
    buttonAll[counterForward].classList.add("orderedPhoto");
    buttonAll[counterForward - 1].classList.remove("orderedPhoto");
  }
  funcSlider(counterForward, "block");
});

leftBtnSlider.addEventListener("click", (event) => {
  event.preventDefault();
  counterForward -= 1;
  if (counterForward === -1) {
    counterForward = liPhotosAllSlider.length - 1;
    buttonAll[0].classList.remove("orderedPhoto");
  }
  if (counterForward > 0 && counterForward < liPhotosAllSlider.length - 1) {
    buttonAll[counterForward].classList.add("orderedPhoto");
    buttonAll[counterForward + 1].classList.remove("orderedPhoto");
  }
  if (counterForward === liPhotosAllSlider.length - 1) {
    buttonAll[counterForward].classList.add("orderedPhoto");
    buttonAll[0].classList.remove("orderedPhoto");
  }
  if (counterForward === 0) {
    buttonAll[counterForward].classList.add("orderedPhoto");
    buttonAll[counterForward + 1].classList.remove("orderedPhoto");
  }
  funcSlider(counterForward, "block");
});

const funcButtonClick = (buttons, numOfBtn) => {
  buttons.forEach((button) => {
    button.classList.remove("orderedPhoto");
  });

  buttonAll[numOfBtn].classList.add("orderedPhoto");
  funcSlider(counterForward, "block");
};

sec9.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList[1] === "navPhoto1") {
    counterForward = 0;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto2") {
    counterForward = 1;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto3") {
    counterForward = 2;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto4") {
    counterForward = 3;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto5") {
    counterForward = 4;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto6") {
    counterForward = 5;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto7") {
    counterForward = 6;
    funcButtonClick(buttonAll, counterForward);
  } else if (event.target.classList[1] === "navPhoto8") {
    counterForward = 7;
    funcButtonClick(buttonAll, counterForward);
  }
});

const theLargestAlert = document.querySelector(".theLargest");
const comppareNums = document.querySelectorAll(".bigNums");

let maxNum = [];
comppareNums[0].addEventListener("blur", (event) => {
  event.preventDefault();
  maxNum[0] = comppareNums[0].value;
  theLargestAlert.textContent = `Найбільше число, яке ви ввели - ${Math.max(
    ...maxNum
  )}`;
});

comppareNums[1].addEventListener("blur", (event) => {
  event.preventDefault();
  maxNum[1] = comppareNums[1].value;
  theLargestAlert.textContent = `Найбільше число, яке ви ввели - ${Math.max(
    ...maxNum
  )}`;
});

comppareNums[2].addEventListener("blur", (event) => {
  event.preventDefault();
  maxNum[2] = comppareNums[2].value;
  theLargestAlert.textContent = `Найбільше число, яке ви ввели - ${Math.max(
    ...maxNum
  )}`;
});

const time = document.querySelector(".time");
const inputTime = document.querySelector(".numberCulcTime");
const lupaTime = document.querySelector(".lupaTime");

lupaTime.addEventListener("click", (event) => {
  event.preventDefault();
  let result;
  let month = 0;
  let years = 0;
  let days = 0;
  const allMinutes = inputTime.value;
  let hours = parseInt(inputTime.value / 60);
  let minutes = allMinutes - hours * 60;
  if (allMinutes < 60) {
    minutes = allMinutes;
    result = `minutes ${minutes}`;
  }
  if (allMinutes > 60) {
    hours = parseInt(allMinutes / 60);
    minutes = allMinutes - hours * 60;
    result = `годин: ${hours}, хв: ${minutes}`;
  }
  if (hours > 23) {
    days = parseInt(hours / 24);
    hours = hours - days * 24;
    result = `днів: ${days}, годин: ${hours}, хв: ${minutes}`;
  }
  if (days > 30) {
    month = parseInt(days / 30);
    days = days - month * 30;
    result = `місяців: ${month}, днів: ${days}, годин: ${hours}, хв: ${minutes}`;
  }
  if (month > 12) {
    years = parseInt(month / 12);
    month = month - years * 12;
    result = `років: ${years}, місяців: ${month}, днів: ${days}, годин: ${hours}, хв: ${minutes}`;
  }

  time.textContent = result;
});

const categoriesUl = document.querySelector(".categoriesUl");
const scientistsLi = document.querySelectorAll(".scientistsLi");
const scientistsImages = document.querySelectorAll(".scientistImages");

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
    link: "images/main/scientists/einstain.webp",
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
    link: "images/main/scientists/newton.webp",
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
    link: "images/main/scientists/galileo.webp",
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
    link: "images/main/scientists/mariaCurie.webp",
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
    link: "images/main/scientists/keler.webp",
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
    link: "images/main/scientists/nicolasCopernicus.webp",
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
    link: "images/main/scientists/maxlanck.webp",
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
    link: "images/main/scientists/kathrineBlodgett.webp",
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
    link: "images/main/scientists/adaLovelace.webp",
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
    link: "images/main/scientists/sarahEGoode.webp",
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
    link: "images/main/scientists/liseMeitner.webp",
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
    link: "images/main/scientists/HannaHammarström.jpg",
  },
];

const scientistsUl = document.querySelector(".scientists");

sec10.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList[1] === "nineteenCentuty") {
    let scientistsArray = [];
    scientists.forEach((scientist) => {
      if (scientist.born < 1901 && scientist.born > 1800) {
        scientistsArray.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientist.link}"
                alt="#"
              />
            </li>`);
      }
      scientistsUl.innerHTML = scientistsArray.join("");
    });
  } else if (event.target.classList[1] === "einshtein") {
    scientistsUl.innerHTML = `<li class="scientistsLiClicked">
              <img
                class="scientistImagesClickedEinstain"
                src="./images/main/scientists/einstain.webp"
                alt="#"
              />
              <p class="descriptionEinstain">
                Альбе́рт Ейнштейн - 14 березня 1879, Ульм, королівство Вюртемберг,
                Німецька імперія — 18 квітня 1955, Принстон, штат Нью-Джерсі,
                США — американський, німецький та швейцарський фізик-теоретик
                єврейського походження, один із найвизначніших науковців XX
                століття, творець теорії відносності та один із творців
                квантової механіки. Його формулу еквівалентності маси й енергії
                E = mc2, яка випливає зі спеціальної теорії відносності,
                вважають «найвідомішим рівнянням у світі». Лауреат Нобелівської
                премії з фізики (1921) за «заслуги в галузі теоретичної фізики,
                і зокрема за відкриття закону фотоелектричного ефекту».
              </p>
            </li>`;
  } else if (event.target.classList[1] === "alfabet") {
    let arrScientists = [];
    let arrayImgsLis = [];

    scientists.forEach((scientist) => {
      arrScientists.push(scientist.name);
    });
    arrScientists.sort();

    arrScientists.forEach((name) => {
      scientists.forEach((scientistInArr) => {
        if (name === scientistInArr.name) {
          arrayImgsLis.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientistInArr.link}"
                alt="#"
              />
            </li>`);
        }
      });
    });
    scientistsUl.innerHTML = arrayImgsLis.join("");
  } else if (event.target.classList[1] === "leterS") {
    const arrLisWithS = [];
    scientists.forEach((scientistArr) => {
      const lowercased = scientistArr.name.toLowerCase();
      const nameArr = lowercased.split("");
      if (nameArr[0] === "s") {

        arrLisWithS.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientistArr.link}"
                alt="#"
              />
            </li>`);
      }

      scientistsUl.innerHTML = arrLisWithS.join("");
    });
  } else if (event.target.classList[1] === "years") {

    let arrayYears = [];
    let arrayHtmlInner = [];

    scientists.forEach((scientistArr) => {
      arrayYears.push(scientistArr.dead - scientistArr.born);

    });
    arrayYears.sort().reverse();

    let i = 0;
    while (i !== scientists.length) {
      scientists.forEach((scientistArr) => {
        let max = scientistArr.dead - scientistArr.born;
        if (max === arrayYears[i]) {
          arrayHtmlInner.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientistArr.link}"
                alt="#"
              />
            </li>`);
          i += 1;
        }
      });
    }

    scientistsUl.innerHTML = arrayHtmlInner.join("");
  } else if (event.target.classList[1] === "dectroyA") {
    let scientistsArr = [];
    scientists.forEach((scientistArr) => {
      let splitedName = scientistArr.name.toLowerCase().split("");

      if (splitedName[0] !== "a") {
        scientistsArr.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientistArr.link}"
                alt="#"
              />
            </li>`);
      }
    });
    scientistsUl.innerHTML = scientistsArr.join("");
  } else if (event.target.classList[1] === "laterScietist") {
    let maxYear = 0;

    scientists.forEach((scientistArr) => {
      if (maxYear < scientistArr.born) {
        maxYear = scientistArr.born;
      }
    });

    scientists.forEach((scientist) => {
      if (scientist.born === maxYear) {
        scientistsUl.innerHTML = `<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientist.link}"
                alt="#"
              />
            </li>`;
      }
    });
  } else if (event.target.classList[1] === "theMostAndOposite") {
    let maxYearsArr = [];
    let arrayScientists = [];

    scientists.forEach((scientist) => {
      maxYearsArr.push(scientist.dead - scientist.born);
    });

    scientists.forEach((scientist) => {
      if (scientist.dead - scientist.born === Math.max(...maxYearsArr)) {
        arrayScientists.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientist.link}"
                alt="#"
              />
            </li>`);
      }
      if (scientist.dead - scientist.born === Math.min(...maxYearsArr)) {
        arrayScientists.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientist.link}"
                alt="#"
              />
            </li>`);
      }
    });
    scientistsUl.innerHTML = arrayScientists.join("");
  } else if (event.target.classList[1] === "sameletters") {
    let arrayScientists = [];
    scientists.forEach((scientist) => {
      let nameScientistFirstLetter = scientist.name.toLowerCase().split("");
      let surnameScientistFirstLetter = scientist.surname
        .toLowerCase()
        .split("");

      if (nameScientistFirstLetter[0] === surnameScientistFirstLetter[0]) {
        arrayScientists.push(`<li class="scientistsLi">
              <img
                class="scientistImages"
                src="${scientist.link}"
                alt="#"
              />
            </li>`);
      }
    });
    scientistsUl.innerHTML = arrayScientists.join("");
  }
});
