let btn = document.querySelector('#nouveau');
let citation = document.querySelector('#citation');
let auteur = document.querySelector('#auteur');
let randomIndex = 7;
let dernierIndex = 7;

generate();

btn.addEventListener('click', getRandomIndex);

function generate() { 
    citation.textContent = citations[randomIndex][0];
    auteur.textContent = citations[randomIndex][1];
}

function getRandomIndex() { 
    do {
        randomIndex = Math.floor(Math.random() * citations.length);
    } while (dernierIndex == randomIndex);
    dernierIndex = randomIndex;
    generate();
}