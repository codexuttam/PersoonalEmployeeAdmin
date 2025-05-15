import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-8 backdrop-blur-lg bg-white/5 mt-8 rounded-2xl border border-white/10 shadow-xl'>
            <h2 className='text-2xl font-bold text-white mb-6'>Create New Task</h2>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between gap-6'
            >
                <div className='w-1/2'>
                    <div className='mb-6'>
                        <label className='text-sm text-white/70 mb-2 block'>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 text-white'
                            type="text"
                            placeholder='Enter task title'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='text-sm text-white/70 mb-2 block'>Due Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 text-white'
                            type="date"
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='text-sm text-white/70 mb-2 block'>Assign To</label>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 text-white'
                            type="text"
                            placeholder='Enter employee name'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='text-sm text-white/70 mb-2 block'>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 text-white'
                            type="text"
                            placeholder='Enter category'
                        />
                    </div>
                </div>

                <div className='w-[45%] flex flex-col items-start'>
                    <label className='text-sm text-white/70 mb-2 block'>Description</label>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-[280px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 text-white resize-none'
                        placeholder='Enter task description'
                    ></textarea>
                    <button className='mt-6 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-emerald-500/25'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask