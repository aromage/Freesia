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
  
  //이미지 스크롤 속도를 늦춤 - 스크롤마다 위치를 아래로 움직임으로써
  const productImg = document.querySelector('.diff-desc-image-wrap .image-wrap'); 
  const productImgRect = productImg.getBoundingClientRect();
  console.log(productImgRect.top);
  if (productImgRect.top < 0) {
    productImg.style.transform = `translateY(${-1 * productImgRect.top * 0.8}px)` 
  } else {
    productImg.style.transform = 'none';
  }
}

function requestTick() {
  if(!ticking) {
    requestAnimationFrame(handleScroll);
  }
  ticking = true;
}

 window.addEventListener('scroll', requestTick);