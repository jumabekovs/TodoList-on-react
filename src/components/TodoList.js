import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {

  const [todos, setTodos] = useState([])

  const addTodo = ({ id, text }) => {
    const todo = {
      id,
      text: text.trim(),
      isComplete: false,
    }
    if (!todo.text) {   // regex checks the spaces
      return;
    }
    const newTodos = [todo, ...todos]  // adding cutrent todo to the list
    setTodos(newTodos)
  }

  const updateTodo = ({
    id,
    text,
    isComplete
  }) => {
    const newValue = {
      id,
      text: text.trim(),
      isComplete,
    }
    if (!newValue.text) {   // regex checks the spaces
      return;
    }
    setTodos(prev => {
      const newTodos = prev.map(item => {
        if (item.id === id) return newValue;
        return item;
      });

      return newTodos;
    })
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const completeTodo = id => {
    setTodos(prev => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo;
      });
    });
  }

  return (
    <div>
      <h1>Whats the plan for today?</h1>
      <TodoForm
        onSubmit={addTodo}
      />
      <div>
        {todos.map(item => (
          <Todo
            key={item.id}
            todo={item}
            completeTodo={() => completeTodo(item.id)}
            removeTodo={() => removeTodo(item.id)}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  )

  // return div({
  //   children: [
  //     h1({
  //       children: 'Whats the plan for today?'
  //     }),
  //     TodoForm({
  //       onSubmit: addTodo,
  //     }),
  //     Todo({
  //       todos: todos,
  //       completeTodo: completeTodo,
  //       removeTodo: removeTodo,
  //       updateTodo: updateTodo,
  //     })
  //   ]
  // })
}

export default TodoList
