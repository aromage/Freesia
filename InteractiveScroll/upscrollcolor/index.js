let ticking = false;

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  ticking = false;
  
  const upOnScrollElems = document.querySelectorAll('.up-on-scroll');
  upOnScrollElems.forEach(elem => {
    if (isElementUnderBottom(elem)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  });

  const changeBgSection = document.querySelector('.background-change-wrap');
  const changeBgImg = document.querySelector('.background-change-wrap > div');
  const {top} = changeBgSection.getBoundingClientRect();
  if (top < 0) {
    const rate = (-1) * top;
    changeBgImg.style.filter = `grayscale(${rate}%)`;
    changeBgImg.style.opacity = `${(100-rate/5) / 100}`;
  } else {
    changeBgImg.style.filter = 'none';
        changeBgImg.style.opacity = `1`;
  }
}

function requestTick() {
  if(!ticking) {
    requestAnimationFrame(handleScroll);
  }
  ticking = true;
}

 window.addEventListener('scroll', requestTick);