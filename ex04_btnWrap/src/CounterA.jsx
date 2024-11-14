import {useState} from 'react';

const CounterA = () => {
  console.log('CounterA호출')
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="box">
        <h1>CounterA</h1>
        <button onClick={()=> setValue(value + 1)}>{value}</button>
      </div>
    </>
  )
}

export default CounterA;