import React, { useState, useEffect, useRef } from 'react'

function TodoForm({
  onSubmit = ({ id, text }) => null,
  defaultValue = ""
}) {
  const [input, setInput] = useState(defaultValue)

  const inputRef = useRef(null)   // function that focuses on input 

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()  // does not allow refresh the page 
    onSubmit({
      id: Math.floor(Math.random() * 10000),  // creates object with id
      text: input,
    })
    setInput("")  // return placeholder empty
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {defaultValue ?
        (<>
          <input
            type='text'
            placeholder='Update your item'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button edit'>
            Update
          </button>
        </>)
        :
        (<>
          <input
            type='text'
            placeholder='Add todo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button'>
            Add ToDo
          </button>
        </>)
      }
    </form>
  )
}

export default TodoForm
