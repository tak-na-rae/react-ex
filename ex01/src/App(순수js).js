// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  let persons = [
    {name: "홍길동", age: 16},
    {name: "임꺽정", age: 19},
    {name: "전우치", age: 20},
  ];

  let td1 = React.createElement("td", null, "이름"); //생성,속성,자식
  let td2 = React.createElement("td", null, "나이");
  let tr = React.createElement("tr", null, td1, td2);
  let trList = [tr];

  for(let el of persons){ //persons순회해서 el에 담음
    // console.log(el)
    let td1 = React.createElement("td", null, el.name); //생성,속성,자식
    let td2 = React.createElement("td", null, el.age);
    let tr = React.createElement("tr", null, td1, td2);
    trList.push(tr);
  }
  let tbody = React.createElement("tbody", null, trList);
  let table = React.createElement("table", null, tbody);
  return table;

  console.log('App()호출'); //return밖에서
  
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>JSX를 사용한 React 컴포넌트입니다.</p>
    </div>
  );
}

    // ================================= return(App)
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.22222222
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default App;
