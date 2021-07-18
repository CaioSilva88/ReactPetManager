import React from 'react';

import Task from "./Task";

const Tasks= ({tasks, handleTaskDeletion}) =>{
   

    return(
        <>
            {tasks.map((task)=>(
                <Task task={task} handleTaskDeletion={handleTaskDeletion}/>))}
        </>


    )
};

export default Tasks;