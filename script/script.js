// import functions and grab DOM elements
import { createCountString } from './utils.js';

//stretch array of objects
const arrayOfObjects = [
    {
        name: `castle`,
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
let castleImage = document.getElementById(`castle-image`);

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
    


// let state
let castle = 0,
    downtown = 0,
    mars = 0;

let dropdown = [],
    imgArr = [],
    parent,
    child;


let countStr = ``;

let sloganArr = [];

// set event listeners 
//init load assign initial values to variables !!!no blank divs!!!

window.addEventListener('load', () => {
    for (let i = 0; i < 3; i++){
        let h2 = document.createElement(`h2`);
        h2.classList.add(`text-shadow`, `title-case`);
        h2.id = `${arrayOfObjects[i].name}-name`;
        h2.textContent = arrayOfObjects[i].name;
        let select = document.createElement(`select`);
        select.name = `${arrayOfObjects[i].name}`;
        select.id = `${arrayOfObjects[i].name}-dropdown`;
        populateArr.push(h2);
        for (let d of arrayOfObjects[i].drop){
            let option = document.createElement(`option`);
            option.classList.add(`title-case`);
            option.value = d;
            option.textContent = titleCase(d);
            select.append(option);
        }
        parent = document.getElementById(`col${i + 1}`);
        child = document.getElementById(`${arrayOfObjects[i].name}-image`);
        populateArr.push(select);
        parent.insertBefore(h2, child);
        parent.insertBefore(select, child);
        
        imgArr[i] = document.getElementById(`${arrayOfObjects[i].name}-image`);
        dropdown[i] = document.getElementById(`${arrayOfObjects[i].name}-dropdown`);

        // castleImage.innerHTML = `<img src="../assets/castle/${arrayOfObjects[0].drop[0]}.png" />`;
        castleImage.innerHTML = `<img src="../assets/castle/french.png" />`;
        castleCount.textContent = castle;
        downtownImage.innerHTML = `<img src="../assets/downtown/${arrayOfObjects[1].drop[0]}.png" />`;
        downtownCount.textContent = downtown;
        marsImage.innerHTML = `<img src="../assets/mars/${arrayOfObjects[2].drop[0]}.png" />`;
        marsCount.textContent = mars;
        
        setTimeout(() => {
            drop(i);
        }, 300);
        
    }

    function drop(i) {
        // let cas = dropdown[i];
        dropdown[i].addEventListener('change', () => {
            let state = arrayOfObjects[i].name;
            setCount(state);
            imgArr[i].innerHTML = `<img src="../assets/${arrayOfObjects[i].name}/${dropdown[i].value}.png" />`;
            displayStats();
        });
    }

    let p = document.createElement(`p`);
    p.textContent = sloganArr;
    sloganShow.append(sloganArr);

});

function setCount(state){
    switch (state) {
        case `castle`:
            castle++;
            break;
        case `downtown`:
            downtown++;
            break;
        case `mars`:
            mars++;
            break;
    }
}

//titlecase function stolen from google
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}


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

