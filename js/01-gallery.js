import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description })=> {
  return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `
}).join('');

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener('click', onOpenImg);

function onOpenImg(event) {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) {
            return
    };
    
    const openImg = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    openImg.show();
    
    window.addEventListener('keydown', onCloseImg);

    function onCloseImg(e) { 
        
        if (e.code === "Escape") {
            openImg.close();
        };
        window.removeEventListener('keydown', onCloseImg);    
    }; 
};
