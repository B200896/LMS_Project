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
import { useEffect, useState } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Login() {
    const [signup,setSignup]=useState({name:"",email:"",password:""})
    const [login,setLogin]=useState({email:"",password:""})
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
    const handleRegisteration=(e,type)=>
    {
        e.preventDefault()
        const inputData=type==="signup" ? signup : login
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
            <Button onClick={(e)=>{handleRegisteration(e,"signup")}}>SignUp</Button>
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
            <Button onClick={(e)=>handleRegisteration(e,"login")}>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
