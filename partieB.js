let age = 30;
age = 31;
console.log(age);
//Sensé marcher car on écrase la première ligne pour attribuer une nouvelle valeur a age

// 2. Réassignation avec const
const PI = 3.14;
PI = 3.14159;

//Ne va pas marcher car on peut pas réécrire une constante

// 3. Redéclaration interdite
let prenom = "Alice";
let prenom = "Bob";

//on peut pas redéclarer 2 fois la mm variable

// 4. const sans valeur initiale
const total = 100;
const compteur;

//va pas marcher car compteur n’as pas de valeur

