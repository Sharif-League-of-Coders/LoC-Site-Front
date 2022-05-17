import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from 'scenes/dashboard'
import { Login } from 'scenes/login'
import { Landing } from '../scenes/landing'
import { useSelector } from 'react-redux'
import { isLoggedInVew } from '../scenes/_slice/account.slice'

export function Root() {
  const isLoggedIn = useSelector(isLoggedInVew)

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />} />

      <Route
        path="/dashboard"
        element={!isLoggedIn ? <Navigate to="/login" replace /> : <Dashboard />}
      />
    </Routes>
  )
}
