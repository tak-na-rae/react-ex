import React, { useEffect, useState } from 'react'
import './App.css'

function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <>
      <div className="Clock">
        <div className="item">
          <h1>Clock</h1>
          <p>{ time.toLocaleTimeString() }</p>
        </div>
      </div>
    </>
  )
}

export default Clock;