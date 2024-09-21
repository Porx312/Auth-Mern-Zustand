import { Routes, Route, Navigate } from 'react-router-dom'
import LoginAuth from '../auth/LoginAuth'
import RegisterAuth from '../auth/RegisterAuth'
import Dashboard from '../dashboard/Dashboard'
import { useAuthStore } from '../store/Auth/auth.store'

const Myroutes = () => {
  const authStatus = useAuthStore(state => state.status)
  console.log(authStatus);
  return (
    <Routes>
      <Route path='/login' element={<LoginAuth />} />
      <Route path='/register' element={<RegisterAuth />} />
      <Route 
        path='/dashboard' 
        element={authStatus === 'pending' ? <h1>Cargando...</h1> : authStatus === 'authorized' ? <Dashboard /> : <Navigate to='/login' />} 
      />
      <Route path='/' element={<Navigate to='/login' />} />

    </Routes>
  )
}

export default Myroutes