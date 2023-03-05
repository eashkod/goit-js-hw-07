import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const makeGalleryItemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryItemsMarkup);

function createGalleryItems(evt) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"> 
            </img>
          </a>
          </div>`;
    })
    .join("");
}

//console.log(galleryItems);//
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modalImg = evt.target.dataset.source;
  console.log(modalImg);

  const instance = basicLightbox.create(
    `
    <img src = "${modalImg}">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeydown);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeydown);
      },
    }
  );

  const onEscKeydown = (evt) => {
    console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
}
