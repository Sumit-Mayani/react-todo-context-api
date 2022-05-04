import React, { useState, useEffect, createContext } from 'react';

//contextApi
export const DataContext = createContext();


// Provider
export const DataProvider = (props) => {

    //main state todo
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        //localstorage
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))

        if (todoStore) setTodos(todoStore);

    }, []);

    useEffect(() => {

        localStorage.setItem('todoStore', JSON.stringify(todos));

    }, [todos]);



    return (
        
      // provider state pass
    <DataContext.Provider value={[todos,setTodos]}>
        {props.children}
    </DataContext.Provider>
  )
}
