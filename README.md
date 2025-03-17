# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

### 강의 : 실무 중심! FE 입문자를 위한 React (인프런) - React 메모장 만들기

## 메모장 요구사항

** [1단계] : 설계 및 기본 컴포넌트 구현 **

    * 왼쪽 사이드바에서는 현재 등록된 메모의 목록이, 오른쪽 메모 편집 영역에서는 제목과 내용을 수정할 수 있는 입력 폼 존재

** [2단계] : 메모 수정 및 선택 기능 구현 **

    * 사이드바에서 선택한 메모를 오른쪽 편집 영역에서 확인 및 수정 가능
    * 수정된 내용은 다른 메모로 이동하더라도 보존

** [3단계] : 메모 추가 기능 구현 **

    * 사이드바의 최하단에는 새로운 메모를 추가할 수 있는 버튼 존재
    * 새로운 메모를 추가하면 초기 제목은 "Untitled"로 설정되며, 내용은 비어져있음
    * 또한, 새로운 메모 추가 시, 해당 메모가 자동으로 선택됨

** [4단계] : 메모 삭제 기능 구현 **

    * 사이드바의 각 메모 오른쪽에는 해당 메모를 삭제할 수 있는 X 버튼 존재
    * X 버튼 클릭 시, 해당 메모는 삭제되며, 만약 해당 메모를 선택한 상태라면 가장 첫 번째 메모로 선택이 변경됨
    * 만약 모든 메모가 삭제될 시, 오른쪽 편집 영역에는 제목과 내용 입력 폼 대신, "메모가 없습니다. 새로운 메모를 생성해주세요."라는 문구를 띄움

** [5단계] : 메모 저장 기능 구현 **

    * 브라우저를 닫아도 편집한 메모가 유지됨 (localStorage)

## 메모장 컴포넌트 구조

** 컴포넌트 **

    <Left Area>
    ```
    ├── SideBar
    │   ├── SideBarHeader
    │   ├── MemoList (MemoItem)
    │   ├── SideBarFooter
    ```

    <Right Area>
    ```
    ├── MemoContainer
    │   ├── MemoTitle
    │   ├── MemoContent
    ```

** State **

    * 메모 리스트
    * 선택된 메모 번호

** 메모 데이터 포맷 **

    * 제목
    * 내용
    * 생성 시간
    * 마지막 수정 시간
