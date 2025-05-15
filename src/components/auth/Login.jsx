import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        handleLogin(email, password)
        setIsLoading(false)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
            <div className='backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 w-96'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>Welcome Back 👋</h2>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col gap-6'
                >
                    <div className='relative group'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 peer text-white'
                            type="email"
                            placeholder=' '
                        />
                        <label className='absolute left-4 top-3 text-white/50 transition-all duration-300 pointer-events-none 
                            peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-white/70
                            peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm'>
                            Email Address
                        </label>
                    </div>

                    <div className='relative group'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all duration-300 peer text-white'
                            type="password"
                            placeholder=' '
                        />
                        <label className='absolute left-4 top-3 text-white/50 transition-all duration-300 pointer-events-none 
                            peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-white/70
                            peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm'>
                            Password
                        </label>
                    </div>

                    <button 
                        className={`mt-4 text-white font-semibold bg-gray-900/90 py-3 px-8 rounded-lg 
                            transform hover:bg-gray-800 active:scale-95 transition-all duration-300
                            disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center
                            border border-white/10 hover:border-white/20`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-white"></span>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
