import { Route, Routes } from 'react-router-dom'
import { Dashboard } from 'scenes/dashboard'
import { Login } from 'scenes/login'
import { Landing } from '../scenes/landing'

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
