import React, { useContext, useRef } from 'react'
import { DataContext } from './DataProvider';

export default function Form() {
  const task_name = useRef();
  const task_level = useRef();
  const [todos,setTodos] = useContext(DataContext)
  const handleAdd = (e) => {
    if(task_name.current.value != "" && task_level.current.value != ""){
      let idMax = 0;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].taskId > idMax) {
          idMax = todos[i].taskId
        }
      }
      setTodos(()=>{
        const newTodos = [...todos,{
          taskId: idMax +1,
          taskName: task_name.current.value,
          taskLevel: task_level.current.value
        }];
        const jsonTodos = JSON.stringify(newTodos);
        localStorage.setItem("todo",jsonTodos);
        task_name.current.value = "";
        return newTodos;
      })
    } else {
      e.preventDefault();
    }
  }
  return (
    <div className="row">
    <div className="col-md-offset-7 col-md-5">
      <form action="" method="POST" className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="">
            label
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            ref={task_name}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="">
            label
          </label>
          <select
            name="ds"
            id="inputDs"
            className="form-control"
            required="required"
            ref={task_level}
          >
            <option value={1}>Small</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Submit
        </button>
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </form>
    </div>
  </div>
  )
}
