/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // JavaScript pour détecter la page actuelle et ajuster la position du menu déroulant
document.addEventListener("DOMContentLoaded", function() {
    const dropdownContent = document.querySelector(".dropdown-content");
    const body = document.querySelector("body");
  
    if (body.id === "page-recherche") {
      // Si nous sommes sur la page de recherche, ajustez la position du menu déroulant à gauche
      dropdownContent.style.right = "auto";
      dropdownContent.style.left = "0";
      dropdownContent.style.transform = "translateX(0)";
    } else {
      // Sinon, nous sommes sur la page d'accueil, utilisez la position par défaut à droite
      dropdownContent.style.right = "0";
      dropdownContent.style.left = "auto";
      dropdownContent.style.transform = "translateX(0)";
    }
});
  

  /*Search page*/


  

  
  document.getElementById("search-input").addEventListener("input", function() {
    const searchInput = document.getElementById("search-input").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const cardName = card.querySelector(".card__heading").textContent.toLowerCase();
      const cardNumber = card.querySelector(".card__category").textContent.toLowerCase();
      const cardType = card.querySelector(".card__content p").textContent.toLowerCase();

      if (
        searchInput === '' || // Si le champ de recherche est vide
        cardName.includes(searchInput) ||
        cardNumber.includes(searchInput) ||
        cardType.includes(searchInput)
      ) {
        card.style.display = "block"; // Affiche la carte si elle correspond à la recherche ou si le champ est vide
      } else {
        card.style.display = "none"; // Cache la carte si elle ne correspond pas à la recherche
      }
    });
  });





