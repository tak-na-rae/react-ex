import react, { useState } from 'react';
import styled from 'styled-components';

const StyleComponents = ()=>{
  const [color, setColor] = useState("#ffa");
  const [fontColor, setFontColor] = useState("#999");

  const Div = styled.div`
    padding: 40px;
    margin: 40px;
    background-color: ${color};
    ${({ fontColor }) => fontColor};
    border: 1px solid #eee;
    box-shadow: 5px 5px 5px #eee;
    display: inline-block;
  `;

  const H1 = styled.h1`
    padding: 16px;
    margin: 16px 0;
    font-size: 16px;
    background-color: rgba(0,189,93,.2);
    border-radius: 4px;
  `;

  const Select1 = styled.select`
    width: 160px;
    height: 40px;
    padding: 0 16px;
    font-size: 12px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    outline: none;
  `;

  const Input1 = styled.input`
    width: 160px;
    height: 40px;
    padding: 0 16px;
    margin: 16px 0;
    font-size: 12px;
    font-weight: 400;
    border: 3px solid #e2e2e2;
    border-radius: 4px;
    outline: none;
    display: block;
    &:focus {
      border-color: #ccf2df;
    }
  `;

  const P1 = styled.p`
    color: ${({ fontColor }) => fontColor};  {/* fontColor props로 받아서 스타일 적용 */}
  `;

  return(
    <>
      <div className="box">
        <h1>StyleComponents</h1>
        <H1>h1 지정</H1>
        <Select1>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Select1>
        <Input1/>
      </div>
      <div>
        <P1 fontColor={fontColor}>sakldjaskldjaslkdasdasd</P1>
        <select value={fontColor} onChange={e => setFontColor(e.target.value)}>
          <option value="#000">Black</option>
          <option value="#f00">Red</option>
          <option value="#0f0">Green</option>
          <option value="#00f">Blue</option>
        </select>
      </div>
    </>
  )
}

export default StyleComponents;