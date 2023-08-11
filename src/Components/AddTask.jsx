import { useEffect } from "react";
import styled from "styled-components";

function AddTask({ tasks, setTasks, input, setInput, editTask, setEditTask }) {
  useEffect(() => {
    if (editTask) {
      setInput(editTask.taskName);
    }else{
      setInput("");
    }
  },[editTask]);
  // function to update task through map
  function updateTask(id,taskName,checked){
    const newTasks = tasks.map(allTaskObj=>(
      allTaskObj.id === id ? {id,taskName,checked} : allTaskObj
    ))
    setTasks(newTasks);//updating the state with updated values 
    setInput("");
    setEditTask(null);
  }
  // END- function to update task through map
  // function to add task object to tasks array
  function handleSubmit(evt) {
    evt.preventDefault();

    if(!editTask){
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          taskName: input,
          checked: false,
        },
      ]);
      // console.log(tasks); testing purpose
      setInput("");
    }
    else{
      updateTask(editTask.id,input,editTask.checked)
    }
  }
  // ENDS: function to add task object to tasks array

  // function to set input value to what we type, later we use
  // this input value to add it to taskName key of our task obj
  function handleChange(evt) {
    setInput(evt.target.value);
  }
  // ENDS: function to set input value to what we type
  return (
    <AddTaskContainer>
      <form onSubmit={handleSubmit}>
        <button className="btn">{editTask?"👍🏽":"+"}</button>
        <input
          type="text"
          className="inp"
          placeholder="Write Task here ✍️"
          onChange={handleChange}
          value={input}
        />
      </form>
    </AddTaskContainer>
  );
}

export default AddTask;
const AddTaskContainer = styled.div`
  border: 2.5px solid var(--border-color);
  border-radius: 10px;
  margin: 0 10px;
  form {
    width: 100%;
    padding: 5px;
    display: flex;
    gap: 10px;
  }
  .btn {
    width: 35px;
    height: 35px;
    background-color: var(--btn-inp-ico-color);
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: x-large;
    color: var(--todo-container-color);
    cursor: pointer;
  }
  .inp {
    background: none;
    border: none;
    outline: none;
    color: var(--text-color);
    width: 100%;
    font-size: large;
  }
`;
