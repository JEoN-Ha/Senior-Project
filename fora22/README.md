# React 시작하기 Hello world
## Node.js 설치

[Node.js 공식사이트](https://nodejs.org/en/download/)에 접속한다. 접속 후 자신의 운영체제에 맞는 버전을 선택하여 다운로드 후 설치한다.
다 default로 Next를 누르기만 하면 된다.
설치 후 cmd 창을 열어 아래 명령어로 확인한다.
```node.js
npm -v

node -v
```
버전 숫자가 나오면 무사히 설치 완료.
## yarn 설치
- yarn은 npm 문제점을 개선한 패키지 매니저로, 패키지를 훨씬 빨리 설치할 수 있다.
  - 여기서 npm은 node.js의 패키지 매니저로 Python의 pip를 생각하면 된다.
- yarn 은 [사이트](https://classic.yarnpkg.com/en/docs/install/#windows-stable)에서 설치해도 되고 npm을 통해 설치해도 된다.
- 명령어는 `npm install --global yarn`
- 설치 확인 : yarn -v

## create-react-app 설치
React 프로젝트를 생성할 때 편리하게 해주는 도구인 `create-react-app`을 설치한다.

cmd를 실행하고 아래 명령어를 입력한다.
- `npm install -g create-react-app`
- yarn을 통해 설치할 수도 있다.
  - 명령어 : `yarn global add create-react-app`
- npm은 지역적, yarn은 전역적으로 사용 가능하다고 한다.
- **모든 디렉토리에서 `create-react-app`을 사용해야하므로 yarn을 권장한다고 한다.**

## 프로젝트 생성
- cmd 창에서 프로젝트를 만들 폴더로 이동한다.
- `create-react-app hello_world` 명령어를 치면 현재 디렉토리 아래에 `hello_world` 폴더가 생가고 필요한 라이브러리들이 준비된다.
- 그런데 Windows의 경우 npx를 이용해야지 정상적으로 생성된다고 하니 npx 명령어를 쓰자(위 명령어는 터미널 환경 같다).
  - `npx create-react-app hello_world`
  - 폴더 생성 후 프로젝트 폴더로 이동한다 : `cd hello_world`
  - yarn으로 프로젝트를 시작해본다 : `yarn start`
- cmd창에 `Success`가 뜨면 성공!
- Local 링크를 복붙하여 들어가보면 기본페이지 하나가 뜬다.
- 신기하게도 `.gitignore` 파일이 이미 있다.
  - `.gitignore` 파일이 있으면 변경내역이 19개다(프로젝트 생성 시).
  - `.gitignore` 파일을 지워봤더니 약 38000개의 파일 변경내역이 떴다..
  - 그래도 혹시몰라 [gitignore.io](https://www.toptal.com/developers/gitignore) 사이트에서 `Node` , `React`, `ReactNative`로 내용 생성 후 `.gitignore` 파일에 추가했다.
  - 총 18개의 변경내역만 git에 기록됐다.