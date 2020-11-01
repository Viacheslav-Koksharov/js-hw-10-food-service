import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';

const gallery = document.querySelector(".js-menu")
const menuGallery = createGalleryList(menu);
gallery.insertAdjacentHTML('afterBegin', menuGallery);


function createGalleryList(menu) {
    return menu.map(menuCardTpl).join('');
};


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('.theme-switch__toggle')
};
refs.checkbox.addEventListener('change', setClassList);
refs.checkbox.addEventListener('change', onLockalStorageTheme);


function setClassList(e) {
    const check = refs.checkbox.checked;
    if (check) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT)
        refs.body.classList.remove(Theme.DARK);
    }
}

function onLockalStorageTheme(e) {
    const check = refs.checkbox.checked;
    if (check) {
        localStorage.setItem('theme', Theme.DARK)
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
}







