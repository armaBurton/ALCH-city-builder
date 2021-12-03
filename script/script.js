// import functions and grab DOM elements
import { createCountString } from './utils.js';

//stretch array of objects
const arrayOfObjects = [
    {
        name: `CASTLE`,
        drop: [
            `french`,
            `german`,
            `japanese`    
        ]
    },
    {
        name: `downtown`,
        drop: [
            `new york`,
            `chicago`,
            `japan`
        ]
    },
    {
        name: `mars`,
        drop: [
            `dome`,
            `inflatable`,
            `earthen`
        ]
    }
];

let populateArr = [];
let castleDropdown,
    castleImage = document.getElementById(`castle-image`);

//grab dropdown elements;
const 
    // castleDropdown = document.getElementById(`castle-dropdown`),
    downtownDropdown = document.getElementById(`downtown-dropdown`),
    marsDropdown = document.getElementById(`mars-dropdown`);

//Grab image divs
const
    // castleImage = document.getElementById(`castle-image`),
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
    
//grab columns for populating dropdowns
const 
    parent1 = document.getElementById(`col1`),
    child1 = document.getElementById(`castle-image`),
    col2 = document.getElementById(`col2`),
    col3 = document.getElementById(`col3`);

// let state
let castle = 0,
    downtown = 0,
    mars = 0;

let countStr = ``;

let sloganArr = [];

// set event listeners 
//init load assign initial values to variables !!!no blank divs!!!
window.addEventListener('load', () => {
    let h2 = document.createElement(`h2`);
    h2.classList.add(`text-shadow`, `title-case`);
    h2.setAttribute(`id`, `castle-name`);
    h2.textContent = arrayOfObjects[0].name;
    // let castleName = document.getElementById(`castle-name`);
    let select = document.createElement(`select`);
    select.setAttribute(`name`, `castle`);
    select.setAttribute(`id`, `castle-dropdown`);
    populateArr.push(h2);
    for (let d of arrayOfObjects[0].drop){
        let option = document.createElement(`option`);
        option.classList.add(`title-case`);
        option.setAttribute(`value`, d);
        option.textContent = titleCase(d);
        select.append(option);
    }
    populateArr.push(select);
    parent1.insertBefore(h2, child1);
    parent1.insertBefore(select, child1);

    castleDropdown = document.getElementById(`castle-dropdown`);
    castleImage = document.getElementById(`castle-image`);

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

//titlecase function stolen from google
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

//waits for page to load
setTimeout(castleDrop, 200);
function castleDrop() {
    castleDropdown.addEventListener('change', () => {
        castle++;
        castleImage.innerHTML = `<img src="../assets/castle/${castleDropdown.value}.png" />`;
        displayStats();
    });
}


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

