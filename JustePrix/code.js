// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector("#formulaire");
let btn = document.querySelector("button");
let nombreAleatoire;
let arrayDiv = [];
let replay = true;
let nombreChoisi;
let firstTime = true;
let audio = new Audio("JustePrix03.mp3");

// Etape 2 - Cacher l'erreur
error.hidden = true;

// Audio fonction
function startAudio(fileName){
    audio.pause(); // previent les couches d'audio
    audio = new Audio(fileName + '.mp3');
    audio.play();
    }

// Etape 3 - Générer un nombre aléatoire
function getRandNbr() {
    nombreAleatoire = Math.floor(Math.random() * 1001);
    console.log(nombreAleatoire); // Tricheur ;)
}

getRandNbr();

let coups = 0;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) { 
    let div = document.createElement('div');
    arrayDiv.push(div);
    if(nombre < nombreAleatoire){
        div.textContent = "#" + coups + " " + "|" + " " + nombre + " " + ":" + " " + "C'est plus !"
        div.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire) {
        div.textContent = "#" + coups + " " + "|" + " " + nombre + " " + ":" + " " + "C'est moins !"
        div.className = "instruction moins";
    }
    else {
        div.textContent = "#" + coups + " " + "|" + " " + nombre + " " + ":" + " " + "Félicitation vous avez trouvé Le Juste Prix !";
        startAudio("JustePrix03Win");
        div.className = "instruction fini";
        input.disabled = true;
        btn.textContent = "Rejouer";
        replay = false;
        coups = 0;        
    }
    document.querySelector('#instructions').prepend(div);
 }

// Musique lorsqu'on passe le curseur sur l'input la premiere fois
input.addEventListener("mouseover", () => {
    if(firstTime){
        startAudio("JustePrix03");
        firstTime = false;
    }
});

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
    if(isNaN(input.value)) {       //Si l'input n'est pas un nombre
        error.hidden = false;
    }
    else {
        error.hidden = true;
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    if(isNaN(input.value) || input.value == ''){
        if(replay == true){
            input.style.borderColor = "red";
            
        }
        else {
            input.disabled = false;
            btn.textContent = "Deviner";
            arrayDiv.forEach(element => { element.remove(); });
            arrayDiv = [];
            getRandNbr();
        }
    }
    else {
        coups++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});


