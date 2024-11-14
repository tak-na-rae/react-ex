import React, { useState }  from 'react'

const Select1 = () => {
  const [color, setColor] = useState("yellow");
	const divClassName = "App " + color;

  return (
    <>
      <div className={divClassName}>
        <h1>Color</h1>
        <select onChange={e=>setColor(e.target.value)} value={color}>
          <option>yellow</option>
          <option>green</option>
          <option>blue</option>
          <option>red</option>
        </select>
      </div>
    </>
  )
}

export default Select1;
