# 🖼️ UI-MUSEUM

> 이 곳은 리액트 컴포넌트를 전시하는 박물관입니다.
>
> 방문해 주셔서 감사합니다. 
>   
> 질문과 피드백은 언제나 환영입니다. 🙂

<br>

## 📢 프로젝트 동기
> 리액트로 개발하면서 직접 만들게 된 컴포넌트들을 해당 프로젝트에서만 사용하기에는 아쉬운 경우가 있어 이를 공유(전시? 자랑?)하고 싶어 시작하게 되었습니다.

<br>

## 🖱️ 데모 페이지
- [바로가기](https://tommya98.github.io/UI-MUSEUM/)

<br>

## 📚 블로그 글
- [[UI-MUSEUM] 수직 무한 롤링 배너 만들기 (Marquee)](https://seokhun.dev/post2/)

<br>

## 🛠️ 기술 스택
<div style="display:flex; gap:5px">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-D36AC2?style=for-the-badge&logo=emotion&logoColor=white">
</div>

<br>

## 🏢 프로젝트 구조
```
UI-MUSEUM
 ┣ src
 ┃ ┣ assets
 ┃ ┃ ┣ github-mark.svg
 ┃ ┃ ┣ moon.svg
 ┃ ┃ ┗ sun.svg
 ┃ ┣ components
 ┃ ┃ ┣ Footer
 ┃ ┃ ┣ Header
 ┃ ┃ ┣ InputRange
 ┃ ┃ ┣ Main
 ┃ ┃ ┣ Modal
 ┃ ┃ ┣ ModalCard
 ┃ ┃ ┣ Showcase
 ┃ ┃ ┣ ShowcaseList
 ┃ ┃ ┗ ThemeToggle
 ┃ ┣ exhibits
 ┃ ┃ ┣ DontClickButton
 ┃ ┃ ┣ LikeButton
 ┃ ┃ ┣ 점점 추가할 예정
 ┃ ┃ ┣ MyComponent
 ┃ ┃ ┗ index.ts
 ┃ ┣ Layout
 ┃ ┣ stores
 ┃ ┃ ┣ ModalStateSlice
 ┃ ┃ ┣ WindowSizeSlice
 ┃ ┃ ┗ index.ts
 ┃ ┣ styles
 ┃ ┃ ┣ GlobalStyles
 ┃ ┃ ┣ ResetStyles
 ┃ ┃ ┗ theme
 ┃ ┣ utils
 ┃ ┃ ┣ childEventListener.ts
 ┃ ┃ ┣ debounce.ts
 ┃ ┃ ┣ getComponentInfo.ts
 ┃ ┃ ┣ resizeArray.ts
 ┃ ┃ ┣ selectExhibits.ts
 ┃ ┃ ┗ shuffleArray.ts
 ┃ ┣ App.tsx
 ┃ ┣ main.tsx
 ┃ ┗ vite-env.d.ts
 ┣ .gitignore
 ┣ index.html
 ┣ LICENSE
 ┣ package.json
 ┣ README.md
 ┣ tsconfig.json
 ┣ tsconfig.node.json
 ┣ vite.config.ts
 ┗ yarn.lock
```

<br>

## 📄 라이센스
이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](https://github.com/tommya98/UI-MUSEUM/blob/main/LICENSE) 파일을 참조해주세요.
