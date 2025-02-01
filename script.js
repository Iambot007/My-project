 // Optional: Add JavaScript for additional interactivity
 const cards = document.querySelectorAll('.service-card');

 cards.forEach(card => {
   card.addEventListener('mouseenter', () => {
     card.style.transform = 'translateY(-10px)';
   });

   card.addEventListener('mouseleave', () => {
     card.style.transform = 'translateY(0)';
   });
 });

 document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector(".menu");
  const button = document.querySelector(".menu-button");
  button.addEventListener("click", function() {
      menu.classList.toggle("active");
  });
  document.addEventListener("click", function(e) {
      if (!menu.contains(e.target)) {
          menu.classList.remove("active");
      }
  });
});