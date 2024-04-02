const images = document.querySelectorAll('.images img');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxContent.src = image.src;
    caption.textContent = image.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
