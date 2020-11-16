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
    changeBgImg.style.opacity = `${(100-rate/5) / 100}`;
  } else {
    // changeBgImg.style.filter = `grayscale(${rate}%)`;
    changeBgImg.style.filter = 'none';
        changeBgImg.style.opacity = `1`;
  }

  // const videoSection = document.querySelector('.video-frame-wrap');
  // const video = document.querySelector('video');
  // const {top : videoTop} = videoSection.getBoundingClientRect();
  // console.log(video.currentTime);
  // if(videoTop < 0) {
  //   const rate = (-1) * top;
  //   video.currentTime = rate;
  // }
}

function requestTick() {
  if(!ticking) {
    requestAnimationFrame(handleScroll);
  }
  ticking = true;
}

 window.addEventListener('scroll', requestTick);
