// On récupère l'élément #board
const board = document.querySelector(".board");

// Je crée ma div avec la classe .boxCitation
const boxCitation = document.createElement("div") 
boxCitation.classList.add("boxCitation")


quotes.forEach(function(quote) { // Je déclare une boucle pour la création des citations
    const newBox = boxCitation.cloneNode(); // Clone des divs
    let text = "<p>" + quote.content + "</p>" +
                "<p class= 'auteur' >" + quote.author + "</p>" +
                "<i id='coeur' class='fa-solid fa-heart'></i>" // ajout du coeur 
        

        newBox.innerHTML = text // J'ajoute l'html a la box
        board.appendChild(newBox);
        let coeur = newBox.querySelector(".fa-heart") //je selection les coeurs de mes box
        coeur.addEventListener("click",function(){ //j'ajoute un evenement click sur chaque coeur
                coeur.classList.toggle("clicked")
        
        }
        )
})
