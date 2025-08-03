const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = img.src;
    currentIndex = index;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImage.src = images[currentIndex].src;
}

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
