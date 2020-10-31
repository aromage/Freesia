# 뷰 vs 리액트(작성중)

 > 이 문서는 [원본](https://hswolff.com/blog/what-vuejs-does-better-than-react/) 을 읽고 작성된 문서입니다

------

## 목차
 1. [다른 철학](#Different-Philosophies)
 2. [한 파일 컴포넌트](#Single-File-Components)
 3. [공식적으로 지원되는 관련 라이브러리](#Officially-Supported-Related-Libraries)


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

------

## [3.](#목차) Officially Supported Related Libraries

## [4.](#목차) Style Guide

## [5.](#목차) Class and Style Bindings

## [6.](#목차) Slots

## [7.](#목차) Directive Modifiers

## [8.](#목차) Form Input Bindings

## [9.](#목차) Custom Directives

## [10.](#목차) Written in TypeScript

## [11.](#목차) Video

## [12.](#목차) Closing Thoughts