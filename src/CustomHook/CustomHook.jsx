import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const CustomHook = () => {
    const authHook = useContext(AuthContext);
    return authHook;
};

export default CustomHook;