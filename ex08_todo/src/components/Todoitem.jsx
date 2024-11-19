const Todoitem = ( {id, isDone, content, date, onUpdate, onDelete} ) => {
  const onChangeChkBox = (e)=>{
    onUpdate(id);
    e.target.classList.toggle("active")
  }

  const onClickDeleteButton = ()=>{
    onDelete(id);
  }

  return (
    <>
      <ul className="todo_item">
        <li>
          <input type="checkbox" checked={isDone} onChange={onChangeChkBox} readOnly/>
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={onClickDeleteButton}>삭제</button>
        </li>
      </ul>
    </>
  )
}

export default Todoitem;