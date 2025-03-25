import { initialSignInFormData } from "@/config";
import { initialSignUpFormData } from "@/config";
import { regsiterService } from "@/services";
import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

    async function handleRegisterUser(event) {
        event.preventDefault();
        const data = await regsiterService(signUpFormData);
        console.log(data);
    }

    return (
        <AuthContext.Provider value={{
            signInFormData,
            setSignInFormData,
            signUpFormData,
            setSignUpFormData,
            handleRegisterUser
        }}>
            {children}
        </AuthContext.Provider>
    )
} 