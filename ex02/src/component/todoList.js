const TodoList = () => {
  const todos = ["청소", "강아지산책", "심부름", "운동"];

  return (
    <ul>
      {todos.map((el, idx) => {
        return <li key={idx}>{el}</li>;
      })}
    </ul>
  );
};

export default TodoList;