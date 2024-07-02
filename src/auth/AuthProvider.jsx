import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update profile
    const changeProfile = (user, profileData) => {
        setLoading(true);
        return updateProfile(user, profileData);
    };

    // Verification email
    const verifyEmail = (user) => {
        setLoading(true);
        return sendEmailVerification(user);
    };

    // Sign with Google
    const provider = new GoogleAuthProvider();
    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const signInAccess = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const LogOut = () => {
        return signOut(auth);
    };

    const passwordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User in the auth change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    // Data store
    const authInfo = {
        user,
        createUser,
        changeProfile,
        verifyEmail,
        signWithGoogle,
        signInAccess,
        LogOut,
        passwordReset,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}


/***
 * 1. create context
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the 
 * middle of the Provider.
 * 
 */