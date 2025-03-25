import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData } from "@/config";
import { initialSignUpFormData } from "@/config";
import { regsiterService, loginService, checkAuthService } from "@/services";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    const [auth, setAuth] = useState({
        authenticate: false,
        user: null,
    })

    const [loading, setLoading] = useState(true);

    async function handleRegisterUser(event) {
        event.preventDefault();
        const data = await regsiterService(signUpFormData);
        console.log(data);
    }

    async function handleLoginUser(event) {
        event.preventDefault();
        const data = await loginService(signInFormData);
        console.log(data);
        if (data.success) {
            sessionStorage.setItem('accessToken', JSON.stringify(data?.data?.accessToken))
            setAuth({
                authenticate: true,
                user: data?.data?.user,
            })
        } else {
            setAuth({
                authenticate: false,
                user: null
            })
        }
    }
    //auth function to check User
    async function checkAuthUser() {
        try {
            const data = await checkAuthService();
            if (data.success) {
                setAuth({
                    authenticate: true,
                    user: data?.data?.user,
                })
                setLoading(false);
            } else {
                setAuth({
                    authenticate: false,
                    user: null
                })
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            if (!error?.response?.data?.success) {
                setAuth({
                    authenticate: false,
                    user: null,
                })
                setLoading(false);
            }
        }
    }
    useEffect(() => {
        checkAuthUser();
    }, [])


    return (
        <AuthContext.Provider value={{
            signInFormData,
            setSignInFormData,
            signUpFormData,
            setSignUpFormData,
            handleRegisterUser,
            handleLoginUser,
            auth,
        }}>
            {/* Lazy loading has implemented here */}
            {
                loading ? <Skeleton /> : children
            }
        </AuthContext.Provider>
    )
} 