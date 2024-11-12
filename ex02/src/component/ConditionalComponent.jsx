import './ConditionalComponent.css';

function ConditionalComponent({ isActive }){
  const className = isActive ? "active" : "inactive";
  
  return(
    <>
      <div className={className}>Status</div>
    </>
  )
}

export default ConditionalComponent;