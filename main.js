// const testBtn = document.querySelector('#generator-info');

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
const rgbColors = document.getElementsByClassName('rgb');
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
const signInSubmit = signInWindow.querySelector('#sign-in-submit');
const signInEmail = signInWindow.querySelector('.email');
const signInPassword = signInWindow.querySelector('.password');
const signUpSubmit = signUpWindow.querySelector('#sign-up-submit');
// const signUpName = signUpWindow.querySelector('.name');
const signUpEmail = signUpWindow.querySelector('.email');
const signUpPassword = signUpWindow.querySelector('.password');
const signUpPasswordConfirm = signUpWindow.querySelector('.password-confirm');
const signUpWorning = signUpWindow.querySelector('#worning-info');
const pwdResetSubmit = pwdResetWindow.querySelector('#pwd-reset-submit');
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

const colorName1 = document.querySelector('#color-name-1');
const colorName2 = document.querySelector('#color-name-2');
const colorName3 = document.querySelector('#color-name-3');
const colorName4 = document.querySelector('#color-name-4');
const colorName5 = document.querySelector('#color-name-5');

const colorHex1 = document.querySelector('#color-hex-1');
const colorHex2 = document.querySelector('#color-hex-2');
const colorHex3 = document.querySelector('#color-hex-3');
const colorHex4 = document.querySelector('#color-hex-4');
const colorHex5 = document.querySelector('#color-hex-5');

const colorRgb1 = document.querySelector('#color-rgb-1');
const colorRgb2 = document.querySelector('#color-rgb-2');
const colorRgb3 = document.querySelector('#color-rgb-3');
const colorRgb4 = document.querySelector('#color-rgb-4');
const colorRgb5 = document.querySelector('#color-rgb-5');

const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');
const color5 = document.querySelector('#color-5');

const favColorBtn1 = document.querySelector('#fav-btn-1');
const favColorBtn2 = document.querySelector('#fav-btn-2');
const favColorBtn3 = document.querySelector('#fav-btn-3');
const favColorBtn4 = document.querySelector('#fav-btn-4');
const favColorBtn5 = document.querySelector('#fav-btn-5');

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

/*
// CHANGE COLORS
const changeColor = (e) => {
    if (e.keyCode === 32) {
        for (const color of colors) {
            if (color.classList.contains('locked')) {
                return;
            } else {
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
*/


// CHANGE COLORS
const changeColorInfo = (e) => {

    if (e.keyCode === 32) {
        fetch('./data_colors_arr.json')
            .then(resp => resp.json())
            .then(data => {
                const colorLength = data.length;

                const randomNumber1 = Math.floor(Math.random() * colorLength);
                const randomNumber2 = Math.floor(Math.random() * colorLength);
                const randomNumber3 = Math.floor(Math.random() * colorLength);
                const randomNumber4 = Math.floor(Math.random() * colorLength);
                const randomNumber5 = Math.floor(Math.random() * colorLength);

                colorName1.innerText = data[randomNumber1].name;
                colorName2.innerText = data[randomNumber2].name;
                colorName3.innerText = data[randomNumber3].name;
                colorName4.innerText = data[randomNumber4].name;
                colorName5.innerText = data[randomNumber5].name;

                colorHex1.innerText = data[randomNumber1].hex;
                colorHex2.innerText = data[randomNumber2].hex;
                colorHex3.innerText = data[randomNumber3].hex;
                colorHex4.innerText = data[randomNumber4].hex;
                colorHex5.innerText = data[randomNumber5].hex;

                colorRgb1.innerText = `RGB${data[randomNumber1].rgb}`;
                colorRgb2.innerText = `RGB${data[randomNumber2].rgb}`;
                colorRgb3.innerText = `RGB${data[randomNumber3].rgb}`;
                colorRgb4.innerText = `RGB${data[randomNumber4].rgb}`;
                colorRgb5.innerText = `RGB${data[randomNumber5].rgb}`;

                color1.style.background = `rgb${data[randomNumber1].rgb}`;
                color2.style.background = `rgb${data[randomNumber2].rgb}`;
                color3.style.background = `rgb${data[randomNumber3].rgb}`;
                color4.style.background = `rgb${data[randomNumber4].rgb}`;
                color5.style.background = `rgb${data[randomNumber5].rgb}`;
            })
            .catch(err => {
                console.error(err);
                alert(`Upsss! Something went wrong 😥`)
            });
    }
}

window.addEventListener('keyup', changeColorInfo);


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

signInSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('ads');
})


// SIGN UP WINDOW
signUpBtn.addEventListener('click', () => {
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
});

signUpWindowCloseBtn.addEventListener('click', () => {
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
    signUpEmail.value = '';
    signUpPassword.value = '';
});

signUpLink.addEventListener('click', () => {
    signUpWindow.classList.toggle('show');
    signUpWindow.classList.toggle('hide');
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
});

signUpSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    // PASSWORD VALIDATOR
    const pwdLetters = /[a-z]/i;
    const pedNumbers = /[0-9]/;
    const pwdSpecial = /[!@#$%^&*()]/;
    const pwdMinValue = 8;

    if (signUpPassword.value.length < pwdMinValue) {
        signUpWorning.innerText = 'Your password is not strong enough!';
        signUpWorning.style.display = 'block';
    } else if (!signUpPassword.value.match(pwdLetters)) {
        signUpWorning.innerText = 'Your password is not strong enough!';
        signUpWorning.style.display = 'block';
    } else if (!signUpPassword.value.match(pedNumbers)) {
        signUpWorning.innerText = 'Your password is not strong enough!';
        signUpWorning.style.display = 'block';
    } else if (!signUpPassword.value.match(pwdSpecial)) {
        signUpWorning.innerText = 'Your password is not strong enough!';
        signUpWorning.style.display = 'block';
    } else {
        signUpWorning.style.display = 'none';
        console.log('jest ok');

        // PASSWORD CONFIRMATION
        if (signUpPassword.value !== signUpPasswordConfirm.value) {
            signUpWorning.innerText = 'The password confirmation does not match!';
            signUpWorning.style.display = 'block';
        } else {
            signUpWorning.style.display = 'none';
            console.log('pwd confirmation is OK');
        }
    }
})


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

