import {useState} from 'react';
import CounterA from './CounterA';
import CounterB from './CounterB';

const GroupComponent = () => {
  console.log('GroupComponent호출')
  const [value,setValue] = useState(0);

  return (
    <>
      <div className="box">
        <h1>GroupComponent</h1>
        <button onClick={()=>{ setValue(value + 1) }}>{value}</button>

        <CounterA/>
        <CounterB/>
      </div>
    </>
  )
}

export default GroupComponent;
