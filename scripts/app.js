const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePoster = document.querySelector(".userInputPosterUrl");
const movieYear = document.querySelector(".userInputYear");
const btn = document.querySelector(".button");
const moveTitleToDisplay = document.querySelector(".favouriteMovieTitle");
const moveYearToDisplay = document.querySelector(".favouriteMovieYear");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");
let yearInStorage = localStorage.getItem("year");

if (titleInStorage && imageUrlInStorage && yearInStorage) {
  moveTitleToDisplay.textContent = titleInStorage;
  moveYearToDisplay.textContent = `Release Year: ${yearInStorage}`;
  container.style.backgroundImage = `linear-gradient(rgba(55, 55, 98, 0.484), rgba(112, 56, 56, 0.56)),
  url('${imageUrlInStorage}');`;
}

btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value;
  let posterUrlInput = moviePoster.value;
  let movieYearInput = movieYear.value;
  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("imageUrl", posterUrlInput);
  localStorage.setItem("year", movieYearInput);

  moveTitleToDisplay.textContent = movieTitleInput;
  moveYearToDisplay.textContent = `Release Year: ${movieYearInput}`;

  container.style.backgroundImage = `linear-gradient(rgba(55, 55, 98, 0.484), rgba(112, 56, 56, 0.56)),
  url('${posterUrlInput}')`;
});