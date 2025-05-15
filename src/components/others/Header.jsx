import React, { useEffect, useState } from 'react'

const Header = (props) => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser')
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser)
            setUserName(userData.data?.name || 'Username')
        }
    }, [])

    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <div className='h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white'>
                    {userName.charAt(0)}
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-white'>Welcome, {userName} 👋</h1>
                    <p className='text-white/60 mt-1'>Manage your tasks and team productivity</p>
                </div>
            </div>
            <button 
                onClick={() => props.changeUser(null)}
                className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-medium transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-red-500/25'
            >
                Logout
            </button>
        </div>
    )
}

export default Header