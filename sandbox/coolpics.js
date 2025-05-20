const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
handleResize();

const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return;

  const fullSrc = img.src.split("-")[0] + "-full.jpeg";
  const altText = img.alt;

  modalImage.src = fullSrc;
  modalImage.alt = altText;

  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
