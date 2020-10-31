# 뷰 vs 리액트(작성중)

 > 이 문서는 [원본](https://hswolff.com/blog/what-vuejs-does-better-than-react/) 을 읽고 작성된 문서입니다

------

## 목차
 1. [다른 철학](#1-Different-Philosophies)
 2. [한 파일 컴포넌트](#2-Single-File-Components)
 3. [공식적으로 지원되는 관련 라이브러리](#3-Officially-Supported-Related-Libraries)
 4. [스타일 가이드](#4-Style-Guide)
 5. [클래스와 스타일 바인딩](#5-Class-and-Style-Bindings)


------

## [1.](#목차) Different Philosophies

Vue와 React사이의 중요한 차이점들 중 하나는 지향하는 바가 다른 것이다

홈페이지에 가보면 스스로를 다음과 같이 묘사하고 있다
 * React : "a JavaScript **library** for building user interfaces"
 * Vue : "progressive JavaScript **framework**"

원저는 위의 사항을 이 글을 읽는 동안 각각의 UI 프레임워크들이 작업들을 수행하는 방법과 이유의 차이에 대해서 근본적인 고찰을 하고 계속 상기 하도록 강조하고 싶었다고 한다

**FrameWork**는 역사적으로 그들이 제공하거나 요구하는 사항에 대해서 더 포괄적이고 철저하다
**Library**는 FrameWork에 비해 덜 포괄적이고 덜 수행하지만 목표로 하는 기능에 대해서는 확실하게 작동한다

서로가 묘사하는 바를 인지하고 이를 기반으로 아래 사항들에 대해서 생각해보면서 읽으면 좋을 것 같다


> ### 생각해볼 사항
> 1. `React`가 생각하는 제공 목표는 무엇인가? 글을 쭉 읽으면서 생각을 해보았는데, `React`는 **형상**(style)에 대해서 별로 제공해주고 싶은 생각이 없는 것 같다. 왜 그럴까?

------ 

## [2.](#목차) Single File Components

`Vue`와 `React`는 둘다 UI를 만들기 위한 `Components`라는 구성요소를 가지고 있다

 * `Components`는 보통 다음과 같은 3가지 요소로 구성된다
   * UI(HTML)
   * 행동(Javascript)
   * 형상(CSS)

 * `Vue`는`"한 파일 컴포넌트"` 컨셉으로 3가지 구성요소를 전부 포함하고 있다  
`Vue components`는 다음과 같이 생겼다

```html
<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
  module.exports = {
    data() {
      return {
        greeting: 'Hello',
      };
    },
  };
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
```
여기서 알 수 있는 사실은 위의 코드가 어떻게 작동하는지에 대해서 Vue엔지니어가 필요하지 않다는 점이다

 * `React`의 경우 **UI**와 **행동**은 포함되어 있지만, **형상**의 경우 포함되지 않는다

```javascript
import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Current count: {count}
      <br />
      Click me
    </button>
  );
}
```
물론 `React`는 방대한 커뮤니티를 가지고 있기 때문에 형상을 포함하고 싶다면 `Emotion` 또는 `Styled Components`에 쉽게 접근할 수 있으며, 비어있는 **형상** 항목을 채울 수 있지만 다음 항목과 같이

 * Built-in이 아님
 * 이들을 사용하기 위해 이 라이브러리들이 존재하고 있음을 알고 있어야 함

때문에  `Vue`의 기본제공 사항과 대척점을 가지게 된다


> ### 생각해볼 사항
> 1. `React`는 왜 형상관리를 따로 빼놓았을까?

------

## [3.](#목차) Officially Supported Related Libraries

Front에서 크고 복잡한 UI 어플리케이션에는 두 가지 기능이 제공되는 것이 좋다
 * **Router(라우터)**
 * **State Management(상태관리)**

`Vue`는 공식적으로 `Vue Router`와 `Vuex`를 각각 예제까지 포함해서 지원한다  
이 라이브러리들은 `Vuejs Docs`에 명시적으로 언급 되고, `Vuejs Core`와 함께 개발 및 유지관리가 되고있다.  

이러한 점은 새로 `Vue`를 사용하려는 엔지니어들에게 문제를 해결할 경로를 제공해주고 라이브러리 선택에 있어서 확신을 가질 수 있게 해준다

자체 지원 라이브러리가 있다고, 커뮤니티 솔루션이 제한되는 것은 아니지만, 신규 사용자들을 위한 적합한 솔루션을 제공해준다.

> ### 생각해볼 사항
> 1. `React`의 `Redux`와 `Router`는 `First-party`라이브러리가 아니다 즉, `React`가 생각하기에 자신들의 제공목표 기능이 아니라는 것.

------

## [4.](#목차) Style Guide

 **원저는 이 사항을 `React`도 공식적으로 가이드 해주는 것을 원한다**

[VueJs 스타일 가이드](https://kr.vuejs.org/v2/style-guide/index.html)

`Vue`에는 위와 같이 공식적으로 추천되는 코드 스타일이 존재한다
이는 처음 접하는 사람들이 생각하는 많은 질문들에 대해서 **적절**하고 접근 가능한 `Vue 어플리케이션`작성 방법에 대해 모법 사례들을 제공한다

이 가이드는 또한 커뮤니티 검증 모범사례도 공유하고 코드화 해주는데, 무엇보다도 위의 모든 사항을 전부 `Vuejs`에서 유지관리하고 지원한다.  **Terrific!**
 > 처음으로 감탄사가 껴있는데, 원저는 이런 가이드를 굉장히 고평가 하는 것 같다

> ### 생각해볼 사항
> 1. `React`의 경우 검색해보니 `Airbnb`에서 제공해주는 `React/JSX` 스타일 가이드가 있다. 꽤 많은사람들이 이용중이다. `React`에 공식적인 스타일 가이드가 없는 것에 대해서 궁금해하는 글들도 많다. 왜 그럴까? 

------

## [5.](#목차) Class and Style Bindings

[2번 항목](#2-Single-File-Components)에서와 같이 `Vue`는 내장 스타일링을 지원해주며, 기본적으로 `className`라이브러리가 내장되어 있다.

`React`에서는 이 라이브러리가 존재하는 것을 알고 설치해야 한다.

`Vue`에는 다음과 같은 또다른 내장 기능이 있다 : [스타일바인딩](https://v3.vuejs.org/guide/class-and-style.html#object-syntax)

다음과 같이 `Vue Teamplate`을 보자
```html
<template>
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: false
        }
    }
}
</script>
```
이렇게 작성된 UI는 다음과 같이 변환된다
```html
<div class="static active"></div>
```
원저는 위 처럼 클래스를 동적으로 변환하는 것이 대단하다고 여기고,
이러한 특징이 `Vue`의 프레임워크로서의 강점을 보여준다고 생각한다.
또한, `Vue`는 `React`와 같이 인라인 스타일을 제공하지만, 필요할때 auto prefix CSS기능을 제공하여 `React`를 능가한다고 생각한다.

> ### 생각해볼 사항
> 1. `React`에서 style binding을 하려면 어떤 것이 필요한지 알아보자. 많이 복잡한가?


------

## [6.](#목차) Slots

## [7.](#목차) Directive Modifiers

## [8.](#목차) Form Input Bindings

## [9.](#목차) Custom Directives

## [10.](#목차) Written in TypeScript

## [11.](#목차) Video

## [12.](#목차) Closing Thoughts