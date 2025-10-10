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
console.log(main.childElementCount);

// const htmlOfHelloBlock = helloBlock.getHTML();

applyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (inpLogIn.value === "") {
    errHeader.style.display = "block";
    // helloBlock.insertAdjacentHTML('beforeend', '<div class="error">ви не можете бути пустим місцем)</div>');
    // helloBlock.innerHTML = `${helloBlock.getHTML()} <div class="error">ви не можете бути пустим місцем)</div>`
    //     if (helloBlock.lastElementChild !== '<div class="error">ви не можете бути пустим місцем)</div>') {
    //         helloBlock.insertAdjacentHTML('beforeend', '<div class="error">ви не можете бути пустим місцем)</div>');
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

// console.log(arraySects.at(-2).name.lastElementChild.classList);

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

  //   if (arraySects[secNums.at(-1) - 1].name !== arraySects.at(-1)) {
  //       arraySects[secNums.at(-1) - 1].name.lastElementChild.remove();
  //   }
  //   arraySects[secNums.at(-1) - 1].name.style.height = "100%";
};

numberedGamesBtn.addEventListener("click", (event) => {
  //   sec1.style.display = "block";
  //   sec2.style.display = "block";
  //   sec3.style.display = "none";
  //   sec4.style.display = "block";
  //   sec5.style.display = "block";
  //   sec6.style.display = "none";
  //   sec7.style.display = "none";
  //   sec8.style.display = "block";
  //   sec9.style.display = "none";
  //   sec10.style.display = "none";
  toSettingPage([1, 2, 4, 5, 8], "block");

  settingMenu.style.display = "none";
  //   sec8.lastElementChild.remove();
});

playGamesBtn.addEventListener("click", (event) => {
  //   sec1.style.display = "none";
  //   sec2.style.display = "none";
  //   sec3.style.display = "block";
  //   sec4.style.display = "none";
  //   sec5.style.display = "none";
  //   sec6.style.display = "block";
  //   sec7.style.display = "block";
  //   sec8.style.display = "none";
  //   sec9.style.display = "none";
  //   sec10.style.display = "none";

  toSettingPage([3, 6, 7], "block");
  settingMenu.style.display = "none";
  //   sec7.lastElementChild.remove();
});

smartGamesBtn.addEventListener("click", (event) => {
  //   sec1.style.display = "none";
  //   sec2.style.display = "none";
  //   sec3.style.display = "none";
  //   sec4.style.display = "none";
  //   sec5.style.display = "none";
  //   sec6.style.display = "none";
  //   sec7.style.display = "none";
  //   sec8.style.display = "none";
  //   sec9.style.display = "block";
  //   sec10.style.display = "block";

  toSettingPage([9, 10], "block");
  settingMenu.style.display = "none";
  //   sec7.lastElementChild.remove();
});

// sunOrNight.addEventListener("click", (event) => {
//   event.preventDefault();
// });
