
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider >

  )
}

export default App
