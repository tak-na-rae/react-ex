import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(){
  const msg="전달전달전달전달전달전달";
  return(
    <>
      <ChildComponent message={msg}/>
    </>
  )
}


export default ParentComponent;