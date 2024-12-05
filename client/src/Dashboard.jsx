import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [userData, setUser] = useState()
    useEffect(() => {
        const getUser = async () => {
            try {
                const apiResponse = await fetch('http://localhost:3000/api/auth/get-user', {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!apiResponse.ok) {
                    throw new Error('Unauthorized')
                }
                const responseData = await apiResponse.json()

                setUser(responseData)
            } catch (error) {
                console.log(error)
            }
        }

        getUser()
    }, [])
    if (!userData || !userData.success) return <div>Loading...</div>
    return (
        <div>
            <h1>User Data</h1>
            <p>Name: {userData.user.name}</p>
            <p>Email: {userData.user.email}</p>
            <p>Phone Number: {userData.user.phoneNumber}</p>
        </div>
    )
}

export default Dashboard