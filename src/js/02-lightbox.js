import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", cardsMarkup);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery a', { 
    caption: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,

});
