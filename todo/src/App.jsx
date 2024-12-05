import { useState } from 'react';
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";


function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    if (!taskName.trim()) return; 
    const newTask = { taskName, checked: false };
    setToDoList((prevToDoList) => [...prevToDoList, newTask]);
  };

  function deleteTask(deleteTaskName){
    setToDoList(toDoList.filter((task) => task.
  taskName !== deleteTaskName));
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList) => 
      prevToDoList.map((task) =>
    task.taskName === taskName ? { ...task, 
      checked: !task.checked}: task,
    ),
    );
  }

  console.log(toDoList);
  return ( 
  <>
    <div className="container">
      <h1>To Do List</h1>

      <TaskInput addTask={addTask}/> 

      <div className="toDoList"> 
        <span>To do</span> 
        <ul className="list-items"> 
        {Array.isArray(toDoList) && toDoList.map((task, key) => (
          <TaskItem
            task={task}
            key={key}
            deleteTask={deleteTask}
            toggleCheck={toggleCheck} 
            />  
          ))}  
        </ul> 

        {toDoList.length === 0 ? (
          <p className="notify"> You are done!</p>
        ) :null}
      </div>
    </div>
    <Stats toDoList={toDoList} />
  </>
  );
  
}

export default App
