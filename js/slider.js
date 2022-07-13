const slider = document.querySelector('.slider');
const before = document.querySelector('.slider__before');
const beforeImage = document.querySelector('.slider__img');
const resize = document.querySelector('.slider__resize');

let isActive = false;
let width = slider.offsetWidth;
beforeImage.style.maxWidth = `${width}px`;

function beforeAfterSlider(x) {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  console.log(shift)
  before.style.width = `${shift}px`;
  resize.style.left = `${shift}px`;
}

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};


const changeWidth = () => {
  isActive = false;
  before.classList.add('tr');
  resize.classList.add('tr');
  before.style.width = 50 + '%';
  resize.style.left = 50 + '%';
}

resize.addEventListener('mousedown', () => {
  isActive = true;
  before.classList.remove('tr');
  resize.classList.remove('tr');  
});

slider.addEventListener('mouseup', () => {
  isActive = false;
  changeWidth();
});

slider.addEventListener('mouseleave', () => {
  isActive = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return
  }

  let x = e.pageX;

  if (window.matchMedia("(min-width: 1900px)").matches) {
    if (x > 1680 || x < 280) {
      changeWidth();
    } else {
      x -= slider.getBoundingClientRect().left;
      pauseEvents(e);
      beforeAfterSlider(x);
    }
  } else if (window.matchMedia('(min-width: 1700px)').matches) {
    if (x < 280 || x > 1420) {
      changeWidth();
    } else {
      x -= slider.getBoundingClientRect().left;
      pauseEvents(e);
      beforeAfterSlider(x);
    }
  } else if (window.matchMedia('(min-width: 1500px)').matches) {
    if (x < 280 || x > 1210) {
      changeWidth();
    } else {
      x -= slider.getBoundingClientRect().left;
      pauseEvents(e);
      beforeAfterSlider(x);
    }
  } else if (window.matchMedia('(min-width: 1300px)').matches) {
    if (x < 280 || x > 1010) {
      changeWidth();
    } else {
      x -= slider.getBoundingClientRect().left;
      pauseEvents(e);
      beforeAfterSlider(x);
    }
  } else if (window.matchMedia('(min-width: 1100px)').matches) {
    if (x < 280 || x > 810) {
      changeWidth();
    } else {
      x -= slider.getBoundingClientRect().left;
      pauseEvents(e);
      beforeAfterSlider(x);
    }
  } else if (window.matchMedia('(min-width: 992px)').matches) {
    if (x < 280 || x > 700) {
      changeWidth();
    } else {
      x -= slider.getBoundingClientRect().left;
      pauseEvents(e);
      beforeAfterSlider(x);
    }
  } 
});