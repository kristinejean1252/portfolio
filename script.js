document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
document.getElementById('work-together-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');

      const category = button.getAttribute('data-category');

      projectItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});