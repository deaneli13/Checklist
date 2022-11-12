import React, { useState } from 'react';
import { JsxAttribute } from 'typescript';
import './App.css';
import InputField from './components/InputField';
import {  Mission_Stat, Todo } from './components/model';
import {TodoList} from './components/TodoList';


const App:React.FC = () =>  {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  

//Adding a new task
  const handleAdd = (e: React.FormEvent) => { 
    e.preventDefault();//unrefresh
    if(todo){
      setTodos([...todos,{ id: Date.now(),todo:todo,isDone:Mission_Stat.WAITING }]);
      setTodo("");//empty the grid after submitting a mission
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Checklist</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
     <TodoList pendings={todos} setPendings={setTodos} actives={[]} setActives={setTodos} done={[]} setDone={setTodos} />
    </div>
  );
}

export default App;
