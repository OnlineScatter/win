document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });
  
document.addEventListener("DOMContentLoaded", function() {
  // Carousel functionality
  let currentIndex = 0;
  const carouselItems = document.querySelectorAll("#promotions-carousel .item");
  const totalItems = carouselItems.length;

  function showCarouselItem(index) {
      carouselItems.forEach((item, i) => {
          item.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextCarouselItem() {
      currentIndex = (currentIndex + 1) % totalItems;
      showCarouselItem(currentIndex);
  }

  setInterval(nextCarouselItem, 3000);

  // Hover effects for game categories
  const gameCategories = document.querySelectorAll("#game-categories .category");
  gameCategories.forEach(category => {
      category.addEventListener("mouseover", function() {
          this.classList.add("hover");
      });
      category.addEventListener("mouseout", function() {
          this.classList.remove("hover");
      });
  });

  // Slider for user reviews
  const reviewsSlider = document.querySelector("#user-reviews");
  let reviewIndex = 0;
  function showReview(index) {
      const reviews = reviewsSlider.querySelectorAll(".review");
      reviews.forEach((review, i) => {
          review.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextReview() {
      reviewIndex = (reviewIndex + 1) % reviewsSlider.querySelectorAll(".review").length;
      showReview(reviewIndex);
  }

  setInterval(nextReview, 5000);
});

<script>
    document.getElementById('promotions-carousel').addEventListener('slide.bs.carousel', function () {
        document.body.classList.add('carousel-active');
    });

    document.getElementById('promotions-carousel').addEventListener('slid.bs.carousel', function () {
        document.body.classList.remove('carousel-active');
    });

document.addEventListener('DOMContentLoaded', () => {
    // Get all table rows
    const rows = document.querySelectorAll('tr');

    // Iterate over each row and add a button
    rows.forEach(row => {
        // Create a new button element
        const button = document.createElement('button');
        button.textContent = 'Visit Now';

        // Get the link from the anchor tag in the row
        const link = row.querySelector('a');
        if (link) {
            button.onclick = () => window.open(link.href, '_blank');
        }

        // Append the button to the last cell in the row
        const lastCell = row.insertCell(-1);
        lastCell.appendChild(button);

        // Add the highlight class to the row
        row.classList.add('highlight');
    });
});
