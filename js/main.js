const button = document.querySelector('.main-description-button');
const modal = document.querySelector('.modal-loading');
const body = document.querySelector('body');

const openModal = () => {
    modal.classList.add('modal-open');
    body.classList.add('modal-open');
};

const closeModal = (e) => {
   const target = e.target;
    if(!target.closest('.modal-loading-wrapper')) {
        modal.classList.remove('modal-open');
        body.classList.remove('modal-open');
    }
};

button.addEventListener('click', openModal);
modal.addEventListener('click', closeModal)