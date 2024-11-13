import './App.css';
import {useState} from 'react';
import GroupComponent from './GroupComponent'

function App() {
  console.log('App호출')
  const [value,setValue] = useState(0);

  return (
    <>
      
      <div className="App">
        <div className="box">
          <h1>APP</h1>
          <button onClick={()=>{ setValue(value + 1) }}>{value}</button>
          <GroupComponent/>
        </div>
      </div>

    </>
  );
}

export default App;
