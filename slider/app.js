const galleryPics = document.querySelectorAll('.gallery__pic');

galleryPics.forEach((pic) => {
  pic.addEventListener('click', () => {
    clearActivePic();
    pic.classList.add('gallery__pic--active');
  });
});

function clearActivePic() {
  galleryPics.forEach((pic) => {
    pic.classList.remove('gallery__pic--active');
  });
}
