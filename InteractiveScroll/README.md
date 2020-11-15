# Interactive Scroll 연습

## 참고자료 

[예제 블로그](https://blueshw.github.io/2019/10/13/show-items-on-scroll/)  
[Scroll Animation](https://cssanimation.rocks/scroll-animations/)  
[아이폰 SE 소개페이지](https://www.apple.com/kr/iphone-se/)

## 시작하기 전에

```python
python3 -m http.server PORT번호
```
로 웹서버형식으로 파일 시스템에 접근할 수 있다.
이를 통해서 간단한 static페이지 테스팅을 하기 쉽다는 점 알아두고 가자

## 미리 알아둘 CSS 지식

### transition
   * 어떤 속성 값의 변화를 주어진 기간 동안 부드럽게 변환시켜 주는 속성(소위 tweening 이라 불리는 애니메이션 기법 - css animation속성과는 다르다)

 * 지원 버전

|the browser|Chromium|firerox|safari|Opera|
|---|---|---|---|---|
|10.0|26.0|16.0|6.1|12.1

 * Vender prefix  
 [사용가능한지 알아보기](https://caniuse.com/)  
 [생성기](http://css3generator.com/)

|the browser|Chrome | firefox|safari|Opera|
|---|---|---|---|---|
|-ms-| 표준 | -moz- | -webkit- | -o- |


transition에서는 다룰 수 있는 속성이 다섯 가지가 있다

 1. transition : 효과 설정
 2. transition-property : 효과가 나타날 요소 `all`로 전부 가능
 3. transition-duration : 효과 실행 시간
 4. transition-delay : 효과 지연 시간
 5. transition-timing-function : 시간함수 설정
    * linear : default
    * ease
    * ease-in
    * ease-out
    * ease-in-out
    * cubic-bezier : [베지어곡선식](https://matthewlein.com/tools/ceaser)


### position

 * **static** : default
 * **relative** : `static` 기준으로 top,right,bottom,left속성으로 위치 변경이 가능
 * **absolute** : `static 속성이 아닌` 부모기준 위치 선정
 * **fixed** : 고정위치 - 브라우저화면 기준(부모기준 아님)
 * **sticky** : 보통은 `static`과 같은 상태이지만, 스크롤 위치가 특정 임계점인 경우 `fixed`속성을 부여받는 속성
 [레진기술블로그-Sticky](https://tech.lezhin.com/2019/03/20/css-sticky)