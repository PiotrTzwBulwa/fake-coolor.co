const testBtn = document.querySelector('#generator-info');

const moreWindow = document.querySelector('#nav-more-window');
const signInWindow = document.querySelector('#sign-in-window');
const signUpWindow = document.querySelector('#sign-up-window');
const pwdResetWindow = document.querySelector('#pwd-reset-window');
const favColors = document.querySelector('#fav-colors');
const burger = document.querySelector('#menu-bar');
const colorsGenerator = document.querySelector('#colors-generator');
const colorTools = document.getElementsByClassName('color-tools');
const tools = colorsGenerator.getElementsByTagName('i');
const colors = document.getElementsByClassName('colors');
const rgbColors = document.getElementsByClassName('color-rgb');
let ulFavColor = document.querySelector('#ul-fav-color');
let allFavColors = ulFavColor.getElementsByTagName('li');

const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const pwdResetBtn = pwdResetWindow.querySelector('#pwd-reset-submit');
const signInLink = pwdResetWindow.querySelector('.sign-in');
const signInLink2 = signInWindow.querySelector('.sign-up-from-sign-in');
const signUpLink = signUpWindow.querySelector('.sign-in-from-sign-out');
const pwdResetLink = signInWindow.querySelector('.pwd-reset');
const burgerBtn = document.querySelector('.fa-bars');
const favColorsBtn = document.querySelector('.fav-colors-btn');
const signInEmail = signInWindow.querySelector('.email');
const signInPassword = signInWindow.querySelector('.password');
const signUpName = signUpWindow.querySelector('.name');
const signUpEmail = signUpWindow.querySelector('.email');
const signUpPassword = signUpWindow.querySelector('.password');
const pwdResetEmail = pwdResetWindow.querySelector('.email');
const pwdResetPassword = pwdResetWindow.querySelector('.password');

const moreBtn = document.querySelector('#nav-more');
const signInWindowCloseBtn = document.querySelector('.sign-in-close');
const signUpWindowCloseBtn = document.querySelector('.sign-up-close');
const pwdResetWindowCloseBtn = pwdResetWindow.querySelector('.pwd-reset-close');
const deleteColorBtns = document.getElementsByClassName('tool-delete');
const favColorBtns = document.getElementsByClassName('tool-favorite');
const copyColorBtns = document.getElementsByClassName('tool-copy');
const unlockColorBtns = document.getElementsByClassName('tool-unlock');
const lockColorBtns = document.getElementsByClassName('tool-lock');
let deleteFavColorBtns = document.getElementsByClassName('delete-fav-color');

let idNumber = 0;



// DELETE COLOR
const deleteColor = (e) => {
    const colorToDelete = e.target.closest('.colors')
    colorToDelete.remove();

    // add new COLORS' width
    const newWidth = 100 / colors.length;

    for (const color of colors) {
        color.style.width = newWidth + '%';
    }
};

// SELECT COLOR TO DELETE
for (const deleteColorBtn of deleteColorBtns) {
    deleteColorBtn.addEventListener('click', deleteColor);
};


// CHANGE COLORS
const changeColor = (e) => {
    if (e.keyCode === 32) {
        if (e.target.classList.contains('locked')) {
            return;
        } else {
            for (const color of colors) {

                const r = Math.round(Math.random() * 255);
                const g = Math.round(Math.random() * 255);
                const b = Math.round(Math.random() * 255);

                let newColor = `rgb(${r}, ${g}, ${b})`;
                color.style.background = newColor;
                // console.log(newColor);

                // changing RGB COLOR code
                for (const rgbColor of rgbColors) {
                    // console.log(rgbColor);
                    // console.log(newColor);
                }

                if (r <= 150 && g <= 150 && b <= 150) {
                    color.classList.toggle('light-text');
                }
            }
        }
    }
};

window.addEventListener('keyup', changeColor);


