# React에서 TypeScript 적용해보기
- React에서 TypeScript를 적용해보기 위해 필요한 것은 어떤 것인지 적는 문서
# Setting
기본적으로 다음이 설치되있다고 가정한다.
- Node.js
- yarn
- Visual Studio Code
# create-react-app 생성
typescript로 생성하는 방법을 검색하다보면 `npx create-react-app ts_react typescript`를 사용하라고 많이 써져 있다. 하지만 프로젝트를 생성해보면 `App.js`파일로 만들어진다. 그러므로 **꼭 `npx create-react-app ts_react --template typescript`를 사용해서 확장자가 `.tsx`인지 확인하도록 하자.**

# Project 실행
`yarn start`로 Project 실행해보면 *"react-scripts 은(는) 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다"*라고 뜨면서 에러가 날 수도 있다. 그러니 `yarn add global react-scripts` 또는 `npm install -g react-sciprts`로 해결하도록 하자.

# Reference
- [create-react-app Typescript 생성 및 세팅](https://kod4284.github.io/2020/03/03/create-react-app-typescript-setting/)
- [create-react-app의 react-scripts package 살펴보기](https://velog.io/@rlaqltmxm/create-react-app-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0)
- [react-scripts 은(는) 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다](https://thespoiler.tistory.com/21)