import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Course from "./Course";
// import { useLoadUserQuery, useUpdateUserMutation } from "@/features/api/authApi";
import { useSelector } from "react-redux";
const Profile = () => {
    const  selector=useSelector(user=>user)
    console
    const [name,setName]=useState("")
    const [profilePhoto,setProfilePhoto]=useState("")
    const {data,isLoading}=useLoadUserQuery()
    const [updateUser,{data:updateUserData,isLoading:updateUserIsLoading,error}]=useUpdateUserMutation()
    const enrolledCourses=[1,2]
    const onChangeHandler=(e)=>{
        const file=e.target.files?.[0];
        if(file) 
        setProfilePhoto(file)


    }
    const updateUserHandler=async ()=>{
        const formData=new FormData()
        formData.append("name",name)
        if(profilePhoto)
        {
            formData.append("profilePhoto",profilePhoto)

        }
        try{
            const res=await updateUser(formData).unwrap()
            .then((res)=>{
                console.log("res",res)
            })
            console.log("User updated",res)

        }
        catch(err){
            console.log("err",err)
        }


    }
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 md:px-0">
            <h1 className="font-bold text-2xl text-center md:text-left ml-2">PROFILE</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
                <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4 rounded-full border-4 border-gray-300">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                            className="rounded-full"
                        />
                        <AvatarFallback className="rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                            CN
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="mt-4">
                    <div className="mb-2 flex flex-col">
                        <h1 className="text-gray-900 dark:text-gray-300 font-semibold">
                            Name:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                                Suresh MernStack
                            </span>
                        </h1>
                    </div>
                    <div className="mb-2 flex flex-col">
                        <h1 className="text-gray-900 dark:text-gray-300 font-semibold">
                            Email:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                                suresh@gmail.com
                            </span>
                        </h1>
                    </div>
                    <div className="mb-2 flex flex-col">
                        <h1 className="text-gray-900 dark:text-gray-300 font-semibold">
                            Role:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                                Instructor
                            </span>
                        </h1>
                    </div>

                    {/* Dialog Box for Editing Profile */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" className="mt-2 bg-black text-white rounded-md hover:bg-gray-700">
                                Edit Profile
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-white">
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogDescription>Make changes to your profile</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div>
                                    <Label className="text-sm font-medium" htmlFor="name">
                                        Name
                                    </Label>
                                    <Input id="name" placeholder="Enter your name" defaultValue="Suresh MernStack" 
                                    onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div>
                                    <Label className="text-sm font-medium" htmlFor="email">
                                        Email
                                    </Label>
                                    <Input id="email" placeholder="Enter your email" defaultValue="suresh@gmail.com" />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium" htmlFor="role">
                                        Role
                                    </Label>
                                    <Input id="role" placeholder="Enter your role" defaultValue="Instructor" />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium" htmlFor="profile-photo">
                                        Profile Photo
                                    </Label>
                                    <Input type="file" accept="image/*" id="profile-photo" onChange={onChangeHandler} className="col-span-3" />
                                </div>
                                <Button className="w-full bg-black hover:bg-gray-700 text-white cursor-pointer" disabled={isLoading} onClick={updateUserHandler}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                                        </>
                                    ) : (
                                        "Save Changes"
                                    )}
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <h1 className="font-medium text-lg">Courses You're enrolled in</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
                    {
                        enrolledCourses.length==0 ? (<h1>You haven't enrolled yet</h1>) :
                        (
                            enrolledCourses.map((index,course)=><Course key={index}/>)
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;
