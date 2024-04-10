import {GoogleAuthProvider,GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from './../../firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const googleLogin = () => {
       return signInWithPopup(auth,googleProvider);
    }

    const githubLogin =  () => {
        signInWithPopup(auth,githubProvider)
        .then(() => {

        })
        .catch(error => {
            console.log(error);
        })
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
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {createUser,loginUser,updateUserProfile,googleLogin,githubLogin,logOut,user}
    
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