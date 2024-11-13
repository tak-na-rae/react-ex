import React from 'react';
import { useEffect } from 'react';

//1. 컴포넌트가 처음 렌더링될 때만 실행
//2. 컴포넌트가 처음 렌더링될 때만 한 번만 console.log로 "Component Mounted"를 출력
// 컴포넌트가 언마운트될 때 "Component Unmounted"를 출력

const Lifecycle = () => {

  // === useEffect사용시 (원하는 시점에 js 응용가능)
  useEffect(()=>{
    console.log('Component Mounted!!'); //처음 렌더링 될때만
    return ()=> console.log('component Unmounted!!'); //언마운트 될때만
  }, [])
  
  return (
    <>
      <p className="tit">Lifecycle</p>
      <div className="result">console.log</div>
    </>
  );
};

export default Lifecycle;