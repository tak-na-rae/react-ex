import React from 'react'; //필수import
import ReactDOM from 'react-dom/client'; //필수import

import './index.css'; //css적용
import App from './App';  //App.js에 구현된 컴포넌트를 import
import reportWebVitals from './reportWebVitals'; //불필요(앱의 성능을 측정하기 위한 패키지)
                             

//<div id="root">에 컴포넌트 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
