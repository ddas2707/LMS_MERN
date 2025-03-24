import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import CommonForm from '@/components/common-form';
import { signUpFormControls } from '../../config';
import { signInFormControls } from '../../config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';


const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('signin')
    const { signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData } = useContext(AuthContext);

    function handleTabChange(val) {
        setActiveTab(val)
    }

    function checkIfSignInFormValid() {
        return signInFormData && signInFormData.userEmail != "" && signInFormData.password != ""; // ""--> empty string && " "-->not empty string but a space 
    }
    function checkIfSignUpFormValid() {
        return (
            signUpFormData &&
            signUpFormData.userName != "" &&
            signUpFormData.userEmail != "" &&
            signUpFormData.password != ""
        );
    }


    console.log(signInFormData);
    return (
        <>
            <div className="flex flex-col  min-h-screen">
                <header className='px-4 lg:px-6 h-14 flex items-center border-b bg-red-600' >
                    <Link to={'/'} className="flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 mr-4 text-white" />
                        <span className='font-extrabold text-xl'>LMS LEARN</span>
                    </Link>
                </header>
                <div className='flex items-center justify-center min-h-screen bg-background'>
                    <Tabs value={activeTab} defaultValue='signin' onValueChange={handleTabChange} className='w-full max-w-md'>
                        <TabsList className='grid w-full grid-cols-2'>
                            <TabsTrigger value='signin'>Sign In</TabsTrigger>
                            <TabsTrigger value='signup'>Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value='signin'>
                            <Card className='p-5 space-y-4'>
                                <CardHeader>
                                    <CardTitle>Sign in to your Account</CardTitle>
                                    <CardDescription>Enter your details below</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <CommonForm
                                        formControls={signInFormControls}
                                        buttonText={'Sign In'}
                                        formData={signInFormData}
                                        setFormData={setSignInFormData}
                                        isButtonDisabled={!checkIfSignInFormValid()}
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value='signup'>
                            <Card className='p-5 space-y-4'>
                                <CardHeader>
                                    <CardTitle>Create a New Account</CardTitle>
                                    <CardDescription>Enter your details to get Started !!!</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <CommonForm
                                        formControls={signUpFormControls}
                                        buttonText={'Sign Up'}
                                        formData={signUpFormData}
                                        setFormData={setSignUpFormData}
                                        isButtonDisabled={!checkIfSignUpFormValid()}
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
export default AuthPage;