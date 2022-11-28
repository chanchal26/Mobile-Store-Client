import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/UserContext'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="w-16 h-16 text-center border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;