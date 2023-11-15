/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { auth } from "../services/userAuth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return listener
    }, [])


    const login = async (userData) => {
        const { email, password } = userData
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            if (userCredential) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/email-already-in-use') {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                if (userCredential) {
                    navigate('/dashboard')
                }
            }
        }
    }


    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <AuthContext.Provider value={{
            login,
            logout,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}