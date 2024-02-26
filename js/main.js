// On récupère l'élément #board
const board = document.querySelector(".board");

// Je crée ma div avec la classe .boxCitation
const boxCitation = document.createElement("div") 
boxCitation.classList.add("boxCitation")


quotes.forEach(function(quote) { // Je déclare une boucle pour la création des citations
    const newBox = boxCitation.cloneNode(); // Clone des divs
    let text = "<p>" + quote.content + "</p>" +
                "<p>" + quote.author + "</p>";
        

        newBox.innerHTML = text // J'ajoute l'html a la box
        board.appendChild(newBox);
})