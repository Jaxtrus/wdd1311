const articles = [
  {
    date: "2024-03-01",
    genre: "Fantasy",
    ages: "8-12",
    stars: "★★★★★",
    title: "The Girl Who Drank the Moon",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Girl_Who_Drank_the_Moon_%28Barnhill%29.png",
    imgAlt: "Cover of The Girl Who Drank the Moon",
    description: "A magical tale about a young girl raised by a witch, a swamp monster, and a Perfectly Tiny Dragon. Rich in storytelling and emotion."
  },
  {
    date: "2024-04-15",
    genre: "Adventure",
    ages: "10-14",
    stars: "★★★★☆",
    title: "Hatchet",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2b/Hatchetcover.jpg",
    imgAlt: "Cover of Hatchet by Gary Paulsen",
    description: "A gripping survival story of a boy stranded in the Canadian wilderness with only a hatchet. A modern classic in children's adventure literature."
  },
  {
    date: "2024-05-01",
    genre: "Science Fiction",
    ages: "9-13",
    stars: "★★★★★",
    title: "Last Gate of the Emperor",
    imgSrc: "https://m.media-amazon.com/images/I/81AK1sN2B6L.jpg",
    imgAlt: "Cover of Last Gate of the Emperor",
    description: "A thrilling Afrofuturist adventure set in a sci-fi Ethiopia. Explores identity, destiny, and courage through a captivating story."
  }
];

const output = document.querySelector("#articles");

articles.forEach(article => {
  const el = document.createElement("article");
  el.classList.add("book");
  el.innerHTML = `
    <div class="meta">
      <p>${article.date}</p>
      <p>${article.genre}</p>
      <p>${article.ages}</p>
      <p>${article.stars}</p>
    </div>
    <div class="content">
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}</p>
    </div>
  `;
  output.appendChild(el);
});
