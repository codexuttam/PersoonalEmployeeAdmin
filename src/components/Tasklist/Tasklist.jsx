import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[calc(100vh-24rem)] overflow-x-auto flex items-start justify-start gap-6 flex-nowrap w-full py-4 mt-16 px-2'>
            <div className='flex gap-6 items-start'>
                {data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList