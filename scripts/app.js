const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePoster = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const moveTitleToDisplay = document.querySelector(".favouriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if (titleInStorage && imageUrlInStorage) {
  moveTitleToDisplay.textContent = titleInStorage;
  container.style.backgroundImage = `linear-gradient(rgba(55, 55, 98, 0.484), rgba(112, 56, 56, 0.56)),
  url('${imageUrlInStorage}');`;
}

btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value;
  let posterUrlInput = moviePoster.value;
  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("imageUrl", posterUrlInput);
  moveTitleToDisplay.textContent = movieTitleInput;

  container.style.backgroundImage = `linear-gradient(rgba(55, 55, 98, 0.484), rgba(112, 56, 56, 0.56)),
  url('${posterUrlInput}')`;
});