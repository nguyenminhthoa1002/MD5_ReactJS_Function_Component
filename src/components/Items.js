import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import FormEdit from './FormEdit';


export default function Items(props) {
  const [todos, setTodos] = useContext(DataContext);
  const [isToggle, setToggle] = useState(false);
  const [idUpdate,setIdUpdate] = useState();
  const {taskId, taskName, taskLevel } = props.todo
  const handleDelete = (id) => {
    const store = JSON.parse(localStorage.getItem("todo"))
    const newTodos = store.filter(todo => todo.taskId != id);
    setTodos(newTodos);
    const json = JSON.stringify(newTodos)
    localStorage.setItem("todo", json)
  }
  const handleEdit = (id) => {
    setToggle(true)
    setIdUpdate(id)
  }
  const handleChangeToggle =() => {
    setToggle(false)
  }
  if (isToggle) {
    return(<FormEdit id={idUpdate} handleChangeToggle={handleChangeToggle}></FormEdit>)
  } else {
    return (
      <tr>
        <td className="text-center">{taskId}</td>
        <td>
          {taskName}
        </td>
        <td className="text-center">
          <span className={(taskLevel == 1) ? "label label-default" : (taskLevel == 2) ? "label label-info" : "label label-danger"}>
            {taskLevel == 1 ? "Small" : taskLevel == 2 ? "Medium" : "High"}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning" onClick={() => { handleEdit(taskId) }}>
            Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={() => { handleDelete(taskId) }}>
            Delete
          </button>
        </td>
      </tr>
  
    )
  }
}
