import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  
  useEffect(()=>{ console.log('useEffect#1', count1) }) //누를때마다 호출
  //useEffect(()=>{ console.log('useEffect#1', count1) },[]) //맨처음에만 호출
  useEffect(()=>{ console.log('useEffect#2', count2) },[count2]) //count2값이 바뀔때마다 호출

  useEffect(()=>{
    console.log("mount");
    return () => console.log("unmount");
  },[])
  
  return (
    <>
      <div className="box">
        <h1>App - Counter</h1>
        <ul>
          <li>
            <span>{count1}</span>
            <button onClick={ e => setcount1(count1 + 1) }>++</button>
          </li>
          <li>
            <span>{count2}</span>
            <button onClick={e => setcount2(count2 + 1)}>++</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Counter;