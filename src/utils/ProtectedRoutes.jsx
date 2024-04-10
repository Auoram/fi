import React from 'react'
import { Outlet , Navigate } from "react-router-dom"

function protectedroutes() {
    const user = null
    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default protectedroutes