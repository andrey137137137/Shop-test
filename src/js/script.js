window.onload = function() {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const target = e.target;

    if (
      window.innerWidth > 768 &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      if (target.classList.contains('menu-arrow')) {
        target.closest('.menu-item').classList.toggle('.menu-item--hover');
      }

      if (
        !target.closest('.menu-item') &&
        document.querySelectorAll('.menu-item--hover').length > 0
      ) {
        removeClasses(
          document.querySelectorAll('.menu-item--hover'),
          'menu-item--hover',
        );
      }
    }
  }
};
