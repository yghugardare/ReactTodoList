import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import styled from "styled-components";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { useState,useEffect } from "react";
function App() {
  const [mode, setMode] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState(null);
  //Storing items in local storage
  //adding items to Local Storage
  useEffect(()=>{
    localStorage.setItem('mode',JSON.stringify(mode));
  },[mode]);
  useEffect(()=>{
    const mode =JSON.parse(localStorage.getItem('mode'));
    setMode(mode);
  },[]);
 
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);
  // getting items stored for every refresh and rendering 
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
    
  }, []);
  //Ends -Storing items in local storage

  function handleMode() {
    setMode(!mode);
  }
  return (
    <div className={mode ? "dark" : "light"}>
      <Container>
        <div className="modes" onClick={handleMode}>
          {mode ? <MdDarkMode /> : <MdOutlineLightMode />}
        </div>
        <ToDoContainer>
          <Header tasks={tasks} />
          <AddTask
            tasks={tasks}
            setTasks={setTasks}
            input={input}
            setInput={setInput}
            editTask={editTask}
            setEditTask={setEditTask}
          />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        </ToDoContainer>
      </Container>
    </div>
  );
}

export default App;
const Container = styled.section`
  min-height: 100vh;
  background-color: var(--container-color);
  color: var(--text-color);
  padding: 3rem 0;
  .modes {
    position: fixed;
    left: 95%;
    bottom: 90%;
    border: 2px solid var(--text-color);
    height: 30px;
    width: 30px;
    display: grid;
    border-radius: 50%;
    place-items: center;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    .modes {
      left: 90vw;
      bottom: 95vh;
    }
  }
`;
const ToDoContainer = styled.div`
  background-color: var(--todo-container-color);
  margin: 0 auto;
  max-width: 600px;
  min-height: 80vh;
  border-radius: 5px;
  padding: 10px 0;
  @media (max-width: 480px) {
    max-width: 500px;
    min-height: 50vh;
  }
`;
