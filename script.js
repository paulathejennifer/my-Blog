


document.addEventListener('DOMContentLoaded', function() {
    const reviewContainer = document.querySelector('.review-container');
    const reviewItems = document.querySelectorAll('.review-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    const numReviews = reviewItems.length;
    let currentIndex = 0;

    function showReview(index) {
        reviewItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });

        indicatorDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % numReviews;
        showReview(currentIndex);
    }

    function prevReview() {
        currentIndex = (currentIndex - 1 + numReviews) % numReviews;
        showReview(currentIndex);
    }

    function goToReview(index) {
        currentIndex = index;
        showReview(currentIndex);
    }

    nextButton.addEventListener('click', nextReview);
    prevButton.addEventListener('click', prevReview);

    indicatorDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            goToReview(index);
        });
    });

    showReview(currentIndex);
});



document.addEventListener('DOMContentLoaded', function() {
    const reviewContainer = document.querySelector('.review-container');
    const reviewItems = document.querySelectorAll('.review-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicatorsContainer = document.querySelector('.indicators'); 
    const numReviews = reviewItems.length;
    let currentIndex = 0;
    function createIndicators() {
        for (let i = 0; i < numReviews; i++) {
            const dot = document.createElement('span');
            dot.classList.add('indicator-dot');
            dot.dataset.index = i;
            dot.addEventListener('click', function() {
                goToReview(parseInt(this.dataset.index));
            });
            indicatorsContainer.appendChild(dot);
        }
        if (indicatorsContainer.firstChild) {
            indicatorsContainer.firstChild.classList.add('active');
        }
    }

    function showReview(index) {
        reviewItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });

        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % numReviews;
        showReview(currentIndex);
    }

    function prevReview() {
        currentIndex = (currentIndex - 1 + numReviews) % numReviews;
        showReview(currentIndex);
    }

    function goToReview(index) {
        currentIndex = index;
        showReview(currentIndex);
    }

    nextButton.addEventListener('click', nextReview);
    prevButton.addEventListener('click', prevReview);

    createIndicators();

    showReview(currentIndex);
});



  
