import React, { useState, useEffect } from 'react';

//1초마다 1씩 증가되는 타이머 구현

const TimerWithCleanup = () => {
  const [count, setCount] = useState(0);

  //=== type1
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount(count + 1);
    },1000) //1초마다 실행
    return ()=> clearInterval(timer);
  })

  //=== type2
  // useEffect(()=>{
  //   const timer = setInterval(()=>{
  //     setCount(prevCount => prevCount+1);
  //   },1000) //1초마다 실행
  // },[])

  return (
    <>
      <p className="tit">+1 Count</p>
      <div className="result">{count}s</div>
    </>
  )
}

export default TimerWithCleanup;