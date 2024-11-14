import React, { useState }  from 'react'

const Select2 = () => {
  const [color, setColor] = useState("#ffa");

  return (
    <>
      <div className="App" style={{backgroundColor: color}}>
        <h1>Color</h1>
        <select onChange={e=>setColor(e.target.value)} value={color}>
          <option value="#ffa">yellow</option>
          <option value="#dfd">green</option>
          <option value="#ccf">blue</option>
          <option value="#fdd">red</option>
        </select>
      </div>
    </>
  )
}

export default Select2;
