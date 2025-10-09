const closeThanksBtn = document.querySelector('.closeThanks');
const body = document.body;
const close = document.querySelector('.close');
const helloBlock = document.querySelector('.helloBlock');
const thankBlock = document.querySelector('.thankBlock');
const applyBtn = document.querySelector('.apply');
const inpLogIn = document.querySelector('.inpLogIn');
const errHeader = document.querySelector('.error')

close.addEventListener('click', event => {
    event.preventDefault();
    helloBlock.style.display = 'none';
    body.firstElementChild.style.display = 'none';

});

// const htmlOfHelloBlock = helloBlock.getHTML();


applyBtn.addEventListener('click', event => {
    event.preventDefault();

    if (inpLogIn.value === '') {
        errHeader.style.display = 'block';
        // helloBlock.insertAdjacentHTML('beforeend', '<div class="error">ви не можете бути пустим місцем)</div>');
        // helloBlock.innerHTML = `${helloBlock.getHTML()} <div class="error">ви не можете бути пустим місцем)</div>`
    //     if (helloBlock.lastElementChild !== '<div class="error">ви не можете бути пустим місцем)</div>') {
    //         helloBlock.insertAdjacentHTML('beforeend', '<div class="error">ви не можете бути пустим місцем)</div>');

        
    } else {
            helloBlock.style.display = 'none';
            thankBlock.style.display = 'block';

    }

}) 




closeThanksBtn.addEventListener('click', event => {
    event.preventDefault();
    body.firstElementChild.style.display = 'none';
});