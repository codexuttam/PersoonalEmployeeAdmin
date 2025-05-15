import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashbooard/EmployeeDashboard'
import AdminDashboard from './components/dashbooard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email === 'uttam@raj.com' && password === '123') {
      setUser('admin')
      setLoggedInUserData({ name: 'Uttam Raj' }) 
      localStorage.setItem('loggedInUser', JSON.stringify({ 
        role: 'admin',
        data: { name: 'Uttam Raj' }  
      }))
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData({...employee, name: `${employee.firstName} ${employee.lastName}`})
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'employee', 
          data: {...employee, name: `${employee.firstName} ${employee.lastName}`} 
        }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? 
        <AdminDashboard changeUser={setUser} username={loggedInUserData?.name} /> : 
        (user === 'employee' ? 
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : 
          null
        )
      }
    </>
  )
}

export default App