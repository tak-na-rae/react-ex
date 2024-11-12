import React from 'react';
import './App.css';
import JSXtest from './component/JSXtest';
import Style from './component/Style';

function App() {

  return ( 
    <>
      <JSXtest/>
      <Style/>
    </>
  )
}

export default App;

// import React from 'react';
// import './App.css';

// function App() {
//   let persons = [
//     {name: "홍길동", age: 16},
//     {name: "임꺽정", age: 19},
//     {name: "전우치", age: 20},
//   ];

//   let tr = <tr><td>이름</td><td>나이</td></tr>;
//   let trList = [tr];

//   for (let el of persons) {
//     tr = <tr><td>{el.name}</td><td>{el.age}</td></tr>;
//     trList.push(tr);
//   }

//   let tbody = <tbody>{trList}</tbody>;
//   let table = <table>{tbody}</table>;

//   return table;
// }

// export default App;