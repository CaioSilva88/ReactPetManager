import React, { useState } from 'react';
import "./App.css";
import AddTask from './Components/AddTask';
import Tasks from "./Components/Tasks";
import {v4 as uuidav4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TaskDetails from './Components/TaskDetails';

const App = () =>{

  //let message = 'Hello world!';
  let meuspets ='Meus Pets';
  const [ptbr, handleChangeLanguage] = useState("PT-BR");

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Cachorrinho Elvis',
      completed: false,
    },
    {
      id: '2',
      title: 'Gatinho triste',
      completed: true,
    },
   

  ]);

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidav4(),
        completed:false,
    },
  ];
    setTasks(newTasks);
  };



  //remover task
  const handleTaskDeletion = (taskId)=>{
    const newTasks = tasks.filter(task => task.id!=taskId)
    setTasks(newTasks)
  }

  // const handleChangeLanguage = ()=>{
  //   ptbr="en-us"
  // }

  return <Router>

    <div className="inicio">
      <h1>PetManager</h1>

      <button  className="change-language" onClick={handleChangeLanguage}>{ptbr}</button>

    </div>
    

    <div className="container">
      <h2>{meuspets}</h2>
      <Route path="/" exact render={()=>(
          <>
<AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskDeletion={handleTaskDeletion}/>
          </>

      )}/>

        <Route path="/:taskTitle" exact component={TaskDetails}/>

    </div>
  </Router>

}

export default App;
