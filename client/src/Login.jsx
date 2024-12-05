import React from 'react'
import { auth, provider } from './utils/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const googleLogin = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const user = response.user
            const userData = {
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL,
                phoneNumber: user.phoneNumber
            }
            const apiResponse = await fetch('http://localhost:3000/api/auth/google-login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData)
            })

            if (!apiResponse.ok) {
                throw new Error('Failed to login.')
            }

            const responseData = await apiResponse.json()
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div >
            <h1>Google Login Integration</h1>
            <button onClick={googleLogin}>Sign In With Google</button>
        </div>
    )
}

export default Login 