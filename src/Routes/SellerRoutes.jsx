import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/UserContext'
import useSeller from '../Hooks/useSeller';

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { email } = user;
    const [isSeller, isSellerLoading] = useSeller(email);
    const location = useLocation()

    if (loading || isSellerLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if (user && isSeller) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default SellerRoutes;