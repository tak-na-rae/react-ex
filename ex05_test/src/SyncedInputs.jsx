import React, { useState, useEffect } from 'react';

const SyncedInputs = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  useEffect(()=>{
    console.log(`input1 : ${input1}`);
    console.log(`input2 : ${input2}`);
  }, [input1, input2])

  return (
    <>
      <p className="tit">Set Input</p>

      <input type="text" value={input1} placeholder="Input1"
         onChange={(e)=>{ setInput1(e.target.value); setInput2(e.target.value); }}/>
      <input type="text" value={input2} placeholder="Input2"
        onChange={(e)=>{ setInput1(e.target.value); setInput2(e.target.value); }}/>

      <div className="result">{input1} , {input2}</div>
    </>
  )
}

export default SyncedInputs;