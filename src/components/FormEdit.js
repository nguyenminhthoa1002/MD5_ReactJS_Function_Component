import React, { useContext, useRef, useState } from 'react'
import { DataContext } from './DataProvider'
import Items from './Items';


export default function FormEdit(props) {
  const [todos, setTodos] = useContext(DataContext);
  const store = JSON.parse(localStorage.getItem("todo"))
  const newTodos = store.filter(todo => todo.taskId == props.id);
  const task_name = useRef();
  const task_level = useRef();
  const handleUpdate = () => {
    const updateTodos = store.map((todo) => {
      if (todo.taskId == props.id) {
        todo.taskName = task_name.current.value;
        todo.taskLevel = task_level.current.value;
      }
      return todo;
    })
    setTodos(updateTodos)
    const jsonTodos = JSON.stringify(updateTodos);
    localStorage.setItem("todo", jsonTodos);
    props.handleChangeToggle();
  }

    return (<tr>
      <td className="text-center">{newTodos[0].taskId}</td>
      <td>
        <input className='form-control' type="text" defaultValue={newTodos[0].taskName} ref={task_name}></input>
      </td>
      <td className="text-center">
        <select className='form-control' ref={task_level} defaultValue={(newTodos[0].taskLevel) == 1 ? "Small" : (newTodos[0].taskLevel) == 2 ? "Medium" : "High"}>
          <option value={1}>Small</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
      </td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleUpdate} >
          Save
        </button>
      </td>
    </tr>)
}

