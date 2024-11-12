import { useState } from 'react';

function InputComponent(){
  const [message, setMessage] = useState("hello");
  return(
    <>
      <p>{message}</p>
      <input type="text" value={message} onChange={(e)=> setMessage(e.target.value) }/>
    </>
  )
}

export default InputComponent;