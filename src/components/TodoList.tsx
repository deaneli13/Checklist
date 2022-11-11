import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='container'>
      <div className='todos pending'>
        <span className="todos__heading"> Pending</span>
        {
          
          todos.map((todo) => (
            <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}/>
          ))
        }
      </div>
      <div className='todos active'>
      <span className="todos__heading"> In Progress</span>
        {
          todos.map((todo) =>  (
            <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}/>
          ))
        }
      </div>
      <div className='todos finished'>
      <span className="todos__heading"> Completed Tasks</span>
        {
          todos.map((todo) => (
            <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}/>
          ))
        }
      </div>
    </div>
  )
}

