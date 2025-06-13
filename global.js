$(document).ready(function () {
  const $searchBox = $('#p-search form');

  if ($searchBox.length) {
    const $button = $('<span class="toggle-menu-button">Afficher le menu</span>');
    $searchBox.append($button);

    let isVisible = false;

    $button.on('click', function () {
      isVisible = !isVisible;
      $('body').toggleClass('show-side-menu', isVisible);
      $button.text(isVisible ? 'Masquer le menu' : 'Afficher le menu');
    });
  }
});
