import React from 'react'

function MultiplicationTable(){
  //구구단 생성
  const generateDate = ()=>{
    const data = []; //구구단 담을 배열
    for(let i = 1; i <= 9; i++){
      const row = [];
      for(let j = 1; j <=9; j++){
        row.push(i*j);
      }
      data.push(row);
    }
    return data;
  }

  const tableData = generateDate(); //DOM을 리턴하여 렌더링

  return (
    <>
  <table cellPadding="5" cellSpacing="0">
    <thead>
      <tr>
        <th></th>
        {Array.from({length:9}, (_, index) => (
          <th key={index + 1}>{index+1}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableData.map((row, rowIdx) => (
        <tr key={rowIdx + 1} className={rowIdx % 2 == 0 ? 'whiteBg' : 'grayBg'} >
          <td>{rowIdx + 1}</td>
          {row.map((cell, cellIdx) => (
            <td key={cellIdx}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
    </>
  )
}

export default MultiplicationTable;
