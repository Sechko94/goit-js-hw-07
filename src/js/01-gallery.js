import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery')
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', cardsMarkup);


function createImgCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`
        
    })
        .join("");
}
console.log(createImgCardsMarkup(galleryItems));

galleryBox.addEventListener('click', clickOnImg);

function clickOnImg (event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
        },
    );

    function onKeydownEsc(event) {
        if (event.code === 'Escape') {
            instance.close()
        }
    }
    
  
    
    

    instance.show();   
}
