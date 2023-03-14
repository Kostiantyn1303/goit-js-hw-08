import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryContainerlistEl = document.querySelector('.gallery');

const cardsMarkup = createGalleryCards(galleryItems);
galleryContainerlistEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCards(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview} " alt="${description} "  />
    </a>
     </li>
     `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
