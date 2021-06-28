let $colors;
let $deleteColorBtns;
let $rgbColors;
let $lockedColorBtns;

const main = () => {
    prepereDOMElements();
    prepereDOMEvents();
};

const prepereDOMElements = () => {
    colors = document.getElementsByClassName('colors');
    deleteColorBtns = document.getElementsByClassName('tool-delete');
    rgbColors = document.getElementsByClassName('color-rgb');
    lockedColorBtns = document.getElementsByClassName('tool-lock');
};

const prepereDOMEvents = () => {
    // SELECT COLOR TO DELETE
    for (const deleteColorBtn of deleteColorBtns) {
        deleteColorBtn.addEventListener('click', deleteColor);
    };
    // SELECT COLOR TO DELETE
    for (const lockedColor of lockedColorBtns) {
        // lockedColor.addEventListener('click', deleteColor);
        lockedColor.addEventListener('click', addLockedClass);
    };
    window.addEventListener('keyup', changeColor);
};


// DELETE COLOR
const deleteColor = (e) => {
    const colorToDelete = e.target.closest('.colors')
    colorToDelete.remove();

    // adding new COLORS' width
    const newWidth = 100 / colors.length;

    for (const color of $colors) {
        color.style.width = newWidth + '%';
    }
};

// ADDING CLASS LOCKED
const addLockedClass = (e) => {
    const locked = e.target.closest('.colors');
    locked.classList.add('locked');
    console.log(locked);
};


// CHANGE COLORS
const changeColor = (e) => {
    if (e.keyCode === 32) {
        if (e.target.className === 'locked') {
            // return;
            console.log(e.target);
        } else {
            for (const color of colors) {

                const r = Math.round(Math.random() * 255);
                const g = Math.round(Math.random() * 255);
                const b = Math.round(Math.random() * 255);

                let newColor = `rgb(${r}, ${g}, ${b})`;
                color.style.background = newColor;
                console.log(newColor);

                // changing RGB COLOR code
                for (const rgbColor of rgbColors) {
                    // console.log(rgbColor);
                    console.log(newColor);
                }

                if (r <= 150 && g <= 150 && b <= 150) {
                    color.classList.toggle('light-text');
                }
            }
        }
    }
};


document.addEventListener('DOMContentLoaded', main);