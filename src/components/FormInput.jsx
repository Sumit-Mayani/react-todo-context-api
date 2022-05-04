import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext} from './DataProvider';


export default function FormInput() {

  const [todos, setTodos] = useContext(DataContext);
  const [todoname, setTodoName] = useState('');
  const todoInput = useRef();

  // add state
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoname, complete: false }]);
    setTodoName("");
    todoInput.current.focus();
  }

  useEffect(() =>{
    todoInput.current.focus();
  },[])

  return (
    <form autoComplete='off' onSubmit={addTodo}>
      <input type="text" name='todos' id='todos' ref={todoInput} required placeholder='what needs to be done?' value={todoname}
        onChange={e => setTodoName(e.target.value.toLowerCase())} />
      <button type='submit'>create</button>
    </form>
  )
}
