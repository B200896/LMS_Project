import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginUserMutation, useRegisterUserMutation } from "../features/api/authApi";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function AuthPage() {
    const query = useQuery();
    const mode = query.get("mode") || "login"; // Default to "login" if no mode is provided
    const navigate = useNavigate();

    const [signup, setSignup] = useState({ name: "", email: "", password: "" });
    const [login, setLogin] = useState({ email: "", password: "" });

    const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerisSuccess }] = useRegisterUserMutation();
    const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSucess }] = useLoginUserMutation();

    const changeInput = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignup({ ...signup, [name]: value });
        } else {
            setLogin({ ...login, [name]: value });
        }
    };

    const handleRegisteration = async (e, type) => {
        e.preventDefault();
        const inputData = type === "signup" ? signup : login;
        const action = type === "signup" ? registerUser : loginUser;
        console.log("actionn",inputData)
        try {
            const result = await action(inputData).unwrap();
           
            if (type === "signup") {
                setSignup({ name: "", email: "", password: "" });
                toast.success(result.message || "Signup Successful");
                navigate("/auth?mode=login");
            } else {
                setLogin({ email: "", password: "" });
              
                if (result?.token) {
                    window.sessionStorage.setItem("userData", JSON.stringify({ user: result.user, token: result.token }));
                    toast.success(result.message || "Login Successful");
                    navigate("/"); 
                }
            }
        } catch (err) {
            toast.error(err?.data?.message || "Authentication Failed");
        }
    };
    

    // useEffect(() => {
    //     if (registerisSuccess && registerData) {
    //         toast.success(registerData.message || "Signup Successful");
    //     }
    //     if (registerError) {
    //         toast.error(registerError.data?.message || "Signup Failed");
    //     }
    //     if (loginError) {
    //         toast.error(loginError.data?.message || "Login Failed");
    //     }
    //     if (loginIsSucess && loginData) {
    //         if (loginData?.token) {
    //             window.sessionStorage.setItem("userData", JSON.stringify({ user: loginData.user, token: loginData?.token }));
    //         }
    //         toast.success(loginData.message || "Login Successful");
    //         navigate('/');
    //         // window.location.reload();
    //     }
    // }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);

    return (
        <div className="flex item-center justify-center mt-20">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>{mode === "signup" ? "Signup" : "Login"}</CardTitle>
                    <CardDescription>
                        {mode === "signup" ? "Create a new account and click signup when you're done" : "Login to your account."}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {mode === "signup" && (
                        <>
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input name="name" value={signup.name} type="text" placeholder="Enter Your Name" className="placeholder:text-grey-200" onChange={(e) => changeInput(e, "signup")} required />
                            </div>
                        </>
                    )}
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" value={mode === "signup" ? signup.email : login.email} placeholder="Enter Your Email" className="placeholder:text-grey-200" onChange={(e) => changeInput(e, mode)} required />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" value={mode === "signup" ? signup.password : login.password} placeholder="Enter your password" className="placeholder:text-grey-200" onChange={(e) => changeInput(e, mode)} required />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button disabled={mode === "signup" ? registerIsLoading : loginIsLoading} className="cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-full"onClick={(e) => handleRegisteration(e, mode)}>
                        {(mode === "signup" ? registerIsLoading : loginIsLoading) ? (
                            <Loader2 className="mr-2 h-4 animate-spin" />
                        ) : mode === "signup" ? "Sign Up" : "Login"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
