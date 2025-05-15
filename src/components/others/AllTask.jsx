import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
   
    return (
        <div className='backdrop-blur-lg bg-white/5 p-8 rounded-2xl mt-8 border border-white/10 shadow-xl'>
            <h2 className='text-2xl font-bold text-white mb-6'>Team Overview</h2>
            <div className='bg-gradient-to-r from-purple-500 to-purple-600 mb-4 py-3 px-6 flex justify-between rounded-xl shadow-lg'>
                <h2 className='text-base font-semibold w-1/5 text-purple-100'>Employee Name</h2>
                <h3 className='text-base font-semibold w-1/5 text-purple-100'>New Tasks</h3>
                <h5 className='text-base font-semibold w-1/5 text-purple-100'>Active Tasks</h5>
                <h5 className='text-base font-semibold w-1/5 text-purple-100'>Completed</h5>
                <h5 className='text-base font-semibold w-1/5 text-purple-100'>Failed</h5>
            </div>
            <div className='space-y-3'>
                {userData.map((elem, idx) => (
                    <div key={idx} className='bg-white/5 backdrop-blur-sm py-3 px-6 flex justify-between rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10'>
                        <h2 className='text-base font-medium w-1/5 text-white'>{elem.firstName}</h2>
                        <h3 className='text-base font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='text-base font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='text-base font-medium w-1/5 text-emerald-400'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-base font-medium w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask