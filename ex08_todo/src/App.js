import './App.css';
import { useState, useRef } from 'react';
import Header from './components/Header'
import Editor from './components/Editor';
import List from './components/List';

function App() {
  const mockData = [
    { id:0, isDone:false, content:"React 공부", date:new Date().getTime() },
    { id:1, isDone:false, content:"빨래하기", date:new Date().getTime() },
    { id:2, isDone:false, content:"타자연습", date:new Date().getTime() },
  ]
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => { //list
    const newTodo = {
      id:idRef.current++,
      isDone:false,
      content:content,
      date:new Date().getTime(),
    }
    setTodos([newTodo,...todos]);
  }

  const onUpdate = (targetId)=>{ //chkbox
    //todos state의 값들 중에 targetId와 일치하는 id를 갖는 아이템의 isDone 변경\
    setTodos(todos.map((todo)=>
      todo.id == targetId ? {...todo, isDone: !todo.isDone} : todo
    ));
  }

  const onDelete = (targetId)=>{
    //인수 : todos 배열에서 targetId와 일치하는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=> todo.id !== targetId ));
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App;