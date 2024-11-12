import React from 'react'


const Style = () => {
  return (
    <div>Style</div>
  )
}

function Styletest(){
  const ss = {color:'skyblue', fontSize:"18px"}

  return(
    <div>
      <p className="blue">하이</p>
      <p className="green">안녕</p>
      <p style={{color:'red', fontSize:'22px', backgroundColor:'pink'}}>인라인 스타일</p>
      <p style={ss}>변수 스타일</p>
    </div>
  )
}


export default Styletest; // 기본 내보내기
// export default Style; // 기본 내보내기
// export { Styletest }; // 명명된 내보내기