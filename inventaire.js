const COL_NOM = 20; const COL_PRIX = 8; const COL_STOCK = 6

const produits = [
    {nom: "Bol céramique", prix: "24", stock: "3" },
    {nom:"Mug grand format", prix:"18", stock:"3"},
    {nom: "Assiette plate", prix:"32", stock: "7"}
]

function createRows(nom, prix, stock) {
    return `${nom.padEnd(COL_NOM, " ")} ${prix.padStart(COL_PRIX, " ")} ${stock.padStart(COL_STOCK, " ")}`
}

let message = ` ${"Nom".padEnd(COL_NOM, " ")} ${"Prix".padEnd(COL_PRIX, " ")} ${"Stock".padEnd(COL_STOCK, "")}
${"-".repeat(COL_NOM)} ${"-".repeat(COL_PRIX)} ${"-".repeat(COL_STOCK)}`

console.log(message)

for (const { nom, prix, stock } of produits) {
  console.log(createRows(nom, prix, stock));
}