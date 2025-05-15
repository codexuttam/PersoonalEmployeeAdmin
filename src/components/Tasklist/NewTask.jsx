import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-[320px] w-[300px] p-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105 transition-all duration-300 border border-emerald-400/20 flex flex-col justify-between'>
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-emerald-600/30 text-sm px-3 py-1 rounded-full font-medium text-emerald-50'>{data.category}</h3>
                    <h4 className='text-sm text-emerald-50/80'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-bold text-white line-clamp-2'>{data.taskTitle}</h2>
                <p className='text-sm mt-2 text-emerald-50/80 line-clamp-3'>
                    {data.taskDescription}
                </p>
            </div>
            <div className='mt-auto'>
                <button className='w-full bg-emerald-600/30 hover:bg-emerald-600/40 rounded-lg font-medium py-2 px-4 text-sm text-white transition-all duration-300 flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask