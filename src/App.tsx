import { useState } from 'react';
import './App.css';
import { Button, Input, TodoElement, } from './ui-kit';

export interface TodoItem {

  id: number ;
  text: string ;
  done: boolean ;

}

function App() {

  const [todoText, setTodoText] = useState ('')

  const [todoList, setTodoList] = useState <TodoItem[]> ( [

    { id: 1, text: 'First todo text', done: false }

  ] )

  const onChange = (todoText: string) => setTodoText(todoText)

  const addTodo = () => {

    if (todoText.trim()) {

      setTodoList((todoList) => [...todoList,

         { id: Date.now(), text: todoText.trim(), done: false }
      
      ])

      setTodoText('')

    }

  }

  const handleChange = (id: number) => {

    setTodoList ((todoList) => todoList.map ((e) => {

      if (e.id === id) {

        return {...e , done: !e.done}

      }

      return e

    }))

  }

  return (

    <div className="App">
      
      <Input

        value = {todoText}
        placeholder = 'Add your todo ...'
        onChange = {onChange}

      />

      <Button onClick = {addTodo}  > Add </Button>

      <TodoElement todoList = {todoList} handleChange = {handleChange}  />

    </div>

  );

}

export default App;
