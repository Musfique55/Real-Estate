import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex justify-center"><span className="loading loading-bars loading-lg"></span></div>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

PrivateRoute.propTypes = {
    children : PropTypes.node
}
export default PrivateRoute;