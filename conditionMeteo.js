const ville = "Lyon";
const temperature = 9;
const pluie = true;

let condition;
/*
if (temperature < 0) {
    condition = "glacial, reste au chaud";
} else if (temperature < 10) {
    condition = "frais, pull recommandé"
} else if (temperature < 20) {
    condition = "doux, veste légère"
} else if (temperature >= 20) {
    condition = "agréable, t-shirt OK"
}
*/

switch (temperature) {
    case (temperature < 10):
        condition = "frais, pull recommandé"
        break
    case (temperature < 20):
        condition = "doux, veste légère"
        break
    case (temperature >= 20):
        condition = "agréable, t-shirt OK"
        break
    default:
        condition = "glacial, reste au chaud";
        break
}




const message = `${"=".repeat(2)} Metéo de ${ville.toUpperCase()} ${"=".repeat(2)}
Température : ${temperature}
Conditions: ${condition} & ${pluie === true ? "pluie attendue, sors couvert" : "ciel dégagé"}`;

console.log(message)