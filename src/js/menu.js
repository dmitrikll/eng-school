(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
  const closeModal = () => {
    refs.menu.classList.remove('is-open');
  };
  document
    .querySelectorAll('.mobile-menu__link')
    .forEach(link => link.addEventListener('click', closeModal));
})();
