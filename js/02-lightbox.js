import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const makeGalleryItemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryItemsMarkup);

function createGalleryItems(evt) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
    <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"> 
            </img>
          </a>
          </li>`;
    })
    .join("");
}
console.log(galleryItems);
const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
