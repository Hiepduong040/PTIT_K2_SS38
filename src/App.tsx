import React from 'react'
import UseReducer from './components/UseReducer'
import UseReducerAdvance from './components/UseReducerAdvance'
import TodoList from './components/ToDolist'

export default function App() {
  return (
    <div>App
      <UseReducer></UseReducer>
      <UseReducerAdvance></UseReducerAdvance>
      <TodoList></TodoList>
    </div>
  )
}
