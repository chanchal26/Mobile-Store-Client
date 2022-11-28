import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/UserContext'
import useAdmin from '../Hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    console.log(isAdmin);
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoutes;