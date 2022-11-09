import React, { useState } from 'react'
import {Mission_Stat, Todo} from './model'
import {AiOutlineEdit,AiOutlineDelete,AiOutlineCheckCircle} from 'react-icons/ai' 
import {MdOutlineNotStarted} from 'react-icons/md'
import './styles.css'
import { TodoList } from './TodoList'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,setTodos,todos}:Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=> todo.id===id?{...todo,isDone: todo.isDone=Mission_Stat.FINISHED}:todo))//changing the isDone to FNISHED on click
    }

    const handleInProgress = (id: number) => {
        setTodos(todos.map((todo)=> todo.id===id?{...todo,isDone: todo.isDone=Mission_Stat.IN_PROGRESS}:todo))//changing the isDone to IN_PROGRESS on click
    }
    const handleDelete = (id: number) => {//filters the dleted task
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    
  return <form className="todos_single">
    <span className="todos_single--text">{todo.todo}</span>
    <div>
        <span className="icon">
            <AiOutlineEdit/>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiOutlineDelete/>
        </span>
        <span className="icon" onClick={() => handleInProgress(todo.id)}>
            <MdOutlineNotStarted/>
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
            <AiOutlineCheckCircle/>
        </span>
    </div>
  </form>;

}

export default SingleTodo

function setTodos(arg0: any) {
    throw new Error('Function not implemented.')
}

