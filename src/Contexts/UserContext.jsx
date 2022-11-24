import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import app from '../Config/Firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const updateName = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL, })
    }



    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const logout = () => {
        toast.success(
            'You have successfully signed Out!'
        )
        setLoading(true)
        return signOut(auth)
    }


    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {

            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        updateName,
        signInWithGoogle,
        signInWithGithub,
        logout,
        login,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;