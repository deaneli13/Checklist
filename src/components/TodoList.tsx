import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props{
    pendings:Todo[];
    setPendings:React.Dispatch<React.SetStateAction<Todo[]>>;
    actives:Todo[];
    setActives:React.Dispatch<React.SetStateAction<Todo[]>>;
    done:Todo[];
    setDone:React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList:React.FC<Props> = ({pendings,setPendings,actives,setActives,done,setDone}) => {
  return (
    <div className='container'>
      <div className='todos pending'>
        <span className="todos__heading"> Pending</span>
        {
          
          pendings.map((todo) => (
            <SingleTodo
            todo={todo}
            todos={pendings}
            key={todo.id}
            setTodos={setPendings}/>
          ))
        }
      </div>
      <div className='todos active'>
      <span className="todos__heading"> In Progress</span>
        {
          actives.map((todo) =>  (
            <SingleTodo
            todo={todo}
            todos={actives}
            key={todo.id}
            setTodos={setActives}/>
          ))
        }
      </div>
      <div className='todos finished'>
      <span className="todos__heading"> Completed Tasks</span>
        {
          done.map((todo) => (
            <SingleTodo
            todo={todo}
            todos={done}
            key={todo.id}
            setTodos={setDone}/>
          ))
        }
      </div>
    </div>
  )
}

