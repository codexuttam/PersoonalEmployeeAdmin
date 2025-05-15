import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-[320px] w-[300px] p-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300 border border-yellow-400/20'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600/30 text-sm px-3 py-1 rounded-full font-medium text-yellow-50'>{data.category}</h3>
                <h4 className='text-sm text-yellow-50/80'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold text-white'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-yellow-50/80 line-clamp-3'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between gap-3 mt-6'>
                <button className='flex-1 bg-green-500/20 hover:bg-green-500/30 rounded-lg font-medium py-2 px-3 text-sm text-white transition-all duration-300 flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete
                </button>
                <button className='flex-1 bg-red-500/20 hover:bg-red-500/30 rounded-lg font-medium py-2 px-3 text-sm text-white transition-all duration-300 flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask