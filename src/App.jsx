import { useState } from 'react'
import './App.css'
import Login from './login/Login'
import Mainpage from './mainpage/Mainpage'

function App() {
  const [authorized, setAuthorized] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <>
      {authorized ? <Mainpage email={email} setAuthorized={setAuthorized} /> 
      : <Login email={email} setEmail={setEmail} setAuthorized={setAuthorized} />}
    </>
  )
}

export default App
