  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');

  let currentIndex = 0;

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showLightbox();
    });
  });

  function showLightbox() {
    lightbox.style.display = 'flex';
    lightboxImage.src = galleryImages[currentIndex].src;
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showLightbox();
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
