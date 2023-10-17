const content = document.querySelector('.description__content');
const currentLink = document.querySelector('.current-link');
const descriptionLink = document.querySelector('.description__link');
const reviewLink = document.querySelector('.reviews__link');

const descriptionContent = document.querySelector('.description-content-js');
const reviewContent = document.querySelector('.review-content-js');

reviewLink.addEventListener('click', function(e) {
    e.preventDefault();

    reviewLink.classList.toggle('current-link');
    descriptionLink.classList.toggle('current-link');

    descriptionContent.classList.add('hidden');
    reviewContent.classList.remove('hidden')
})


descriptionLink.addEventListener('click', function(e) {
    e.preventDefault();

    reviewLink.classList.toggle('current-link');
    descriptionLink.classList.toggle('current-link');

    descriptionContent.classList.toggle('hidden');
    reviewContent.classList.toggle('hidden')
})
