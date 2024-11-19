import './List.css';
import {useState} from 'react';
import Todoitem from './Todoitem';

const List = ( {todos, onUpdate, onDelete} ) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e)=>{
    setSearch(e.target.value);
  }
  const getFilteredData = ()=>{
    if(search == ""){
      return todos;
    }
    //인풋 텍스트 필터 노출
    return todos.filter((todo)=>
      todo.content.toLowerCase() //소문자,대문자 상관없이 매치
      .includes(search.toLowerCase()) ); //includes(true/fasle)
  }

  const filteredTodos = getFilteredData();

  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <input type="text" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
      <div className="todos">
        {filteredTodos.map((todo)=>{
          return <Todoitem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
        })}
      </div>
    </div>
  )
}

export default List;