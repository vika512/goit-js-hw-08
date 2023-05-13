// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

const imagesList = document.querySelector('.gallery');

const imagesListItems = galleryItems.map(item =>
    `<li class="gallery__item"> 
        <a class="gallery__link" href="${item.original}"> 
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></li>`)
    .join("");


imagesList.innerHTML = imagesListItems;

var lightbox = new SimpleLightbox('.gallery li a', { 
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});