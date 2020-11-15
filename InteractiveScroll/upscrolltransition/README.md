# Upscroll with opacity & transform

### 왜 쓰나
 1. 사용자의 시선처리를 자연스럽게 유도하기 위해서
 2. 세련되 보이니까
 3. 멋있으니까

### 한 번 만들어보자

아래에 element가 있는지 확인
```javascript
function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect(); // viewport 기준 element의 좌표를 구해주는 함수 그 중 top값만 가져온다
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}
```

scroll up 이벤트 생성
```javascript
function handleScroll() {
  const elems = document.querySelectorAll('.up-on-scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) { //element 위치가 지금 내 화면보다 아래있나 체크
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(50px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })
}
```

생성한 이벤트 윈도우에 붙여주고
```javascript
window.addEventListener('scroll', handleScroll);
```

각 element요소에 class로 `up-on-scroll`을 붙여주면 완성!
```html
<div class="up-on-scroll">이렇게!</div>
```