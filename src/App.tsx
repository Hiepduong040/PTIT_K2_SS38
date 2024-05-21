import React from 'react'
import UseReducer from './components/UseReducer'
import UseReducerAdvance from './components/UseReducerAdvance'
import TodoList from './components/ToDolist'
import B1 from './components/b1/B1';
import B2 from './components/b2/B2';
import B3 from './components/b3/B3';
import B4 from './components/b4/B4';
import B5 from './components/b5/B5';
import Counter from './components/b6/Counter';
import LoginForm from './components/b6/LoginForm';
export default function App() {
  return (
    <div>App
      <UseReducer></UseReducer>
      <UseReducerAdvance></UseReducerAdvance>
      <TodoList></TodoList>
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <LoginForm></LoginForm>
    </div>
  )
}
