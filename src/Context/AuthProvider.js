import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firbase/firbase.config';


export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user,setUser] = useState({})
const [loading,setLoading] = useState(true)

const googleProvider = new GoogleAuthProvider()


const Register = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const LogIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const googleLogIn = () => {
    return signInWithPopup(auth,googleProvider)
}

const LogOut = () => {
    return signOut(auth)
}



const authInfo = {Register,LogIn,googleLogIn,LogOut,user,loading}


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
    })
},[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;