// MOUSEOVER TOOL, MOUSEOUT TOOL
const mouseOverTool = (e) => {
    if (e.target.classList.contains('mouse-out')) {
        e.target.classList.remove('mouse-out');
        e.target.classList.add('mouse-over');
    }
};

const mouseOutTool = (e) => {
    if (e.target.classList.contains('mouse-over')) {
        e.target.classList.remove('mouse-over');
        e.target.classList.add('mouse-out');
    }
};

for (const tool of tools) {
    tool.addEventListener('mouseover', mouseOverTool);
};

for (const tool of tools) {
    tool.addEventListener('mouseout', mouseOutTool);
};


// FAV COLORS WINDOW
favColorsBtn.addEventListener('click', () => {
    favColors.classList.toggle('show');
    favColors.classList.toggle('hide');
    favColorsBtn.classList.toggle('active-el');

    if (burger.classList.contains('show') || burgerBtn.classList.contains('rotate90deg') || burgerBtn.classList.contains('active-el')) {
        burger.classList.remove('show');
        burger.classList.add('hide');
        burgerBtn.classList.remove('rotate90deg');
        burgerBtn.classList.add('rotate0deg');
        burgerBtn.classList.toggle('active-el');
    }
});


// NAV MORE WINDOW
moreBtn.addEventListener('click', () => {
    moreWindow.classList.toggle('show');
    moreWindow.classList.toggle('hide');
});


// BURGER WINDOW
burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('show');
    burger.classList.toggle('hide');
    burgerBtn.classList.toggle('rotate90deg');
    burgerBtn.classList.toggle('rotate0deg');
    burgerBtn.classList.toggle('active-el');

    if (favColors.classList.contains('show') || favColorsBtn.classList.contains('active-el')) {
        favColors.classList.remove('show');
        favColors.classList.add('hide');
        favColorsBtn.classList.toggle('active-el');
    }
});


// SIGN IN WINDOW
signInBtn.addEventListener('click', () => {
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
});

signInLink2.addEventListener('click', () => {
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
});

signInWindowCloseBtn.addEventListener('click', () => {
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
    signInEmail.value = '';
    signInPassword.value = '';
});


// SIGN UP WINDOW
signUpBtn.addEventListener('click', () => {
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
});

signUpWindowCloseBtn.addEventListener('click', () => {
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
    signUpName.value = '';
    signUpEmail.value = '';
    signUpPassword.value = '';
});

signUpLink.addEventListener('click', () => {
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
});


// PWD RESET WINDOW
pwdResetLink.addEventListener('click', () => {
    pwdResetWindow.classList.toggle('show');
    pwdResetWindow.classList.toggle('hide');
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
});

pwdResetWindowCloseBtn.addEventListener('click', () => {
    pwdResetWindow.classList.toggle('show');
    pwdResetWindow.classList.toggle('hide');
    pwdResetEmail.value = '';
    pwdResetPassword.value = '';
});

signInLink.addEventListener('click', () => {
    pwdResetWindow.classList.toggle('show');
    pwdResetWindow.classList.toggle('hide');
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
});


// ADD FAVORITE COLOR

const addFavColor = () => {
    if (allFavColors.length < 10) {
        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = 'RGB (r, g, b)';
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', 'background: blue');
        let newFavColorDeleteBtn = document.createElement('i');
        newFavColorDeleteBtn.setAttribute('class', 'fas fa-times delete-fav-color');

        ulFavColor.appendChild(newFavColor)
        newFavColor.appendChild(newFavColorInfo);
        newFavColor.appendChild(newFavColorPreview);
        newFavColor.appendChild(newFavColorDeleteBtn);
    } else {
        return;
    }

}

for (const favColorBtn of favColorBtns) {
    favColorBtn.addEventListener('click', addFavColor);
}


// DELETE FAVORITE COLOR

const deleteFavoriteColor = (e) => {
    const deleteFavColor = e.target.closest('li');
    deleteFavColor.remove();
};

ulFavColor.addEventListener('click', deleteFavoriteColor);