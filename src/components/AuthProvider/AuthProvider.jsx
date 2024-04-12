import {GoogleAuthProvider,GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from './../../firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email,password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const googleLogin = () => {
        setLoading(true);
       return signInWithPopup(auth,googleProvider);
    }

    const githubLogin =  () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    const updateUserProfile = (name,imageUrl) => {
      return updateProfile (auth.currentUser, {
        displayName : name,
        photoURL : imageUrl
      })
    }

    const logOut = () => {
        signOut(auth)
        
    }
    useEffect(() =>{
      const unSubscribe =   onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {createUser,loginUser,updateUserProfile,googleLogin,githubLogin,logOut,user,loading}
    
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