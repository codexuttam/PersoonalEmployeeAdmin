import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-2xl w-[45%] py-8 px-9 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300 border border-blue-400/20 group cursor-pointer'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300'>{data.taskCounts.newTask}</h2>
                    <h3 className='text-lg mt-2 font-medium text-blue-100'>New Tasks</h3>
                </div>
                <div className='w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='rounded-2xl w-[45%] py-8 px-9 bg-gradient-to-br from-green-500 to-green-600 shadow-lg hover:shadow-green-500/20 transform hover:scale-105 transition-all duration-300 border border-green-400/20 group cursor-pointer'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300'>{data.taskCounts.completed}</h2>
                    <h3 className='text-lg mt-2 font-medium text-green-100'>Completed Tasks</h3>
                </div>
                <div className='w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='rounded-2xl w-[45%] py-8 px-9 bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300 border border-yellow-400/20 group cursor-pointer'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300'>{data.taskCounts.active}</h2>
                    <h3 className='text-lg mt-2 font-medium text-yellow-100'>Active Tasks</h3>
                </div>
                <div className='w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='rounded-2xl w-[45%] py-8 px-9 bg-gradient-to-br from-red-500 to-red-600 shadow-lg hover:shadow-red-500/20 transform hover:scale-105 transition-all duration-300 border border-red-400/20 group cursor-pointer'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300'>{data.taskCounts.failed}</h2>
                    <h3 className='text-lg mt-2 font-medium text-red-100'>Failed Tasks</h3>
                </div>
                <div className='w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumbers