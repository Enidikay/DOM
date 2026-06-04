

class Vehicule {
    //Attributs
    #marque;
    #vitesseMax;
    static #nombre = 0;

    // Constructeur
    constructor(var_marque, var_vitesseMax) {
        this.marque = var_marque;
        this.vitesseMax = var_vitesseMax;
        Vehicule.nombre++;
    };

    static compte() {
        return Vehicule.nombre;
    };

    // Getters
    get vitesseMax() {
        return this.#vitesseMax;
    };

    get marque() {
        return this.#marque;
    }

    get rapide() {
        let rapide = (this.#vitesseMax >= 130) ? true : false;
    };

    // Setters
    set vitesseMax(v) {
        let vitesse = (v < 0) ? console.warn("On ne peut pas avoir de vitesse négative"): this.#vitesseMax = v
    };

    set marque(v){
        this.#marque = v;
    }

    // Methodes speciales
    toString() {
        return `${this.#marque} - ${this.#vitesseMax} km/h`;
    };

}

const v = new Vehicule("Renault", 180);
v.marque = "Mercedes"
v.vitesseMax = -5

console.log(v.marque)
console.log(v.vitesseMax)
