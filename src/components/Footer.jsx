import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider';

export default function Footer() {

  // check all state
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handlecheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })

    setTodos(newTodos);
    setCheckAll(!checkAll)
  }

  // filter state
  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)
  }


  // delete button
  const deleteTodo = () => {

    setTodos(newTodosComplete())
    setCheckAll(false)
  }

  return (

    <>
      {
        todos.length === 0 ? <h2>Congratulations! Nothing to do</h2>
        :
        <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id='all' onChange={handlecheckAll} checked={checkAll}/>
              all
          </label>
            <p>you have {newTodosComplete().length} to do</p>
            <button id='delete' onClick={deleteTodo}>delete</button>
        </div>
      }
    </>

  )
}
