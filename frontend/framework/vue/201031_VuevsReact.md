# 뷰 vs 리액트

 > 이 문서는 [원본](https://hswolff.com/blog/what-vuejs-does-better-than-react/) 을 읽고 작성된 문서입니다

------

## 목차

 1. [다른 철학](#1-Different-Philosophies)
 2. [한 파일 컴포넌트](#2-Single-File-Components)
 3. [공식적으로 지원되는 관련 라이브러리](#3-Officially-Supported-Related-Libraries)
 4. [스타일 가이드](#4-Style-Guide)
 5. [클래스와 스타일 바인딩](#5-Class-and-Style-Bindings)
 6. [Slots](#6-Slots)
 7. [디렉티브](#7-Directive-Modifiers)
 8. [Form Input Bindings](#8-Form-Input-Bindings)
 9. [사용자 지정 디렉티브](#9-Custom-Directives)
 10. [타입스크립트](#10-Written-in-TypeScript)
 11. [마치며](#11-Closing-Thoughts)

------

## [1.](#목차) Different Philosophies

Vue와 React는 서로 지향하는 바가 다르다, 이는 각각의 홈페이지에서
묘사하는 바를 보면 알 수 있다.

* React : "a JavaScript **library** for building user interfaces"
* Vue : "progressive JavaScript **framework**"

원저는 위의 문구를 이 문서를 읽는동안 계속 상기하면서 읽었으면 좋겠다고 했다

**FrameWork** 더 포괄적이고 넓은 영역을 제공해준다.
**Library**는 덜 포괄적이나 제공하는 기능에 대해서는 완벽한 완성도를 보여준다

서로가 묘사하는 바를 인지하고 이를 기반으로 아래 사항들에 대해서 생각해보면서 읽으면 좋을 것 같다

> **생각해볼 사항**  
> `React`가 생각하는 제공 목표는 무엇인가? 글을 쭉 읽으면서 생각을 해보았는데, `React`는 **형상**(style)에 대해서 별로 제공해주고 싶은 생각이 없는 것 같다. 왜 그럴까?

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

> **생각해볼 사항**  
> `React`는 왜 형상관리를 따로 빼놓았을까?

------

## [3.](#목차) Officially Supported Related Libraries

Front에서 크고 복잡한 UI 어플리케이션에는 두 가지 기능이 제공되는 것이 좋다

* **Router(라우터)**
* **State Management(상태관리)**

`Vue`는 공식적으로 `Vue Router`와 `Vuex`를 각각 예제까지 포함해서 지원한다  
이 라이브러리들은 `Vuejs Docs`에 명시적으로 언급 되고, `Vuejs Core`와 함께 개발 및 유지관리가 되고있다.  

이러한 점은 새로 `Vue`를 사용하려는 엔지니어들에게 문제를 해결할 경로를 제공해주고 라이브러리 선택에 있어서 확신을 가질 수 있게 해준다

자체 지원 라이브러리가 있다고, 커뮤니티 솔루션이 제한되는 것은 아니지만, 신규 사용자들을 위한 적합한 솔루션을 제공해준다.

> **생각해볼 사항**  
> `React`의 `Redux`와 `Router`는 `First-party`라이브러리가 아니다 즉, `React`가 생각하기에 자신들의 제공목표 기능이 아니라는 것.

------

## [4.](#목차) Style Guide

 **원저는 이 사항을 `React`도 공식적으로 가이드 해주는 것을 원한다**

[VueJs 스타일 가이드](https://kr.vuejs.org/v2/style-guide/index.html)

`Vue`에는 위와 같이 공식적으로 추천되는 코드 스타일이 존재한다
이는 처음 접하는 사람들이 생각하는 많은 질문들에 대해서 **적절**하고 접근 가능한 `Vue 어플리케이션`작성 방법에 대해 모법 사례들을 제공한다

이 가이드는 또한 커뮤니티 검증 모범사례도 공유하고 코드화 해주는데, 무엇보다도 위의 모든 사항을 전부 `Vuejs`에서 유지관리하고 지원한다.  **Terrific!**

> 처음으로 감탄사가 껴있는데, 원저는 이런 가이드를 굉장히 고평가 하는 것 같다

> **생각해볼 사항**  
> `React`의 경우 검색해보니 `Airbnb`에서 제공해주는 `React/JSX` 스타일 가이드가 있다. 꽤 많은사람들이 이용중이다. `React`에 공식적인 스타일 가이드가 없는 것에 대해서 궁금해하는 글들도 많다. 왜 그럴까? 

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

> **생각해볼 사항**  
> `React`에서 style binding을 하려면 어떤 것이 필요한지 알아보자. 많이 복잡한가?

------

## [6.](#목차) Slots

`React`의 모든 요소는 `prop`으로 이루어져 있다
만약 임의의 여러 하위 컴포넌트를 만들려면 `prop`을 더 추가하면 된다

```html
function Nav({ left, right }) {
  return (
    <nav>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </nav>
  );
}

function App() {
  return (
    <main>
      <Nav left={<Logo />} right={<UserDropdown />} />
    </main>
  );
}
```

위 코드는 잘 동작하지만, `props`내의 컨텐츠가 커지면 너무 난해해 진다
그런 점에서 `Vue`의 `Slot`은 다른 관점에서 하위 컴포넌트를 제공한다.

원저는 이 API가 더 깔끔하다고 생각하는 것 같다

```html
<!-- A Vue.js component template named "base-layout" -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- When "base-layout" is used -->
<base-layout>
  <template v-slot:header> <!-- #header로도 사용할 수 있다 -->
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default> <!-- #default로도 사용할 수 있다 -->
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer> <!-- #footer로도 사용할 수 있다 -->
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

`Vue`는 컴포넌트 내의 콘텐트를 깔끔하게 표시하기 위해 `Slot`을 사용한다
위 코드는 `Slot`과 그를 사용한 코드, 그리고 약어 `#`에 대한 설명이다

------

## [7.](#목차) Directive Modifiers

`Vue`는 디렉티브라고 불리는 기능을 가지고 있는데, 이게 굉장히 좋다

`Directive`는 `Vue template내에서 사용할 수 있는` **`v-`접두를 가진 특별한 attribute**를 뜻한다

> `A directive's job is to reactively apply side effects to the DOM when the value of its expression changes`(번역이 어려워 그대로 작성하였음)

예를 들어보자면 

```html
<!-- render설정을 할 수도 있고 -->
// If "seen" variable is false then this p tag is not rendered
<p v-if="seen">Now you see me</p> 

<!-- 이벤트 핸들러로도 사용 가능하다  -->
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

`Directive`는 또한 수정자(modifier)를 지원한다
이는 일반적인일을 일반적인 디렉티브로 행함에 있어서 훨씬 개발자 친화적이다

아래 예시와 같이 `v-on` 디렉티브에 대해서 많은 수정자들이 있다

```html
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

...and more!
```

이와같은 일을 `React`에서 하려면 매번 helper 함수를 만들거나 custom 컴포넌트를 생성해야 한다  
나쁘진 않지만, `Directive`에 비해서 깔끔한 느낌은 아니다  

`React`에서 과연 다음과 같은 코드가 Babel JSX에서 해석되도록 만들었다고 치자

```html
<form onSubmit.prevent={onSubmit} />
```

이 코드는 다음과 같이 번역될 것이다

```javascript
React.createElement(form, { onSubmit: preventWrapper(onSubmit) });
```

하지만, 이는 `React`의 철학에 어긋난다.  

 그럼에도 불구하고 원저는 이런 형식이 훨씬 생산성 있다고 생각하며, 이러한 기능들은 `Vue modifier`에서 더 잘 제공된다.

```html
<!-- only call `submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />

<input @keyup.page-down="onPageDown" />
```

이렇게 말이다!

------

## [8.](#목차) Form Input Bindings

`v-model`디렉티브는 `form input element`에 데이터를 바인딩 할 때 신기한 특징이 있다

공식문서에서는, v-model 내부적으로 각각 다른 `input element`에 대해서 개별적인 속성과 개별 이벤트를 내보낸다고 설명한다

 | input element | attribute | event |
 | --- | --- | --- |
 | text<br>textarea | value | input |
 | checkboxes<br> radiobuttons | checked | change |
 | select fields | value | change |

이 기능이 좋은점은, 데이터 동기화에 신경 쓸 필요가 없고, 데이터가 처리가 된다는 점이다

이제 이 바인딩 기능을 `React`와 비교해보자

```v
// Input
////////

// React
<input type="input" value={message} onChange={onChange} />

// Vue.js
<input type="input" v-model="message" />

// Checkboxes and Radiobuttons
////////

// React
<input type="checkbox" checked={message != null} onChange={onChange} />

// Vue.js
<input type="checkbox" v-model="message" />

// Select
////////

// React
<select value={message} onChange={onChange}>
	<option>A</option>
</select>

// Vue.js
<select v-model="message">
	<option>A</option>
</select>
```

위 코드를 보면 패턴이 있다.
 * `React`는 데이터가 실제로 어떻게 세팅되는지 그리고 어떻게 변하는지에 대해서 학습하는 것을 요구한다. 
 * `Vue`는 이런 것들에 대해 추상적으로 제공하여, 이런 것들에 대해서 고려하지 않아도 되게 해준다.

------

## [9.](#목차) Custom Directives

좋은 프레임워크에 항상 있듯이 `vue`에서도 직접 디렉티브를 커스터마이징 하여 사용할 수 있다

`Vue`에서는 "코드 재사용성과 추상화의 기본 양식은 컴포넌트" 라고 설명한다
하지만, 다음 코드는 사용자지정 디렉티브가 더 나을 때가 있다는 좋은 예시이다

```v
const app = Vue.createApp({})
// Register a global custom directive called `v-focus`
app.directive('focus', {
  // When the bound element is mounted into the DOM...
  mounted(el) {
    // Focus the element
    el.focus()
  }
})

<input v-focus />
```

위의 `v-focus`디렉티브는 입력 element에 자동으로 `focus`상태를 부여한다
`React`에서는 위의 작업을 위해서 커스텀 컴포넌트를 작성해야 하는데, 너무 비효율 적이다

> **생각해볼 사항**  
> `React`에서 효율적으로 구현한 코드가 있을텐데 찾아보자(아직 안찾아봄)

------

## [10.](#목차) Written in TypeScript

최근에 `Vue`는 **`Typescript`**로 처음부터 다시 제작되었다  
원저는 프레임워크의 `Typescript`지원이 최고 수준임을 암시한다고 한다

> **생각해볼 사항**  
> 아직 `Typescript`에 대해서 많이 고려해보지 않아 `React`와 어떤점에서 차이가 있는지 알 수 없다

------

## [11.](#목차) Closing Thoughts

아래 글은 원저의 정리글이기 때문에 원문을 그대로 들고 옴

[영상보러가기](https://youtu.be/RFlQ8HP8Tr4)(이 글 원저가 만든 Vue가 더 좋은이유에 대한 영상)

After all that am I going to abandon React and start using Vue.js exclusively? No. I still very much enjoy the "library-ness" of React and frankly I'm already very proficient at writing React applications.

However I would love to see React grab some inspiration from Vue.js and incorporate some of these great ideas into React. If I had to choose just one from this list it's absolutely the style guide. I would love to see React have an officially supported and maintained style guide.

Hopefully I've opened your eyes to some things that you didn't know Vue.js did! I was certainly surprised to find myself really enjoying the way Vue.js did things!

(결국 React를 포기하고 Vue를 단독으로 사용할 것인가? 아니다, 난 여전히 React의 라이브러리성을 좋아하며, 난 이미 리액트로 어플리케이션을 만드는데 익숙합니다

하지만, React가 Vue로부터 영감을 얻고, 위에서 설명한 좋은 아이디어들을 수용해서 React에 통합하는 것을 보고 싶습니다. 위 목록중 하나를 선택한다면 무조건 스타일 가이드 입니다. React에서 지원되는 공식적인 스타일가이드를 보고 싶습니다.

Vue가 했던 일들 중에 몰랐던 것들에 대해서 눈을 떳으면 좋겠습니다. 난 스스로가 Vue가 보여주는 것들을 즐기고 있는게 놀랍습니다.)
