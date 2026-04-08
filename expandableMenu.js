const expandableMenu = () => {
  // hämta element från DOM
  const menuButton = document.querySelector(".menu-button")
  const menu = document.querySelector(".menu-expanded")

  //funktion för att toggla synlig meny
  const toggleMenu = () => {
    console.log("Klickat på knappen")
    menu.classList.toggle("menu-expanded--visible")
  }

  //eventlyssnare

  menuButton.addEventListener("click", toggleMenu)
}

expandableMenu()
