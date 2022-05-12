import { Route, Routes } from 'react-router-dom'
import { Login } from 'scenes/login'
import { Landing } from '../scenes/landing'

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
