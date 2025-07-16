// script.js

// Sample movie data
const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "sci-fi",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    director: "Christopher Nolan",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology...",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    title: "Sinners",
    year: 2023,
    rating: 7.5,
    genre: "drama",
    cast: ["Actor 1", "Actor 2"],  // Replace with actual cast names
    director: "Director Name",     // Replace with actual director name
    description: "A gripping drama about redemption and the complexities of human nature, exploring moral dilemmas and personal transformation.",
    image: "https://image.tmdb.org/t/p/w500/path_to_sinners_poster.jpg" // Replace with actual image URL
  },
  {
    title: "Bullet Train",
    year: 2022,
    rating: 7.2,
    genre: "action",
    cast: ["Brad Pitt", "Joey King"],
    director: "David Leitch",
    description: "Five assassins aboard a fast-moving bullet train find out their missions have something in common.",
    image: "https://image.tmdb.org/t/p/w500/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg"
  }
];

// DOM elements
const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const yearFilter = document.getElementById("yearFilter");
const ratingFilter = document.getElementById("ratingFilter");
const castFilter = document.getElementById("castFilter");
const modal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");

// Render movie cards
function renderMovies(filteredMovies) {
  movieGrid.innerHTML = "";
  if (filteredMovies.length === 0) {
    movieGrid.innerHTML = "<p>No movies match your criteria.</p>";
    return;
  }
  filteredMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <div class="movie-poster">
        <img src="${movie.image}" alt="${movie.title}" />
        <div class="movie-overlay">
          <div class="overlay-content">
            <h3>${movie.title}</h3>
            <p>${movie.description.slice(0, 100)}...</p>
            <div class="overlay-actions">
              <button class="overlay-btn" onclick='showDetails(${JSON.stringify(
                movie
              )})'>More Info</button>
            </div>
          </div>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-meta">
          <span class="movie-year">${movie.year}</span>
          <span class="movie-rating">⭐ ${movie.rating}</span>
        </div>
        <div class="movie-genre">${movie.genre}</div>
      </div>
    `;
    movieGrid.appendChild(card);
  });
}

// Show modal details
function showDetails(movie) {
  modalTitle.textContent = movie.title;

  modalDetails.innerHTML = `
    <p><strong>Year:</strong> ${movie.year}</p>
    <p><strong>Rating:</strong> ${movie.rating}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
    <p>${movie.description}</p>
  `;

  modal.style.display = "block";
}
// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Filter logic
function applyFilters() {
  const genre = genreFilter.value;
  const year = yearFilter.value;
  const rating = ratingFilter.value;
  const castName = castFilter.value.toLowerCase();

  const filtered = movies.filter((movie) => {
    return (
      (!genre || movie.genre === genre) &&
      (!year || movie.year.toString() === year) &&
      (!rating || movie.rating >= parseFloat(rating)) &&
      (!castName ||
        movie.cast.some((actor) => actor.toLowerCase().includes(castName)) ||
        movie.director.toLowerCase().includes(castName))
    );
  });

  renderMovies(filtered);
}

function clearFilters() {
  genreFilter.value = "";
  yearFilter.value = "";
  ratingFilter.value = "";
  castFilter.value = "";
  renderMovies(movies);
}

function searchMovies() {
  const query = searchInput.value.toLowerCase();
  const results = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );
  renderMovies(results);
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Initial render
renderMovies(movies);

// Close modal on outside click
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    closeModal();
  }
});
