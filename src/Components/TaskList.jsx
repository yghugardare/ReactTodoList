import styled from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { RiDeleteBin6Line, RiEditBoxFill } from "react-icons/ri";
import { useState } from "react";

function TaskList({ setTasks, tasks,  setEditTask }) {
  const [checked, setChecked] = useState(false);

  //   function to handle checkBox
  function handleClick(taskObj) {
    // console.log(todos ); Testing purpose
    setTasks(
      tasks.map((allTaskObj) => {
        if (allTaskObj.id === taskObj.id) {
          setChecked(!checked);
          return { ...allTaskObj, checked: !checked };
        }
        return allTaskObj;
      })
    );
  }
  // ENDS:  function to handle checkBox
  // function to handle Delete Operation
  function handleDelete(taskObj) {
    setTasks(
      tasks.filter((allTaskObj) => {
        if (allTaskObj.id !== taskObj.id) {
          return allTaskObj;
        }
      })
    );
  }
  // END: function to handle Delete Operation
  // function to handle Edit operation
  function handleEdit(taskObj){
    setEditTask(tasks.find((allTaskObj)=>{
      if(taskObj?.id === allTaskObj?.id){
        // console.log(allTaskObj);testing purpose
        return allTaskObj
      }
    }))
  }
  // END: function to handle Edit operation

  return (
    <>
      {/* READ OPERATION - dynamically rendering tasks array
        to suitable HTML Code 
    */}
      {tasks.map((taskObj) => (
        <TaskListContainer key={taskObj?.id} >
          <div className="box">
            <div className="checkBox" onClick={() => handleClick(taskObj)}>
              {taskObj?.checked ? (
                <ImCheckboxChecked className="check" />
              ) : (
                <ImCheckboxUnchecked className="check" />
              )}
            </div>
            <input
              type="text"
              className={(taskObj.checked?"done":"inp")}
              value={taskObj.taskName}
              onChange={(evt) => evt.preventDefault()}
            />
            <div className="Btns">
              <RiDeleteBin6Line
                className="delete"
                onClick={() => handleDelete(taskObj)}
              />
              <RiEditBoxFill
                className="edit"
                onClick={() => {
                  handleEdit(taskObj);
                }}
              />
            </div>
          </div>
        </TaskListContainer>
      ))}
      {/* Read Operation Ends */}
      {/* INITIAL CODE BUILD FOR IDEA FORMATION 
      <TaskListContainer>
        <div className="box">
          <div onClick={handleClick}>
            {checked ? (
              <ImCheckboxChecked className="check" />
            ) : (
              <ImCheckboxUnchecked className="check" />
            )}
          </div>
          <input type="text" className="inp"/>
        </div>
      </TaskListContainer> */}
    </>
  );
}

export default TaskList;
const TaskListContainer = styled.div`
  border: 1.75px solid var(--btn-inp-ico-color);
  border-radius: 10px;
  margin: 10px;
  .box {
    width: 100%;
    padding: 5px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    position: relative;
  }
  .checkBox {
    position: absolute;
  }
  .check {
    width: 25px;
    height: 30px;
    color: var(--btn-inp-ico-color);
    cursor: pointer;
  }
  .done{
    background: none;
    border: none;
    outline: none;
    color: var(--text-color);
    width: 85%;
    font-size: large;
    position: relative;
    left: 40px;
    bottom: 2.5px;
    text-decoration-line: line-through;
    text-decoration-thickness: 3px;
    opacity: 0.4;
  }
  .inp {
    background: none;
    border: none;
    outline: none;
    color: var(--text-color);
    width: 85%;
    font-size: large;
    position: relative;
    left: 40px;
    bottom: 2.5px;
    /* text-decoration: ${(props) => (props.isChecked ? line-through : "")}; */
  }
  .Btns {
    position: relative;
    top: 1.75px;
    display: flex;
    column-gap: 8px;
  }
  .delete {
    color: var(--btn-inp-ico-color);
    border: 1.5px solid var(--btn-inp-ico-color);
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .delete:hover {
    color: red;
    border: 1.5px solid tomato;
  }
  .edit {
    color: var(--btn-inp-ico-color);
    border: 1.5px solid var(--btn-inp-ico-color);
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .edit:hover {
    color: green;
    border: 1.5px solid chocolate;
  }
  @media (max-width: 480px) {
    .delete {
      color: red;
      border: 1.5px solid tomato;
    }
  }
`;
