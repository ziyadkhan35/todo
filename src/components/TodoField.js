import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoField = () => {
  const dispatch=useDispatch();
  const [value,setValue]=useState("");
  return (
    <div className="row mt-4">
        <input value={value} onChange={(e)=>setValue(e.target.value)} className="todo_input col-sm-9 border border-1 rounded-3 ms-sm-2 mb-2 mb-sm-0" type="text" placeholder="I must do..."/>
        <button onClick={()=>dispatch(addTodo({name:value}))} className="todo_add_button btn col-sm-2 border border-1 rounded-3 ms-sm-3">ADD</button>
    </div>
  )
}

export default TodoField