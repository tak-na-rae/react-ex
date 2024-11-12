import {useState} from 'react';

function ToggleSwitch(){
  const [isOn, setIsOn] = useState(false);
  return(
    <>
      <button onClick={()=> setIsOn(!isOn)}>{isOn ? "OFF" : "ON"}</button>
      <p>Switch {isOn ? "OFF" : "ON"}</p>
    </>
  )
}

export default ToggleSwitch;
