const logNext = document.getElementById('login-btn');
const resetNext = document.getElementById('reset-btn');
const upgradeNext = document.getElementById('upgrade-btn');

const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

const boxes = document.querySelectorAll('.box');

logNext.addEventListener('click', () => {
  boxes.forEach(box => {
    box.style.display = 'none';
  })
  box2.style.display = 'block';
});
resetNext.addEventListener('click', () => {
  boxes.forEach(box => {
    box.style.display = 'none';
  })
  box3.style.display = 'block';
});
upgradeNext.addEventListener('click', () => {
  boxes.forEach(box => {
    box.style.display = 'none';
  })
  box1.style.display = 'block';
});