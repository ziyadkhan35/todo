import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, doneTodo } from '../redux/todoSlice';

const Todo = () => {
  const todos=useSelector((state)=>state.todos);
  const dispatch=useDispatch();

  return (
    <div className="row ">
        {
            todos.length>0?
            <ul className="todos mt-2">
                {todos.map((todo)=>(
                    <li key={todo.id} className={todo.status?"todos_item todos-item-success list-unstyled d-flex justify-content-between mb-2 mt-4 rounded-pill":"todos_item todos-item-danger list-unstyled d-flex justify-content-between mb-2 mt-4 rounded-pill"}>
                        <span className={todo.status?"todo_name text-uppercase text-decoration-line-through ms-3":"todo_name text-uppercase ms-3"}>{todo.name}</span>
                        <div className="caret todo_buttons d-flex justify-content-between align-items-center">
                            <button onClick={()=>dispatch(deleteTodo({id:todo.id}))} className="todo_buttons border-0 bg-transparent">❌</button>
                            <button onClick={()=>dispatch(doneTodo({id:todo.id}))} disabled={todo.status} className="todo_buttons border-0 bg-transparent">✅</button>
                        </div>
                    </li>
                ))}
            </ul>:null
        }
    </div>
  )
}

export default Todo