import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation();
     

    if(loading){
        return  <progress className="progress w-56" value="10" max="100"></progress>
    }
    if(user){
        return children;
    }
    console.log(user);
    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;