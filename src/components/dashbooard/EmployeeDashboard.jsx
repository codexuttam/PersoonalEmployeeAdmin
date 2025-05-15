import React from 'react';
import Header from '../others/Header'; 
import TaskListNumbers from '../others/TaskListNumbers'; 
import Tasklist from '../Tasklist/Tasklist'; 

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-10'>
        <div className='backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20'>
            <Header changeUser={props.changeUser} username={props.data?.name} />
            <TaskListNumbers data={props.data} />
            <Tasklist data={props.data} /> 
        </div>
    </div>
  );
};

export default EmployeeDashboard;