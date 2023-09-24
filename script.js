function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //  documentElement -> entra na teg html

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")){
    img.setAttribute('src', './assets/sol.jpeg') 
    img.setAttribute("alt", "sol")
    //setAttribute -> adicionar, ajutar e modificar um atributo
    //se tiver light mode, adicionar a imagem light
}
else{
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', "./assets/lua.jpeg")
    img.setAttribute('alt', 'Vitor no escuro')
}

}

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  // contains -> ele pergunta se contem alguma classe procuranda no ()