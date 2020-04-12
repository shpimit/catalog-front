## `React`로 프로젝트 만들기

### 1. CRA(Create React App) 설치하기

* NPM 명령어를 이용해서 CRA를 설치할 수 있습니다.
```shell
npm install -g create-react-app
```
### 2. React 프로젝트 생성하기
* 특정한 폴더로 이동하여 create-react-app 명령어를 이용하여 jobmp라는 폴더를 만들어 보도록 하겠습니다.
```shell
c:\Data\create-react-app jobmp
```
### 3. Social Login

* Google 로그인 [API Key 발급받기](https://console.cloud.google.com/apis/)

```shell
#$ yarn add react-google-login
#or refer to https://console.cloud.google.com/apis/
$ npm install react-google-login
```

* [KaKao 로그인](https://www.npmjs.com/package/react-kakao-login)

```shell
$ npm i -S react react-dom react-kakao-login
```

* [Facebook 로그인](https://www.npmjs.com/package/react-facebook-login)

```shell
$ yarn add react-facebook-login 
or
$ npm install react-facebook-login
```

### 4. React Router Dom(페이지 이동을 구현하기 위해)
```shell
$ npm install --save react-router-dom
```

### 5. 서버와의 통신목적의 라이브러리 axios를 설치(From React client)
```shell
npm install --save axios
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
