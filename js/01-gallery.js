import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');
listEl.addEventListener('click', onClickGalleryItem);

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('')

listEl.insertAdjacentHTML('beforeend', markup);

function onClickGalleryItem(event) {
    event.preventDefault();
    document.addEventListener('keydown', onEscKeydown);
    
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    
    const instance = basicLightbox.create(`
    <img
      src="${event.target.dataset.source}"
    />`)
    instance.show();

    function onEscKeydown(event) {
    if (event.code === 'Escape') {
    instance.close()
        
    document.removeEventListener('keydown', onEscKeydown)
    }
    };
    
};

    

