


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

    // Initial display
    showReview(currentIndex);
});



document.addEventListener('DOMContentLoaded', function() {
    const reviewContainer = document.querySelector('.review-container');
    const reviewItems = document.querySelectorAll('.review-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicatorsContainer = document.querySelector('.indicators'); // Get the container for dots
    const numReviews = reviewItems.length;
    let currentIndex = 0;

    // Function to create indicator dots
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
        // Set the first dot as active initially
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

    // Create the indicator dots on page load
    createIndicators();

    // Initial display
    showReview(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const hiddenArticle = document.getElementById('hiddenArticle');
  
    function checkVisibility() {
      if (!hiddenArticle) {
        return; // Article element not found
      }
  
      const articleTop = hiddenArticle.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
  
      // Define when the article should start appearing (adjust the offset as needed)
      const triggerPoint = articleTop - windowHeight + 100; // Appear 100px before it fully enters
  
      if (scrollY > triggerPoint) {
        hiddenArticle.classList.add('visible');
        hiddenArticle.classList.remove('hidden');
        // Optionally, remove the event listener once the article is visible
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);
  
    // Check visibility on initial load in case the article is already in the viewport
    checkVisibility();
  });

  
//   const showHideBtn = document.getElementById("showHideBtn");
//   const myVideo = document.getElementById("myVideo");
//   showHideBtn.addEventListener("click", ()=>{
//     if(myVideo.style.display==="none"){
//         myVideo.style.display="block"
//         showHideBtn.textContent = "Hide Video";
//     }else{
//         myVideo.style.display = "none"
//         showHideBtn.textContent= "Show Video"
//     }
//   })