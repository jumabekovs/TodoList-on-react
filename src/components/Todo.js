import React, { useState } from 'react'
// import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'


function Todo({
  todo,
  completeTodo,
  removeTodo,
  updateTodo
}) {

  const [isEdit, setIsEdit] = useState(false);

  const submitUpdate = value => {
    updateTodo({
      ...value,
      id: todo.id,
    });
    setIsEdit(false);
  }

  if (isEdit) {
    return <TodoForm defaultValue={todo.text} onSubmit={submitUpdate} />
  }

  return (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div key={todo.id} onClick={completeTodo}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={removeTodo}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setIsEdit(false)}
          className='edit-icon'
        />
      </div>
    </div>
  )
}

export default Todo
