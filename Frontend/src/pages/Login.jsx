//2KOueTJmAK3X3j1Z
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoginUserMutation, useRegisterUserMutation } from "../features/api/authApi"
import { useEffect, useState } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import axios from "axios"
import { Loader2 } from "lucide-react"
export default function Login() {
    const [signup,setSignup]=useState({name:"",email:"",password:""})
    const [login,setLogin]=useState({email:"",password:""})
    const [registerUser,{data:registerData,error:registerError,isLoading:registerIsLoading,isSuccess:registerisSuccess}]=useRegisterUserMutation()
    const [loginUser,{data:loginData,error:loginError,isLoading:loginIsLoading,success:loginIsSucess}]=useLoginUserMutation()
    const changeInput=(e,type)=>{
       
        const {name,value}=e.target;  
        console.log("ee",e)
       if(type==="signup"){

        setSignup({...signup,[name]:value})
       }
       else{
        setLogin({...login,[name]:value})
       }
    }
    const handleRegisteration=async (e,type)=>
    {
        e.preventDefault()
        const inputData=type==="signup" ? signup : login
        const action=type==="signup" ? registerUser : loginUser
        await action(inputData)
        console.log("ress",response)
        console.log("ii",inputData)

    }
  
  return (
    <div className="flex item-center justify-center">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Create a new account and click signup when you're done
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input name="name" value={signup.name} type="text" placeholder="eg. Kashish"  onChange={(e)=>changeInput(e,"signup")} required="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" value={signup.email} placeholder="eg. Kashish@gmail.com"  onChange={(e)=>changeInput(e,"signup")}  required="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Password</Label>
              <Input type="password" name="password" value={signup.password} placeholder="eg.xyx"  onChange={(e)=>changeInput(e,"signup")}  required="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={registerIsLoading} onClick={(e)=>{handleRegisteration(e,"signup")}}>{registerIsLoading ? (<>
            <Loader2 className="mr-2 h-4 animate-spin"/>
            </>) :"sign up"}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
             Login your password here.After signup,you'll be logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input type="email" name="email" value={login.email} placeholder="eg. Kashish@gmail.com" onChange={(e)=>changeInput(e,"login")} required="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input type="password" name="password" value={login.password} placeholder="eg.xyx"  onChange={(e)=>changeInput(e,"login")} required="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loginIsLoading}onClick={(e)=>handleRegisteration(e,"login")}>{loginIsLoading ? (
              <>
              <Loader2 className="mr-2 h-4 animate-spin"/>
              </>
            ) :"Login"}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
