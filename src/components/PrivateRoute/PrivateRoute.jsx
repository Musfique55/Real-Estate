import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

PrivateRoute.propTypes = {
    children : PropTypes.node
}
export default PrivateRoute;