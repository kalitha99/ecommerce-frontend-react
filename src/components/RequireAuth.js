import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/userAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    var rolname ="";
    auth?.roles?.map((item,i) => {
        rolname=item.roleName;
    })

    console.log(rolname)

    return (
     allowedRoles?.includes(rolname)
        
            ? <Outlet />
            : auth?.userName
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;