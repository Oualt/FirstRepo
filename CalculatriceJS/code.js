var premierNombre;
var deuxiemeNombre;
var resultat;

function choixNombres() {
  do {
    premierNombre = Number(prompt("Entrez le premier nombre"));
    deuxiemeNombre = Number(prompt("Entrez le deuxieme nombre"));
  } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));
}

function addition(nombreA, nombreB) {
  nombreA = Number(nombreA);
  nombreB = Number(nombreB);
  resultat = premierNombre + deuxiemeNombre;
  showResult(resultat);
  return resultat;
}

function soustraction(premierNombre, deuxiemeNombre) {
  resultat = premierNombre - deuxiemeNombre;
  showResult(resultat);
  return resultat;
}

function multiplication(premierNombre, deuxiemeNombre) {
  resultat = premierNombre * deuxiemeNombre;
  showResult(resultat);
  return resultat;
}

function division(premierNombre, deuxiemeNombre) {
  if (deuxiemeNombre == 0) {
    alert("ERREUR ON NE DIVISE PAS PAR 0");
  } else {
    resultat = premierNombre / deuxiemeNombre;
    showResult(resultat);
    return resultat;
  }
}

function showResult(resultat) {
  alert("Voici le résultat de l'opération : " + resultat);
}

let restart = false;
do {
  do {
    var choix = prompt(
      "Que souhaitez vous faire ? \n \n 1- Addition \n 2- Soustraction \n 3- Multiplication \n 4- Division"
    );
    choix = Number(choix);
    //switch?
  } while (
    choix == "" ||
    choix == null ||
    choix > 4 ||
    choix <= 0 ||
    choix == isNaN(choix)
  ); // ou (choix != "1" || choix != "2" || choix != "3" || choix != "4");

  try {
    switch (choix) {
      case 1:
        choixNombres();
        addition(premierNombre, deuxiemeNombre);
        break;
      case 2:
        choixNombres();
        soustraction(premierNombre, deuxiemeNombre);
        break;
      case 3:
        choixNombres();
        multiplication(premierNombre, deuxiemeNombre);
        break;
      case 4:
        choixNombres();
        division(premierNombre, deuxiemeNombre);
        break;
      default:
        //continue;
        throw new Error("Une erreur est survenue");
    }
  } catch (error) {
    alert(error);
  }

    restart = confirm("Voulez vous refaire un calcul ?");
  restart;
} while (restart);
