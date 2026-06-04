function avaiableProducts() {
    const produitsDisponible = document.createElement("p");
    const enStockGrid = document.createElement("ul");
    const inStock = document.querySelectorAll("li.in-stock");

    document.querySelector("main").append(enStockGrid);

    produitsDisponible.textContent = `Les produits disponible sont :`;
    enStockGrid.append(produitsDisponible);

    const products = document.querySelectorAll("#products .in-stock")

    for (const li of inStock) {
        let clone = li.cloneNode(true);
        enStockGrid.append(clone);

        if (products.length < 0) {
            const noProduct = document.createElement("span")
            noProduct.textContent = ` - Aucun produit est disponible`;
            clone.append(noProduct);
        }
    }
}

function createTotalProduct(total) {
    const createTotal = document.createElement("p");
    createTotal.id = "total";
    createTotal.textContent = `le nombre de produit total est ${total}`;
    document.querySelector("main").append(createTotal);
}


function getSomme() {
    let getSum = document.querySelectorAll("#products .price");
    prixFinal = 0;

    for (const prix of getSum) {
        prixFinal += Number(prix.innerText);
    }

    const createSomme = document.createElement("p");
    createSomme.id = "sum";
    createSomme.textContent = `le prix total est égale à ${parseFloat(prixFinal)}`;
    document.querySelector("main").append(createSomme);

    return prixFinal
}

function getAverage(total, productNumber) {
    let averageCalcul = total / productNumber;

    const createAverage = document.createElement("p");
    createAverage.id = "avg";
    createAverage.textContent = `Le prix moyen est ${parseFloat(averageCalcul)}`;
    document.querySelector("main").append(createAverage);
}

function getMostExpensive() {
    let getSum = document.querySelectorAll(".price");
    prixCher = 0;

    for (const prix of getSum) {
        if (prixCher < Number(prix.innerText)) {
            prixCher = Number(prix.innerText);
        }
    }

    const createExpensive = document.createElement("p");
    createExpensive.id = "top";
    createExpensive.textContent = `Le prix le plus élevé est ${parseFloat(prixCher)}`;
    document.querySelector("main").append(createExpensive);
}

function Init() {
    
    const getTotalLength = document.querySelectorAll("li").length;

    avaiableProducts();
    createTotalProduct(getTotalLength)
    getAverage(getSomme(), getTotalLength);
    getMostExpensive();

}

Init();