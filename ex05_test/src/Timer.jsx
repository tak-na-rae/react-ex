import React from 'react';
import { useState, useEffect } from 'react';

//1. 카운트는 useState로 상태 관리
//2. useEffect로 현재 시간을 콘솔로 출력
// 현재 시간 = new Date().toLocaleTimeString()

const Timer = () => {
  const [count, setCount] = useState(0);
  const time = new Date().toLocaleTimeString();

  // === useEffect사용시 (원하는 시점에 js 응용가능)
  // useEffect(()=>{
  //   console.log(`${count}, ${new Date().toLocaleTimeString()}`);
  // },[count])
  
  return (
    <>
      <p className="tit">Count</p>
      <button value={count} onClick={()=>{ setCount((e)=> count + 1 ) }}>++</button>
      <div className="result">{count} , {time}</div>
    </>
  );
};

export default Timer;