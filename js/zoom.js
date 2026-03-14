document.addEventListener('DOMContentLoaded', () => {
  // Initialize medium-zoom on all images within the <main> element
  const images = document.querySelectorAll('main img');
  
  if (typeof mediumZoom !== 'undefined') {
    mediumZoom(images, {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.8)',
      scrollOffset: 0,
    });
  }
});
