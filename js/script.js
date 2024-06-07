
let closeBtn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');
closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
})

