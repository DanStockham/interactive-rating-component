const scaleElem = document.getElementById('scale');
let selectedValue = null;

const updateRatingSelection = (element) => {
    const previousSelectedRating = document.getElementsByClassName('selected-rating');

    if(previousSelectedRating.length) {
        previousSelectedRating[0].className = previousSelectedRating[0].className.replace(' selected-rating', '');
    
    }
    
    element.className += ' selected-rating';
}


const initialization = () => {
    const submitBtnElem = document.getElementById('rating-submit-btn');

    submitBtnElem.addEventListener('click', () => {
        const ratingContainerElem = document.getElementsByClassName('rating-prompt-container')[0];
        const thankyouContainerElem = document.getElementsByClassName('thankyou-container')[0];
        const userSelectionElem = document.getElementById('selected-rating-value');

        userSelectionElem.innerText = selectedValue;

        ratingContainerElem.style.display = 'none';
        thankyouContainerElem.style.display = 'flex';


    });

    for(let i = 0; i < 5; i++) {
        const ratingElem = document.createElement("li");
        const ratingValue = i + 1;
    
        ratingElem.className = 'rating-selection';
        ratingElem.dataset.ratingValue = ratingValue;
        ratingElem.addEventListener('click', (e) => {
            const target = e.target;
            const value = e.target.dataset?.ratingValue;
    
            selectedValue = value;
    
            updateRatingSelection(target);
        });
    
        ratingElem.innerHTML = ratingValue;
    
        scaleElem.appendChild(ratingElem);
    }
};

initialization();

