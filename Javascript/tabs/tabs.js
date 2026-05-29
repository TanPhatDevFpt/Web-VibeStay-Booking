const navtabs = document.querySelectorAll('.tabs .item');
navtabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // toggle active
    navtabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});