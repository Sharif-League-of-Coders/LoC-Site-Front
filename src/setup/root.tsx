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
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login isRegistration={false} />
          )
        }
      />
      <Route
        path="/signup"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login isRegistration />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          !isLoggedIn && process.env.NODE_ENV === 'production' ? (
            <Navigate to="/signup" replace />
          ) : (
            <Dashboard />
          )
        }
      />
    </Routes>
  )
}
