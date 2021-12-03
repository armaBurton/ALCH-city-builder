// import functions and grab DOM elements
import { createCountString } from './utils.js';
//grab dropdown elements;
const 
    castleDropdown = document.getElementById(`castle-dropdown`),
    downtownDropdown = document.getElementById(`downtown-dropdown`),
    marsDropdown = document.getElementById(`mars-dropdown`);

//Grab image divs
const
    castleImage = document.getElementById(`castle-image`),
    downtownImage = document.getElementById(`downtown-image`),
    marsImage = document.getElementById(`mars-image`);

//grab output div for change states
const 
    castleCount = document.getElementById(`castle-count`),
    downtownCount = document.getElementById(`downtown-count`),
    marsCount = document.getElementById(`mars-count`);

//grab slogan inputs/outputs
const 
    sloganInput = document.getElementById(`slogan-input`),
    sloganButton = document.getElementById(`slogan-button`),
    sloganShow = document.getElementById(`slogan-show`);

// let state
let castle = 0,
    downtown = 0,
    mars = 0;

let countStr = ``;

let sloganArr = [];

// set event listeners 
//init load assign initial values to variables !!!no blank divs!!!
window.addEventListener('load', () => {
    castleImage.innerHTML = `<img src="../assets/castle/${castleDropdown.value}.png" />`;
    castleCount.textContent = castle;
    downtownImage.innerHTML = `<img src="../assets/downtown/${downtownDropdown.value}.png" />`;
    downtownCount.textContent = downtown;
    marsImage.innerHTML = `<img src="../assets/mars/${marsDropdown.value}.png" />`;
    marsCount.textContent = mars;
    let p = document.createElement(`p`);
    p.textContent = sloganArr;
    sloganShow.append(sloganArr);
});

castleDropdown.addEventListener('change', () => {
    castle++;
    castleImage.innerHTML = `<img src="../assets/castle/${castleDropdown.value}.png" />`;
    displayStats();
});
  
downtownDropdown.addEventListener('change', () => {
    downtown++;
    downtownImage.innerHTML = `<img src="../assets/downtown/${downtownDropdown.value}.png" />`;
    displayStats();
});
  
marsDropdown.addEventListener('change', () => {
    mars++;
    marsImage.innerHTML = `<img src="../assets/mars/${marsDropdown.value}.png" />`;
    displayStats();
});

sloganButton.addEventListener(`click`, () => {
    let p = document.createElement(`p`);
    p.textContent = sloganInput.value;
    sloganArr.push(p);
    displaySlogans();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//impure

function displayStats(){
    countStr = createCountString(castle, downtown, mars);
    castleCount.textContent = countStr[0];
    downtownCount.textContent = countStr[1];
    marsCount.textContent = countStr[2];
}

function displaySlogans(){
    sloganShow.textContent = ``;

    for (let a of sloganArr){
        sloganShow.prepend(a);
    }
}

