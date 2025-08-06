function togleMode() {
  const html = document.documentElement
  html.classList.toggle('light')


  const img = document.querySelector('#profile img')
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const description = document.querySelector("#profile")
  if (html.classList.contains("light")) {
    description.setAttribute("alt", "avatar dark mode")
  } else {
    description.setAttribute("alt", "avatar light mode")
  }
}