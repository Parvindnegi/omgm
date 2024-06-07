
let closeBtn = document.querySelector('.sidebar .close-btn');
closeBtn.addEventListener('click', (event) => {
  event.target.closest('.sidebar').classList.toggle('active');
})

let selectBtn = document.querySelector('.select');
let periodPoUp = document.querySelector('.period-po-up');
selectBtn.addEventListener('click', () => {
  periodPoUp.classList.toggle('active');
})

let closeBtnP = document.querySelector('.period-po-up .close-btn');
closeBtnP.addEventListener('click', (event) => {
  event.target.closest('.period-po-up').classList.remove('active');
});