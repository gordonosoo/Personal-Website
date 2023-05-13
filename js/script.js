window.onload = function() {
  const bannerClose = document.querySelector('.banner-close');
  const banner = document.querySelector('.banner-close');
  const btnScroll = document.querySelector('.btn-scroll');

  bannerClose.addEventListener('click', function() {
    banner.style.display = 'none';
  });

  btnScroll.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}
