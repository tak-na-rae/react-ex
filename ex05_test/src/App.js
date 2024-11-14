import './App.css';
import Counter from './Counter';
import Timer from './Timer';
import Lifecycle from './Lifecycle';
import TimerWithCleanup from './TimerWithCleanup';
import SyncedInputs from './SyncedInputs';

import { useState } from 'react';


function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="app">

        <div className="box">
          <h1>TEST1</h1>
          <Timer/>
        </div>

        <div className="box">
          <h1>TEST2</h1>
          {/* <Lifecycle/> */}
          {visible ? <Lifecycle/> : null}
        </div>

        <div className="box">
          <h1>TEST3</h1>
          <TimerWithCleanup/>
        </div>

        <div className="box">
          <h1>TEST4</h1>
          <SyncedInputs/>
        </div>

        <div className="box">
          <h1>App <b>( {visible.toString()} )</b></h1>
          <input type="checkbox" checked={visible} value={visible}
                  onChange={e => setVisible(e.target.checked)}
                  style={{ width:"24px", height:"24px", cursor:"pointer" }}/>
        </div>
        {visible ? <Counter/> : null} {/* <Counter/> */}

      </div>

    </>
  );
}

export default App;
