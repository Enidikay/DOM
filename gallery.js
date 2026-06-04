const form = document.querySelector("#add-form")
const gallery = document.querySelector("div.gallery")
const nbrImg = document.querySelector("#count")
let count = 0

form.addEventListener("submit", (event) => {
    // empêche le formulaire de s'envoyer si on a rien envoyé
    event.preventDefault()

    // initialisation de la figure de l'image et la description
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")
    const deleteImage = document.createElement("button")


    //création de la figure et ses éléments en prenant les infos du form
    let id = figure.setAttribute("data-id", crypto.randomUUID())
    img.src = document.querySelector("#img-url").value
    figcaption.textContent = `${document.querySelector("#img-alt").value}`

    if (!img.value || !figcaption.value) {
        alert("Image et description requise")
        return
    }

    count++
    
    figure.append(img, figcaption, deleteImage)
    gallery.append(figure)

    // Supprimer une image individuellement
    deleteImage.textContent = `Supprimer`
    deleteImage.addEventListener("click", () => {
        figure.remove()
        count--
        nbrImg.textContent = `${count} image${(count > 1) ? "s" : " "}`
    })

    // met au pluriel si on a + de 1 image
    nbrImg.textContent = `${count} image${(count > 1) ? "s" : " "}`

    // fallback en cas d'erreur
    img.onerror = () => {
        img.src = "./images/R.jpg"
    }

    form.reset() // reset formulaire
})


let globalDelete = document.createElement("button")
globalDelete.textContent = `Supprimer la galerie`
document.querySelector("main").append(globalDelete)

globalDelete.addEventListener("click", () => {
    const figures = document.querySelectorAll("#gallery figure")
    for (const figure of figures) {
        figure.remove()
    }
    nbrImg.textContent = `0 image`
    count = 0
})