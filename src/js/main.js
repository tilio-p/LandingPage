const langBtn = document.querySelector('.l-language');
const footer = document.querySelector('footer');
const margin = 33;

function updateLangBtnPosition() {
  const footerTop = footer.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;
  const footerVisible = viewportHeight - footerTop;

  if (footerVisible > 0) {
    langBtn.style.bottom = footerVisible + margin + 'px';
  } else {
    langBtn.style.bottom = margin + 'px';
  }
}

window.addEventListener('scroll', updateLangBtnPosition, { passive: true });
updateLangBtnPosition();
