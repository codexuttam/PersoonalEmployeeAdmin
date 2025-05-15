import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-[320px] w-[300px] p-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300 border border-blue-400/20'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600/30 text-sm px-3 py-1 rounded-full font-medium text-blue-50'>{data.category}</h3>
                <h4 className='text-sm text-blue-50/80'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold text-white'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-blue-50/80 line-clamp-3'>
                {data.taskDescription}
            </p>
            <div className='mt-6 flex items-center justify-center'>
                <div className='bg-blue-600/30 rounded-lg py-2 px-4 text-sm text-white flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Completed
                </div>
            </div>
        </div>
    )
}

export default CompleteTask