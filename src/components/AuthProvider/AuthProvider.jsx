import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from './../../firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const updateUserProfile = (name,imageUrl) => {
      return updateProfile (auth.currentUser, {
        displayName : name,
        photoURL : imageUrl
      })
    }
    useEffect(() =>{
      const unSubscribe =   onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {createUser,loginUser,updateUserProfile,user}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node,
}
export default AuthProvider;