pwdResetSubmit.addEventListener('click', (e) => {
    e.preventDefault();
})

signInLink.addEventListener('click', () => {
    pwdResetWindow.classList.toggle('show');
    pwdResetWindow.classList.toggle('hide');
    signInWindow.classList.toggle('show');
    signInWindow.classList.toggle('hide');
});


/*
// ADD FAVORITE COLOR

const addFavColor = () => {
    if (allFavColors.length < 10) {
        // for (const rgbColor of rgbColors) {
        //     const test = rgbColor.innerText;
        //     console.log(test);
        // }

        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = colorRgb1.innerText;
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', `background: ${colorRgb1.innerText}`);
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
*/


// ADD FAVORITE COLOR
const addFavColor1 = () => {
    if (allFavColors.length < 10) {
        // for (const rgbColor of rgbColors) {
        //     const test = rgbColor.innerText;
        //     console.log(test);
        // }

        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = colorRgb1.innerText;
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', `background: ${colorRgb1.innerText}`);
        let newFavColorDeleteBtn = document.createElement('i');
        newFavColorDeleteBtn.setAttribute('class', 'fas fa-times delete-fav-color');

        ulFavColor.appendChild(newFavColor)
        newFavColor.appendChild(newFavColorInfo);
        newFavColor.appendChild(newFavColorPreview);
        newFavColor.appendChild(newFavColorDeleteBtn);

        favColors.classList.add('show');
        favColors.classList.remove('hide');
        favColorsBtn.classList.add('active-el');
    } else {
        return;
    }
};

const addFavColor2 = () => {
    if (allFavColors.length < 10) {
        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = colorRgb2.innerText;
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', `background: ${colorRgb2.innerText}`);
        let newFavColorDeleteBtn = document.createElement('i');
        newFavColorDeleteBtn.setAttribute('class', 'fas fa-times delete-fav-color');

        ulFavColor.appendChild(newFavColor)
        newFavColor.appendChild(newFavColorInfo);
        newFavColor.appendChild(newFavColorPreview);
        newFavColor.appendChild(newFavColorDeleteBtn);

        favColors.classList.add('show');
        favColors.classList.remove('hide');
        favColorsBtn.classList.add('active-el');
    } else {
        return;
    }
};

const addFavColor3 = () => {
    if (allFavColors.length < 10) {
        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = colorRgb3.innerText;
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', `background: ${colorRgb3.innerText}`);
        let newFavColorDeleteBtn = document.createElement('i');
        newFavColorDeleteBtn.setAttribute('class', 'fas fa-times delete-fav-color');

        ulFavColor.appendChild(newFavColor)
        newFavColor.appendChild(newFavColorInfo);
        newFavColor.appendChild(newFavColorPreview);
        newFavColor.appendChild(newFavColorDeleteBtn);

        favColors.classList.add('show');
        favColors.classList.remove('hide');
        favColorsBtn.classList.add('active-el');
    } else {
        return;
    }
};

const addFavColor4 = () => {
    if (allFavColors.length < 10) {
        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = colorRgb4.innerText;
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', `background: ${colorRgb4.innerText}`);
        let newFavColorDeleteBtn = document.createElement('i');
        newFavColorDeleteBtn.setAttribute('class', 'fas fa-times delete-fav-color');

        ulFavColor.appendChild(newFavColor)
        newFavColor.appendChild(newFavColorInfo);
        newFavColor.appendChild(newFavColorPreview);
        newFavColor.appendChild(newFavColorDeleteBtn);

        favColors.classList.add('show');
        favColors.classList.remove('hide');
        favColorsBtn.classList.add('active-el');
    } else {
        return;
    }
};

const addFavColor5 = () => {
    if (allFavColors.length < 10) {
        let newFavColor = document.createElement('li');
        idNumber++;
        newFavColor.setAttribute('id', `fav-color-${idNumber}`);
        let newFavColorInfo = document.createElement('span');
        newFavColorInfo.setAttribute('class', 'fav-color-info');
        newFavColorInfo.innerText = colorRgb5.innerText;
        let newFavColorPreview = document.createElement('div');
        newFavColorPreview.setAttribute('class', 'fav-color-preview');
        newFavColorPreview.setAttribute('style', `background: ${colorRgb5.innerText}`);
        let newFavColorDeleteBtn = document.createElement('i');
        newFavColorDeleteBtn.setAttribute('class', 'fas fa-times delete-fav-color');

        ulFavColor.appendChild(newFavColor)
        newFavColor.appendChild(newFavColorInfo);
        newFavColor.appendChild(newFavColorPreview);
        newFavColor.appendChild(newFavColorDeleteBtn);

        favColors.classList.add('show');
        favColors.classList.remove('hide');
        favColorsBtn.classList.add('active-el');
    } else {
        return;
    }
};

favColorBtn1.addEventListener('click', addFavColor1);
favColorBtn2.addEventListener('click', addFavColor2);
favColorBtn3.addEventListener('click', addFavColor3);
favColorBtn4.addEventListener('click', addFavColor4);
favColorBtn5.addEventListener('click', addFavColor5);

// DELETE FAVORITE COLOR

const deleteFavoriteColor = (e) => {
    const deleteFavColor = e.target.closest('li');
    deleteFavColor.remove();
};

ulFavColor.addEventListener('click', deleteFavoriteColor);