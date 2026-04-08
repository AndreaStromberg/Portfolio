const lightmode = () => {
  // Hämta in variabler
  const lightModeButton = document.querySelector(".light-button")
  const body = document.querySelector("body")

  // Funktion för att toggla lightmode
  const toggleLightmode = () => {
    body.classList.toggle("body-lightmode")
  }

  //Eventlyssnare
  lightModeButton.addEventListener("click", toggleLightmode)
}

lightmode()
