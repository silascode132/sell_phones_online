let barsForm = document.querySelector('.nav_menu');

document.querySelector('#bars').onclick = () => {
    barsForm.classList.toggle('open');
};

let closeForm = document.querySelector('.nav_menu');

document.querySelector('#close').onclick = () => {
    barsForm.classList.remove('open');
};