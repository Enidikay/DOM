// PARTIE A if else ternaire

const heure = 14;
const estMembre = true;
const poids = 8;

let message;
if (heure < 12) {
    message = "Bonjour";
} else {
    message = "Bonsoir";
}

// A
const message = heure < 12 ? "Bonjour" : "Bonsoir";


let prix;
if (estMembre == true) {
    prix = 8;
} else {
    prix = 12;
}

//B
const prix = estMembre ? 8 : 12;


let frais;
if (poids > 5) {
    frais = 9.90;
} else {
    frais = 4.90;
}

//C
const frais = poids > 5 ? 9.90 : 4.90;


//PARTIE B Ternaire

const note = 14;
const mention = note >= 16 ? "Très bien" : note >= 14 ? "Bien" : note >= 12 ? "Assez bien" : note >= 10 ? "Passable" : "Insuffisant";

let mention;

if (note >= 16) {
    mention = "Très bien";
} else if(note >= 14){
    mention = "Bien";
} else if(note >= 12){
    mention = "Assez bien"
} else if (note >= 10){
    mention = "Passable"
} else{
    mention = "Insufisant"
}


// pour moi la plus lisible c la condition d'au dessus

// Partie C — Combiner les conditions

const age = 25;
const aPermis = true;
const aVoiture = false;
const portefeuille = 50;

const etat = age >= 18 && aPermis ? "Peut conduire seule" : "Ne peut pas conduire"
const peutLouer = aPermis && !aVoiture && portefeuille >= 40 ? "Peut louer une voiture" : "Ne peut pas louer de voiture"
const mineur = age < 18 && aVoiture == false ? "Mineur sans option" : "Majeur avec option"

