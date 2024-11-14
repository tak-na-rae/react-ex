import './App.css';
import { useState } from 'react';
import InputComponent from './InputComponent';

function App() {
  const onClickHandler = ()=>{ alert('버튼(1)클릭') };
  // let count = 0;
  const [count, setCount] = useState(0);
  const increase = ()=>{ setCount(count + 1); }
  const decrease = ()=>{ setCount(count - 1); }

  const [value, setValue] = useState(true);
  const helloTag = <div id="hello">hello React</div>;
  
  const [color, setColor] = useState("red");

  const [gender, setGender] = useState("여성");

  return (
    <>
      <div className="AppCounter">
        <div>
          <p>{count}</p>
          <button onClick={decrease}>감소</button>
          <button onClick={increase}>증가</button>
        </div>
        <div>
          <button onClick={onClickHandler}>버튼1</button>
          <button onClick={()=> alert('버튼(2)클릭') }>버튼2</button>
        </div>
        <div>
          <InputComponent/>
        </div>
        <div className="chk_bx">
          <p>{value ? "true" : "false"}</p>
          <input type="checkbox" checked={value} onChange={(e) => setValue(e.target.checked)}/>
          <div>{value ? helloTag : null}</div>
        </div>
        <div id="select_bx" className={color}>
          <h1>Select</h1>
          <select onChange={(e) => setColor(e.target.value)}>
            <option>red</option>
            <option>yellow</option>
            <option>green</option>
            <option>blue</option>
          </select>
        </div>
        <div id="radio_bx">
          <h1>Radio</h1>
          <p>{gender}</p>
          <label>
            <input type="radio" name="gender" onChange={()=>setGender("여성")} checked={gender === "여성"}/><span>여성</span>
          </label>
          <label>
          <input type="radio" name="gender" onChange={()=>setGender("남성")} checked={gender === "남성"}/><span>남성</span>
          </label>
        </div>

      </div>
    </>
  );
}

export default App;