//Element가 viewport기준으로 아래 가려진곳에 있는지 아닌지 판별
function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}
  


//아래에 있다면 50px아래로 내리고 투명도를 100%로
function handleScroll() {
  ticking = false;
  const elems = document.querySelectorAll('.up-on-scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(50px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';

    }
  })
}

let ticking = false;
//성능저하가 있을 수 있어 프레임 단위로 이벤트를 제한
function requestTick() {
  if(!ticking) {
    //모니터 '주사율'에 맞춰 함수를 실행해주는 비동기함수
    //window.setInterval(frame, 1000 / 60);
    requestAnimationFrame(handleScroll); 
  }
  ticking = true;
}
  
window.addEventListener('scroll', requestTick);