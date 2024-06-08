import React from 'react';
// import { RiseLoader } from "react-spinners";
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { RiseLoader } from "react-spinners";

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLOading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLOading){
        return  <RiseLoader color={'#F2AE02'} size={20} />
 

    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={ {from: location} } replace></Navigate>
};

export default AdminRoute;