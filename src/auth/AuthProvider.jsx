import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import app from "./firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //register
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //update profile
    const changeProfile = (user, profileData) => {
        setLoading(true)
        return updateProfile(user, profileData)
    }

    //verification email
    const verifyEmail = (user) => {
        setLoading(true)
        return sendEmailVerification(user)
    }

    // signWithGoogle
    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }




    //data store

    const authInfo = {
        user,
        createUser,
        changeProfile,
        verifyEmail,
        signWithGoogle,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;