const btnThem = document.querySelector('.btn-them');
const btnClose = document.querySelector('.btn-close');
const modalOverlay = document.getElementById('form-modal');

btnThem.addEventListener('click', () => {
    modalOverlay.classList.add('open');
});

btnClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
});

