const tabs = document.querySelectorAll('.filter-tabs__item');
const hiddenInput = document.getElementById('selected-type');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // toggle active
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // cập nhật hidden input
    hiddenInput.value = tab.dataset.value;
  });
});