function fusionner(...arrays) {
    const tbl = []

    for (const array of arrays) {
        tbl.push(...array);
    }

    return tbl;
};


function supprimerDoublons(arrays) {
    const tbl = [];

    for (let i = 0; i < arrays.length; i++) {

        if (tbl.includes(arrays[i])) {
            continue;
        }
        tbl.push(arrays[i]);
    }

    return tbl;
};

function aplatir(arrays) {
    const tbl = [];
    for (const array of arrays) {
        tbl.push(...array);
    }
    return tbl;
};

/**
 * 
 * @param {Array} arrays 
 * @param {Number} number 
 * @param  {...any} elements 
 * 
 * @returns {Array} arrays
 */


function inserer2(arrays, index, ...elements) {
    arrays.splice(index, 0, ...elements);
    return arrays
}

/**
 * 
 * @param {Array} arrays 
 * @param {Number} index 
 * @param {Number} count 
 */

function retirer(arrays, index, count = 1) {
    arrays.splice(index, count);
    return arrays
}

const inserer = (arr, index, ...elements) => [
    ...arr.slice(0, index),
    ...elements,
    ...arr.slice(index)
]

//console.log(inserer([1, 2, 5], 2, 3, 4));
//console.log(retirer([1, 2, 3, 4, 5], 1, 2));

//console.log(fusionner([1, 2], [3, 4], [5]));
//console.log(supprimerDoublons([1, 2, 2, 3, 1]));
console.log(aplatir([[1, 2], [3], [4, 5]]));