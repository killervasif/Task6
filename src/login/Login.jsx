import React from 'react'
import LoginCard from './components/LoginCard'
function Login({ setAuthorized, setEmail,email }) {
    return (
        <div className='flex justify-center items-center h-screen'>
            <LoginCard email={email} setEmail={setEmail} setAuthorized={setAuthorized}></LoginCard>
        </div>
    )
}

export default Login