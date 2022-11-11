import React, { useRef, useState,useEffect, useReducer } from 'react'
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
/*  type Actions = 
{type:'add',payload:string}|{type:'remove',payload:number}|{type:'inProgress',payload:number}|{type:'done',payload:number}
const TodoReducer = (state: Todo[],action:Actions) => {
    switch (key) {
        case "add":
            return [
                ...state,
                {id:Date.now(), todo: action.payload, isDone: Mission_Stat.WAITING},
            ];
            break;
            case "remove":
                return state.filter((todo) => todo.id ! == action.payload);
            break;
            case "inProgress":
                state.map
            break;
            case "done":
            
            break;
    
        default:
            break;
    }
}
const ReduceF = () => {
    const [state, dispatch] = useReducer(first, second, third)
}
  */

const SingleTodo = ({todo,setTodos,todos}:Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=> todo.id===id?{...todo,isDone: todo.isDone=Mission_Stat.FINISHED}:todo))//changing the isDone to FNISHED on click
    };

    const handleInProgress = (id: number) => {
        setTodos(todos.map((todo)=> todo.id===id?{...todo,isDone: todo.isDone=Mission_Stat.IN_PROGRESS}:todo))//changing the isDone to IN_PROGRESS on click
    };
    const handleDelete = (id: number) => {//filters the dleted task
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleEdit = (e:React.FormEvent,id: number) => {
        e.preventDefault();//preventing the screen to refresh
        setTodos(
            todos.map ((todo) => (todo.id ===id?{...todo,todo:editTodo} : todo )));
            setEdit(false);
    };
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
    
  return (
  <form className="todos__single" onSubmit={(e)=>handleEdit(e,todo.id)}>
    {
        edit ? (
            <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className = 'todos__single--text'/>
    ):
        todo.isDone === Mission_Stat.FINISHED ? (
            <s className="todos__single--text">{todo.todo}</s>
    ) : (
        <span className="todos__single--text">{todo.todo}</span>
    )}
    <div>
        <span className="icon" onClick={() => {
            if(!edit && todo.isDone !== Mission_Stat.FINISHED){
                setEdit(!edit);
            }
        }
        }>
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
  </form>
  )
  

}

export default SingleTodo

function setTodos(arg0: any) {
    throw new Error('Function not implemented.')
}

