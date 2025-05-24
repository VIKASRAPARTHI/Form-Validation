import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm'
import UserDetails from './components/UserDetails'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/details" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
