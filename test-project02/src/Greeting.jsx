import { useState } from 'react';

const Greeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("OFF") ;
  return (
    <>
     {/* 문제 : 조건부 렌더링
        Greeting  컴포넌트를 작성하여, isLoggedIn 이라는 속성을 받아서 사용자가 로그인한 상태
        일 때는 "Welcome back!"을, 그렇지 않을 때는 "Please log in"을 화면에 표시하도록 하
        세요. */}
      
      {isLoggedIn == "ON" ? (
        <h1 style={{ color:"blue" }}>로그인 상태 Welcome back!</h1>
      ) : (
        <h1 style={{ color:"#222" }}>로그아웃 상태 Please loginㅠ</h1>
      )}
      <button onClick={() => { setIsLoggedIn(isLoggedIn == "ON" ? "OFF" : "ON"); }}>
        {isLoggedIn == "ON" ? "로그아웃" : "로그인"}
      </button>
    </>
  );
};

export default Greeting;