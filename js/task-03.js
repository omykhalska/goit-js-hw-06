const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainerEl = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ url, alt }) => {
  return `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}"></li>`;
};

const createGallery = images.map(createGalleryItemMarkup).join('');

galleryContainerEl.insertAdjacentHTML('beforeend', createGallery);

/*
const makeGallery = (images = []) => {
  return images.map(({ url, alt }) => {
    const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery__item');
    const imageEl = document.createElement('img');
    imageEl.classList.add('gallery__image');
    imageEl.src = url;
    imageEl.alt = alt;
    galleryItemEl.appendChild(imageEl);

    return galleryItemEl;
  });
};

const elements = makeGallery(images);
galleryContainerEl.append(...elements); */
