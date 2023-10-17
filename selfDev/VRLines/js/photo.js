const addPhoto = document.querySelector('.add_photo');
const secondRow = document.querySelectorAll('.image__second-row');

addPhoto.addEventListener('click', (e) => {
    e.preventDefault();
    for (i of secondRow) {
        i.classList.remove('image__hidden')
        
    }

})