import React from 'react'
import Todo from './Todo'
import TodoField from './TodoField'
import TodoHeader from './TodoHeader'

const TotalTodo = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 mt-5">
            <TodoHeader/>
            <TodoField/>
            <Todo/>
        </div>
      </div>
    </div>
  )
}

export default TotalTodo